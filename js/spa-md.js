/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Oscar Cruz Díaz — Portafolio</title>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f9f9f9; }
    header { background: #0a0a23; color: white; padding: 1rem; text-align: center; }
    nav { display: flex; justify-content: center; gap: 1rem; background: #202040; padding: 0.5rem; }
    nav button { background: #2b2b60; color: white; border: none; padding: 0.5rem 1rem; cursor: pointer; border-radius: 6px; }
    nav button:hover { background: #4444aa; }
    main { max-width: 900px; margin: 2rem auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    pre, code { background: #eee; padding: 0.2rem 0.4rem; border-radius: 4px; }
  </style>
</head>
<body>
<header>
  <h1>Oscar Cruz Díaz — Portafolio</h1>
</header>
<nav>
  <button onclick="loadMarkdown('docs/CONTRATACIONES.md')">Contrataciones</button>
  <button onclick="loadMarkdown('docs/CURRICULUM.md')">Currículum</button>
  <button onclick="loadMarkdown('docs/PROYECTOS.md')">Proyectos</button>
</nav>
<main id="content">
  <p>Selecciona una sección arriba para cargar su contenido.</p>
</main>
<script>
    */
  async function loadMarkdown(file) {
    try {
      const res = await fetch(file);
      const text = await res.text();
      document.getElementById("content").innerHTML = marked.parse(text);
      window.scrollTo(0, 0);
    } catch (err) {
      document.getElementById("content").innerHTML = "<p style='color:red'>Error al cargar el archivo.</p>";
    }
  }
    /*
</script>
</body>
</html>



*/

/// MAIN 
function mostrarMenu(id) {
  // Oculta todos los menús
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
  // Muestra solo el que corresponde
  const target = document.getElementById(id);
  if (target) target.style.display = 'block';
}
/*Y por CSS, puedes hacer algo básico:
css
Copiar código
.submenu {
  display: none;
  background: #222;
  color: #fff;
  padding: 1em;
  border-radius: 10px;
  margin: 0.5em 0;
}



/////
/*
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Oscar Cruz Díaz — Portafolio</title>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f9f9f9; }
    header { background: #0a0a23; color: white; padding: 1rem; text-align: center; }
    nav { display: flex; justify-content: center; gap: 1rem; background: #202040; padding: 0.5rem; }
    nav button { background: #2b2b60; color: white; border: none; padding: 0.5rem 1rem; cursor: pointer; border-radius: 6px; }
    nav button:hover { background: #4444aa; }
    main { max-width: 900px; margin: 2rem auto; background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    pre, code { background: #eee; padding: 0.2rem 0.4rem; border-radius: 4px; }
  </style>
/* <header>
  <h1>Oscar Cruz Díaz — Portafolio</h1>
</header>
<nav>
  <button onclick="loadMarkdown('docs/CONTRATACIONES.md')">Contrataciones</button>
  <button onclick="loadMarkdown('docs/CURRICULUM.md')">Currículum</button>
  <button onclick="loadMarkdown('docs/PROYECTOS.md')">Proyectos</button>
</nav>
<main id="content">
  <p>Selecciona una sección arriba para cargar su contenido.</p>
</main>
*/

  async function loadMarkdown(file) {
    try {
      const res = await fetch(file);
      const text = await res.text();
      document.getElementById("content").innerHTML = marked.parse(text);
      window.scrollTo(0, 0);
    } catch (err) {
      document.getElementById("content").innerHTML = "<p style='color:red'>Error al cargar el archivo.</p>";
    }
  }
/*
</script>
</body>
</html>

