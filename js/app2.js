let postCache = null;

[
  {
    "title":"Proyecto A",
    "text":"Descripción",
    "date":"2026-06-10"
  }
]

//// Y mostrar:





async function renderList(file){

  const items = await loadJSON(file);

  return items.map(item => `
    <h3>${item.title}</h3>
    <small>${item.date}</small>
    <p>${item.text}</p>
  `).join("");

} 
/*
   <h3> ${p.title}</h3>
    <small>${p.date}</small>
    <p>${p.text}</p>
  `).join("");
}

*/



const app = document.getElementById("app2");

async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}

async function render(){
  const hash = location.hash || "#/feed";
  const [_, route] = hash.split("/");

  const profile = await loadJSON("data/profile.json");

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
    <div><strong><a href="https://oscarcruzdiaz.vercel.app">Oscar Cruz Díaz</a></strong></div>
    <nav>
          <a href="#/cv">Portafolio-cv</a>
    <a href="#/feed">Feed</a>
    <a href="#/profile">Perfil</a>
      <a href="#/photos">Fotos</a>
      <a href="#/videos">Videos</a>
      <a href="#/settings">Ajustes</a>
    </nav>
  </header>
  <div class="container">
  `;

  if(route === "feed") html += await viewFeed();
  if(route === "profile") html += viewProfile(profile);
  if(route === "cv") html += await viewCv();
  if(route === "photos") html += viewPhotos();
  if(route === "videos") html += viewVideos();
  if(route === "settings") html += viewSettings(profile);

  html += `</div>`;
  app.innerHTML = html;
}

async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
  let out = `<div class="card"><h2>Feed</h2>`;
 feed.forEach(p=>{
    out += `
    <div class="feed-item">
      <img class="thumb" loading="lazy" src="${p.img}">
      <div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <a class="btn" href="${p.url}">Abrir</a>
      </div>
    </div>`;
  });
  return out + `</div>`;
}

function viewProfile(p){
  return `
  <div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>



      <!-----
    <!-- 🌐 WEB COMPLETA (NO PRINT) 
    ----->
    <section class="no-print">
      <h2>Acerca de mí</h2>
      <p>
        Soy desarrollador enfocado en crear sistemas desde cero, optimizados incluso en hardware limitado.
      </p>

      <h2>Habilidades</h2>
      <div>
        <span>JavaScript</span>
        <span>HTML/CSS</span>
        <span>SQL</span>
        <span>GitHub</span>
      </div>

      <h2>Proyectos</h2>
      <p>Dashboard con Supabase, sistema CRUD, apps educativas.</p>

      <h2>Experiencia detallada</h2>
      <p>Docencia, desarrollo freelance, sistemas web completos.</p>

    </section>
            <div class="dato"><strong>Estudios:</strong> Algebra, Física cuántica, Programer, codes, logic,<br> 
        Las matematicas son la poesia de la logica ---Al...?</div>


----->



<section>
  <h2 class="section-title">Portafolio Dev desarrollador de programación </h2>
  <div class="card">
    <p>Soy un programador con experiencia en proyectos freelance, validaciones educativas y sistemas funcionales. 
    Trabajo con tecnologías web, SQL, JS y desarrollo de plataformas interactivas. 
    No cuento con estudios universitarios formales, pero mi experiencia práctica y ética profesional respaldan cada proyecto que realizo.</p>
  </div>
</section>

<section>
  <h2 class="section-title">Habilidades</h2>
  <div class="skills card">
    <span class="skill">JavaScript</span>
    <span class="skill">HTML & CSS</span>
    <span class="skill">SQL</span>
    <span class="skill">WebSocket & ICE</span>
    <span class="skill">Desarrollo Fullstack Básico</span>
    <span class="skill">Gestión de Proyectos</span>
    <span class="skill">Control de Versiones (Git/GitHub)</span>
    <span class="skill">Portfolio y Landing Pages</span>
    <span class="skill">Proyectos Educativos</span>
  </div>
</section>

<section>
  <h2 class="section-title">Proyectos Destacados</h2>
  <div class="container">
    <div class="card">
      <h3>Proyecto ICO Computingles</h3>
      <p>Simulación de sistema educativo con SQL y JS, validado por universidad (privado).</p>
      <span class="project-badge">Freelance</span>
      <span class="project-badge">Validado</span>
    </div>

    <div class="card">
      <h3>Sistema de Mensajería WebSocket</h3>
      <p>Plataforma básica para enviar mensajes y generar IDs únicos, usando solo JS y SQL.</p>
      <span class="project-badge">Freelance</span>
      <span class="project-badge">Experimental</span>
    </div>

    <div class="card">
      <h3>Portfolio y Landing Page</h3>
      <p>Diseño y desarrollo completo del portfolio personal, integrando proyectos y habilidades.</p>
      <span class="project-badge">Web Personal</span>
    </div>

    <div class="card">
      <h3>Proyectos Educativos</h3>
      <p>Material y plataformas interactivas para estudiantes, combinando programación, ciencia y tecnología.</p>
      <span class="project-badge">Educación</span>
      <span class="project-badge">Freelance</span>
    </div>
</section>

<section>
  <h2 class="section-title">Experiencia</h2>
  <div class="container">
    <div class="card">
      <h3>Freelance Web & SQL Developer</h3>
      <p>Desarrollo de sistemas, páginas web, manejo de bases de datos y proyectos educativos.</p>
      <p><strong>Fechas:</strong> Actual</p>
    </div>

    <div class="card">
      <h3>ICO Computingles</h3>
      <p>Proyectos de programación y validación educativa.</p>
      <p><strong>Fechas:</strong> Según proyecto</p>
    </div>
  </div>
</section>

<section>
  <h2 class="section-title">Educación</h2>
  <div class="container">
    <div class="card">
      <h3>Prepa en Línea SEP</h3>
      <p>Modulo 23 - Programación y TICs básicas</p>
      <p><strong>Estado:</strong> En curso / completado</p>
    </div>

    <div class="card">
      <h3>Carrera Técnica en Programación - ICO</h3>
      <p>Aprendizaje práctico en desarrollo web, SQL, JS y proyectos educativos.</p>
      <p><strong>Certificación:</strong> En espera / validación interna</p>
    </div>
  </div>
</section>
		 <!----
		 </div>
		 --->
  
	  `;
}


async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
  let out = `<div class="card"><h2>Feed</h2>`;
 feed.forEach(p=>{
    out += `
    <div class="cv">
      <img class="thumb" loading="lazy" src="${p.img}">
      <div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <a class="btn" href="${p.url}">Abrir</a>
      </div>
    </div>`;
  });
  return out + `</div>`;
}


function viewPhotos(){
  return `
  <div class="card"><h2>Fotos</h2>
    <p>Carpeta /img/</p>
  </div>`;
}

function viewVideos(){
  return `
  <div class="card"><h2>Videos</h2>
  <p>Videos offline local — próximamente.</p>

                  <section>
 <div class="card">
					<p>bruna palessi xD </p>
	<iframe src="https://www.youtube.com/embed/6HF6tRERJNI" title="Engañaron a INFLUENCERS de moda solo con unos zapatos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
		<p> yo soy el lenard</p>
	<iframe  src="https://www.youtube.com/embed/ofpTVNRm0-0" title="Por favor no te rindas con ella 😅 #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

22/09/25 7:20 a.m.
<iframe  src="https://www.youtube.com/embed/xRjqSoiH-jA" title="Cómo una empresa envenenó el planeta en secreto" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe   src="https://www.youtube.com/embed/HuK70ss-Na0" title="TOP: Los 7 casos más perturbadores que existen sobre militares 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


</section>
  </div>`;
}
