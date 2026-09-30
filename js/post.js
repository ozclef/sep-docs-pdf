
/*

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



const app = document.getElementById("app");
/*
async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}
*/
async function render(){
  const hash = location.hash || "#/cv";
  const [_, route] = hash.split("/");

  const cv = await loadJSON("data/posts.json");

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
    <div><strong><a href="https://oscarcruzdiaz.vercel.app">Oscar Cruz Díaz</a></strong></div>
    <nav>
    <a href="#/feed">Feed</a>
    <a href="#/profile">Perfil</a>
    <a href="#/cv">Portafolio-cv</a>
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

async function viewCv(){
  const feed = await loadJSON("data/posts.json");
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
    </div>
    
			 <div class="dato"><strong>Tecnologías:</strong>
<span class="skill">HTML5</span>
<span class="skill">CSS3</span>
<span class="skill">JavaScript</span>
<span class="skill">SQL</span>
<span class="skill">Git</span>
			 </div>
			 <div class="dato"><strong> filosofías y experiencias:</strong> cada error da mucha más ventaja de aprendizaje</div>
       	          <div class="dato"><strong>Profesión:</strong> Full-stack web creator</div>
          <div class="dato"><strong>Intereses:</strong> OS creativos, multimedia, mini-juegos</div>
          <div class="dato"><strong>Ubicación:</strong> Tlaxcala, México</div>
          <div class="dato"><strong>Experiencia:</strong> 
			<li><a>  HTML modular</a></li>
			  <li><a>CSS separado</a></li>
			  <li><a>JSON para contenido</a></li>
			  <li><a>Hash Router (#/feed)</a></li>
				  <li><a>Lazy Loading</a></li>
				  <li><a>LocalStorage</a></li>
				  <li><a>DOM Pruning</a></li>
				  <li><a>Cache local</a></li>
				  <li><a>Embeds dinámicos</a></li>
			  <li><a>Portfolio</a></li>
			  <li><a>CV</a></li>
			  <li><a>Landing</a></li>
			  <li><a>Feed red social</a></li>
			  <li><a>Sidebar</a></li>
			  <li><a>CRUD</a></li>
			  <li><a>Simulación de Auth</a></li>
		  </div>
            <div class="dato"><strong>Estudios:</strong> Algebra, Física cuántica, Programer, codes, logic,<br> 
         ---Al..?</div>
        </div>
</section>

		
<section>
  <h2 class="section-title">Especialidad </h2>
  <div class="card">
      <h3>Perfil</h3>
      <p>Desarrollador autodidacta enfocado en sistemas web funcionales, con experiencia en docencia y desarrollo práctico.</p>
  </div>
</section>

	  
	  <section>
  <h2 class="section-title">Experiencia profesional</h2>
  <div class="card">
      <h3>Experiencia</h3>
      <ul>
        <li><strong>Docente en ICO (2025)</strong></li>
        <li>Clases a niños, jóvenes y adultos</li>
        <li>Proyectos web educativos</li>
      </ul>
	  </section>

<section>
  <h2 class="section-title">Estudios</h2>
  <div class="card">
      <h3>Educación</h3>
      <ul>
        <li>ICO – Programación (tesis, proyecto final desarrollado)</li>
        <li>CECATI 82 – Mantenimiento de computadoras (diploma)</li>
      </ul>
  </div>
		</section>
		  <section>
			  <h3>Habilidades</h3>
			  <p>JavaScript, HTML, CSS, SQL, Git, GitHub</p>			
		  </section>
		  <section>
			  <h3>Fortalezas</h3>
			  <p>Resolución de problemas, aprendizaje rápido, atención a cliente</p>
		  </section>

    `;
  });
  return out + `</div>`;
}

/*
function viewProfile(p) {
  return `
  <div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>



  <!----CARD PORTAFOLIO   ----->
  <!---- 🧾 CV COMPACTO (IMPRIMIR) ----> 
  <div class="card">
    <section class="print-only">
      <h1>Oscar Cruz Díaz</h1>
      <p><strong>Desarrollador Web </strong> | Tlaxcala, México</p>
      <p>
        GitHub: https://github.com/ozclef <br>
        Portfolio: https://oscarcruzdiaz.vercel.app
      </p>	  
          <div class="dato"><strong>Profesión:</strong> Full-stack web creator-
		  Desarrollador web autodidacta enfocado en HTML, CSS, JavaScript y SQL. He participado en proyectos educativos, páginas web para clientes y sistemas funcionales con interfaces dinámicas, bases de datos y despliegue web.
			  Actualmente continúo ampliando mis conocimientos en desarrollo full stack, control de versiones y arquitectura de aplicaciones, combinando aprendizaje continuo con experiencia práctica en proyectos reales.
		  </div>
			 <div class="dato"><strong>Tecnologías:</strong>
<span class="skill">HTML5</span>
<span class="skill">CSS3</span>
<span class="skill">JavaScript</span>
<span class="skill">SQL</span>
<span class="skill">Git</span>
			 </div>
			 <div class="dato"><strong> filosofías y experiencias:</strong> cada error da mucha más ventaja de aprendizaje</div>
       	          <div class="dato"><strong>Profesión:</strong> Full-stack web creator</div>
          <div class="dato"><strong>Intereses:</strong> OS creativos, multimedia, mini-juegos</div>
          <div class="dato"><strong>Ubicación:</strong> Tlaxcala, México</div>
          <div class="dato"><strong>Experiencia:</strong> 
			<li><a>  HTML modular</a></li>
			  <li><a>CSS separado</a></li>
			  <li><a>JSON para contenido</a></li>
			  <li><a>Hash Router (#/feed)</a></li>
				  <li><a>Lazy Loading</a></li>
				  <li><a>LocalStorage</a></li>
				  <li><a>DOM Pruning</a></li>
				  <li><a>Cache local</a></li>
				  <li><a>Embeds dinámicos</a></li>
			  <li><a>Portfolio</a></li>
			  <li><a>CV</a></li>
			  <li><a>Landing</a></li>
			  <li><a>Feed red social</a></li>
			  <li><a>Sidebar</a></li>
			  <li><a>CRUD</a></li>
			  <li><a>Simulación de Auth</a></li>
		  </div>
            <div class="dato"><strong>Estudios:</strong> Algebra, Física cuántica, Programer, codes, logic,<br> 
         ---Al..?</div>
        </div>
</section>

		
<section>
  <h2 class="section-title">Especialidad </h2>
  <div class="card">
      <h3>Perfil</h3>
      <p>Desarrollador autodidacta enfocado en sistemas web funcionales, con experiencia en docencia y desarrollo práctico.</p>
  </div>
</section>

	  
	  <section>
  <h2 class="section-title">Experiencia profesional</h2>
  <div class="card">
      <h3>Experiencia</h3>
      <ul>
        <li><strong>Docente en ICO (2025)</strong></li>
        <li>Clases a niños, jóvenes y adultos</li>
        <li>Proyectos web educativos</li>
      </ul>
	  </section>

<section>
  <h2 class="section-title">Estudios</h2>
  <div class="card">
      <h3>Educación</h3>
      <ul>
        <li>ICO – Programación (tesis, proyecto final desarrollado)</li>
        <li>CECATI 82 – Mantenimiento de computadoras (diploma)</li>
      </ul>
  </div>
		</section>
		  <section>
			  <h3>Habilidades</h3>
			  <p>JavaScript, HTML, CSS, SQL, Git, GitHub</p>			
		  </section>
		  <section>
			  <h3>Fortalezas</h3>
			  <p>Resolución de problemas, aprendizaje rápido, atención a cliente</p>
		  </section>


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
     */
  