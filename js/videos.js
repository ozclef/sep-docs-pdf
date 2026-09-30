//<script>
let currentFrame = null;

document.addEventListener("click", e => {
  if (e.target.classList.contains("play")) {
    const cont = e.target.parentElement;
    const id = cont.dataset.video;

    // Si ya hay un iframe cargado → borrarlo
    if (currentFrame) currentFrame.remove();

    // Crear un iframe nuevo
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${id}`;
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.style.width = "100%";
    iframe.style.height = "300px";

    // Insertarlo
    cont.appendChild(iframe);
    currentFrame = iframe;
  }
});
//  </script>
