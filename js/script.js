// ======================================================
// 0. CONFIGURACIÓN
// ======================================================

// Divs que sí quieres que cargue (los demás los ignora)
const SECCIONES_PERMITIDAS = [
  "#main-videos",
  "#main-info",
  "#main-proyectos"
];

// HTML externo que quieras cargar POR PARTES
const HTML_EXTERNOS = [
  "videos1.html",
  "videos2.html",
  "videos3.html"
];

// ======================================================
// 1. CACHE DEL HTML EN LOCALSTORAGE
// ======================================================

window.addEventListener("beforeunload", () => {
  const contenido = document.querySelector("main").innerHTML;
  localStorage.setItem("cachedMain", contenido);
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("cachedMain");

  if (saved) {
    // segunda visita → cargamos rápido
    document.querySelector("main").innerHTML = saved;
    iniciarFuncionalidades(); 
  } else {
    // primera visita → carga normal
    cargarSeccionesPermitidas();
  }
});


// ======================================================
// 2. CARGA SOLO LAS SECCIONES NECESARIAS
// ======================================================

function cargarSeccionesPermitidas() {
  SECCIONES_PERMITIDAS.forEach(selector => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.dataset.lazySection = "true";
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cargarSeccion(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll("[data-lazy-section]").forEach(el => {
    observer.observe(el);
  });
}

function cargarSeccion(div) {
  const file = div.dataset.file;
  if (!file) return;

  fetch(file)
    .then(r => r.text())
    .then(html => {
      div.innerHTML = html;
      iniciarFuncionalidades();
    });
}


// ======================================================
// 3. LAZY LOAD DE IFRAME YOUTUBE
// ======================================================

let iframeActivo = null;
let timerIframe = null;

function iniciarFuncionalidades() {

  // Reemplazar iframes normales por botones + thumbs
  document.querySelectorAll("iframe[data-yt]").forEach(old => {
    const videoID = old.dataset.yt;

    const box = document.createElement("div");
    box.className = "yt-box";
    box.dataset.video = videoID;

    box.innerHTML = `
      <img loading="lazy" 
           src="https://img.youtube.com/vi/${videoID}/hqdefault.jpg"
           style="width:100%;border-radius:8px;">
      <button class="yt-load" style="
        width:100%;
        padding:10px;
        margin-top:8px;
        border:none;
        background:#6ce6b6;
        color:#000;
        border-radius:6px;
        cursor:pointer;">
        ▶ Reproducir
      </button>
    `;

    old.replaceWith(box);
  });

  // Evento principal
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("yt-load")) {
      const box = e.target.closest(".yt-box");
      const id = box.dataset.video;

      // borrar anterior
      if (iframeActivo) iframeActivo.remove();

      // crear nuevo
      const ifr = document.createElement("iframe");
      ifr.width = "100%";
      ifr.height = "300";
      ifr.allowFullscreen = true;
      ifr.loading = "lazy";
      ifr.src = "https://www.youtube.com/embed/" + id;

      box.appendChild(ifr);
      iframeActivo = ifr;

      resetTimeoutIframe();
    }
  });
}

function resetTimeoutIframe() {
  if (timerIframe) clearTimeout(timerIframe);
  timerIframe = setTimeout(() => {
    if (iframeActivo) iframeActivo.remove();
    iframeActivo = null;
  }, 20000);
}


// ======================================================
// 4. LIMPIEZA DE RAM (DOM PRUNING)
// ======================================================
setInterval(() => {
  const max = 450; 
  const all = document.body.getElementsByTagName("*");

  if (all.length > max) {
    for (let i = max; i < all.length; i++) {
      const node = all[i];
      if (!node.closest("header") && !node.closest(".layout")) {
        node.remove();
      }
    }
  }
}, 5000);

// ========================
// 1. CACHE DEL HTML
// ========================

// Guarda el contenido cuando la página está lista
    /*
window.addEventListener("beforeunload", () => {
  localStorage.setItem("cachedHTML", document.body.innerHTML);
});

// Al cargar, si existe versión guardada: úsala
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("cachedHTML");
  if (saved) {
    document.body.innerHTML = saved;
  }
});


// ========================
// 2. LAZY LOADING GLOBAL
// ========================
const lazyElements = document.querySelectorAll("[data-src]");

const lazyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.src = el.dataset.src;
      el.removeAttribute("data-src");
      lazyObserver.unobserve(el);
    }
  });
});

lazyElements.forEach(el => lazyObserver.observe(el));


// ========================
// 3. CONTROL DE IFRAME ÚNICO
// ========================
let currentIframe = null;
let iframeTimeout = null;

// Cuando hagan click en un "video"
document.addEventListener("click", e => {
  if (e.target.classList.contains("yt-load")) {

    const container = e.target.closest(".yt-box");
    const videoID = container.dataset.video;

    // Quitar iframe anterior
    if (currentIframe) currentIframe.remove();

    // Crear nuevo
    const iframe = document.createElement("iframe");
    iframe.setAttribute("loading", "lazy");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.src = "https://www.youtube.com/embed/" + videoID;
    iframe.style.width = "100%";
    iframe.style.height = "300px";

    container.appendChild(iframe);
    currentIframe = iframe;

    // Reiniciar el temporizador de auto-limpieza
    resetIframeTimer();
  }
});

// ========================
// 4. TIMER DE LIMPIEZA (20s)
// ========================
function resetIframeTimer() {
  if (iframeTimeout) clearTimeout(iframeTimeout);
  iframeTimeout = setTimeout(() => {
    if (currentIframe) {
      currentIframe.remove();
      currentIframe = null;
    }
  }, 20000); // 20 segundos
}


// ========================
// 5. LIMPIEZA DE MEMORIA (DOM PRUNING)
// ========================
// Esto evita que el DOM crezca infinito
setInterval(() => {
  const maxNodes = 400; // Ajusta si quieres más o menos
  const all = document.body.getElementsByTagName("*");

  if (all.length > maxNodes) {
    // remove oldest nodes except layout and headers
    for (let i = maxNodes; i < all.length; i++) {
      const node = all[i];
      if (!node.closest("header") && !node.closest(".layout")) {
        node.remove();
      }
    }
  }
}, 5000);
