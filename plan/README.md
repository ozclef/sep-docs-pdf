# education



un plan maestro de 7 días, con el núcleo técnico (#4 – el endpoint backend) bien implementado, y además te dejo bases para los temas #2, #3 y #5, cada uno con título, subtítulo y pequeña descripción.

Así tendrás una parrilla de aprendizaje y acción completa — técnica, creativa y estratégica.

#### 🌱 SEMANA 1 — Proyecto “Funnel Ético”

Duración: 7 días
Objetivo: Tener funcionando el primer ciclo completo del embudo (landing → registro → base de datos → email)
Tecnologías: HTML / React / Node / SQLite / Tailwind / SendGrid

####   🧩 DÍA 1 — Estructura y Repositorios

Objetivo: crear la base del proyecto
Tareas:

Crear el repo principal funnel-etico en GitHub

Clonar la landing base (la que ya tienes en el lienzo)

Crear carpetas:

/api
/db
/web
/docs


Instalar dependencias base en /api:

npm init -y
npm install express sqlite3 cors dotenv


Crear archivo .env con variables:

SENDGRID_API_KEY=...
PORT=4000

💾 DÍA 2 — Backend: endpoint /api/subscribe

Objetivo: guardar leads en una base SQLite
Archivo: /api/server.js

```

import express from "express";
import sqlite3 from "sqlite3";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database("./db/leads.sqlite", (err) => {
  if (err) console.error("DB error:", err.message);
  else console.log("✅ Conectado a leads.sqlite");
});
```


```
db.run(`
CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT NOT NULL,
  source TEXT,
  campaign TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`);

app.post("/api/subscribe", (req, res) => {
  const { name, email, utm_source, utm_medium, utm_campaign } = req.body;
  if (!email) return res.status(400).json({ error: "Email requerido" });

  const stmt = db.prepare(
    `INSERT INTO leads (name, email, utm_source, utm_medium, utm_campaign)
     VALUES (?, ?, ?, ?, ?)`
  );
  stmt.run(name, email, utm_source, utm_medium, utm_campaign, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, id: this.lastID });
  });
  stmt.finalize();
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`🚀 API escuchando en puerto ${process.env.PORT || 4000}`)
);
```




👉 Prueba:

```
curl -X POST http://localhost:4000/api/subscribe -H "Content-Type: application/json" -d '{"name":"Oscar","email":"oscar@mail.com"}'
```

####   📧 DÍA 3 — Integrar SendGrid (Email Bienvenida)

Objetivo: enviar email automático tras registro.
Archivo: /api/email.js


```
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendWelcomeEmail(to, name) {
  const msg = {
    to,
    from: "hola@tumarca.com",
    subject: "¡Bienvenido a tu funnel ético!",
    html: `
      <h2>Hola ${name || "amigo"},</h2>
      <p>Gracias por registrarte. 🎉</p>
      <p>Pronto recibirás tu acceso al webinar y materiales.</p>
      <p>Equipo <b>Tu Marca</b></p>
    `,
  };
  await sgMail.send(msg);
}
```

Y en server.js:


```
import { sendWelcomeEmail } from "./email.js";
// ...
stmt.run(name, email, utm_source, utm_medium, utm_campaign, async function (err) {
  if (err) return res.status(500).json({ error: err.message });
  await sendWelcomeEmail(email, name);
  res.json({ success: true, id: this.lastID });
});
```


#### 🎨 DÍA 4 — Conectar Landing con el Backend

Objetivo: formulario funcional en producción.

En tu Landing React, cambia el formulario:
```
<form
  onSubmit={async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const res = await fetch("http://localhost:4000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    alert(result.success ? "Gracias por registrarte 🙌" : "Error al registrar");
  }}
  className="mt-6 flex gap-2 flex-col sm:flex-row"
>
  <input name="name" placeholder="Tu nombre" required className="px-4 py-3 rounded-md border" />
  <input name="email" type="email" placeholder="Tu email" required className="px-4 py-3 rounded-md border" />
  <button type="submit" className="bg-indigo-600 text-white px-4 py-3 rounded-md font-semibold">
    Inscribirme gratis
  </button>
</form>
```

💻 DÍA 5 — Testing y Documentación

Objetivo: tener tus pruebas y README inicial.

README.md:

# Funnel Ético
Embudo automatizado con React, Node, SQLite y SendGrid.
## Instalación
cd api && npm install
node server.js


Prueba completa: llena el form → revisa DB (SELECT * FROM leads) → revisa email recibido.

📈 DÍA 6 — Creativos y guiones YouTube

Objetivo: empezar a diseñar el lado marketing.

Tipo	Título	Subtítulo	Descripción breve
🎥 #2: Guion 15s	“Lanza tu curso sin engaños”	“Aprende a vender sin perder tu ética”	Mini spot mostrando tu cara y texto en pantalla. Termina con CTA “Inscríbete gratis”.
🎥 #3: Guion 30s	“Deja de depender de trucos”	“Construye autoridad real con tu voz y conocimiento”	En 3 bloques: dolor (engaños online), solución (funnel ético), acción (webinar gratuito).
🎥 #5: Guion 60s	“El método para enseñar y ganar”	“Automatiza tu curso, respeta a tu audiencia”	Más narrativo: historia personal + promesa + preview de tu plataforma.

Guarda los tres guiones en /docs/scripts-youtube.md.

💬 DÍA 7 — Publicar y Reflexionar

Objetivo: cerrar sprint y medir.

Deploy de la landing en Vercel o Netlify.

Test de API en hosting local o gratuito (Railway, Render).

Registrar primeros leads (aunque sean pruebas).

Reflexión (anótala en /docs/logs/semana1.md):

Qué aprendí, qué me costó, qué repetiría.
Próximos pasos (automatizar, diseñar, enseñar).

✨ BONUS — Bases de tus temas #2, #3 y #5
Nº	Título	Subtítulo	Descripción
#2. Estrategia y Mensaje Ético	“Comunicar sin manipular”	“Cómo crear anuncios honestos que venden por confianza, no por miedo.”	En este módulo se explica cómo usar storytelling real, copywriting responsable y ejemplos de campañas éticas.
#3. Automatización y Tecnología	“De la idea al sistema”	“Cómo conectar tus herramientas para que trabajen por ti.”	Incluye API, formularios, BD, secuencias de email, CI/CD, y medición de conversiones.
#5. Enseñar para Escalar	“Convierte tu conocimiento en legado”	“Crea cursos o mentorías que impacten y generen ingresos constantes.”	Aprendes a estructurar contenido, elegir plataforma, grabar clases, y lanzar tu programa propio.

¿Quieres que te deje lista la estructura de carpetas y archivos completa del proyecto, con nombres y ubicaciones (como plantilla para que la crees ya)?
Así mañana puedes copiar-pegar todo y empezar sin perder tiempo.
