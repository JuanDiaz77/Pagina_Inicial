<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Página de Ventas — Producto Estrella</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo"><span>PE</span></div>
        <div>
          <div style="font-weight:700">Producto Estrella</div>
          <div style="font-size:13px;color:var(--muted)">Convierte visitantes en clientes</div>
        </div>
      </div>
      <nav>
        <a href="#features">Características</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#form" class="cta">Quiero más info</a>
      </nav>
    </header>

    <main class="grid">
      <section class="hero">
        <span class="eyebrow">Lanzamiento 2025</span>
        <h1>Haz crecer tus ventas con nuestro <br><span style="color:var(--accent)">Producto Estrella</span></h1>
        <p class="lead">Página de ventas diseñada para convertir: oferta clara, beneficios compactos y un formulario que envía la solicitud directo a tu correo electrónico.</p>

        <div class="features" id="features">
          <div class="feature">
            <strong>Conversión</strong>
            <div class="tiny">Diseño enfocado en CTA.</div>
          </div>
          <div class="feature">
            <strong>Fácil</strong>
            <div class="tiny">Formulario simple — más respuestas.</div>
          </div>
          <div class="feature">
            <strong>Listo</strong>
            <div class="tiny">Funciona sin servidor (mailto) o con Formspree.</div>
          </div>
        </div>

        <div class="price">
          <div class="big">$79</div>
          <div class="small">pago único — garantía 30 días</div>
        </div>

        <div style="margin-top:18px;display:flex;gap:10px;align-items:center">
          <button onclick="document.getElementById('form').scrollIntoView({behavior:'smooth'})" class="primary">Obtener ahora</button>
          <button class="ghost" onclick="document.getElementById('details').scrollIntoView({behavior:'smooth'})">Ver detalles</button>
        </div>

        <div id="details" style="margin-top:18px;color:var(--muted);font-size:14px">
          <strong>Incluye:</strong> material digital, 2 horas de consultoría y acceso a actualizaciones.
        </div>

        <footer>¿Necesitas integración con un servicio de emails (Formspree, EmailJS)? Dime y lo adapto.</footer>
      </section>

      <aside class="form-wrapper">
        <div class="card">
          <h3 style="margin:0 0 6px">Solicita más información</h3>
          <div class="tiny">Rellena y recibirás un correo con los detalles.</div>

          <form id="contactForm" novalidate>
            <input type="hidden" id="recipient" value="ventas@tuempresa.com" />

            <div>
              <label for="name">Nombre completo</label>
              <input id="name" name="name" type="text" placeholder="Tu nombre" required />
            </div>

            <div>
              <label for="email">Correo electrónico</label>
              <input id="email" name="email" type="email" placeholder="tu@correo.com" required />
            </div>

            <div>
              <label for="phone">Teléfono (opcional)</label>
              <input id="phone" name="phone" type="text" placeholder="+57 3XX XXX XXXX" />
            </div>

            <div>
              <label for="product">Producto de interés</label>
              <select id="product" name="product">
                <option value="Producto Estrella">Producto Estrella</option>
                <option value="Plan Pro">Plan Pro</option>
                <option value="Consultoría">Consultoría</option>
              </select>
            </div>

            <div>
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" placeholder="Cuéntanos tus dudas o necesidades"></textarea>
            </div>

            <div class="actions">
              <button type="submit" class="primary">Enviar por correo</button>
              <button type="button" class="ghost" id="previewBtn">Previsualizar</button>
            </div>

            <div id="status" class="tiny" style="margin-top:8px"></div>

            <p class="tiny" style="margin-top:8px">Este formulario utiliza <strong>mailto:</strong> para abrir el cliente de correo del usuario. Si prefieres envío desde servidor (sin abrir cliente), puedo integrar Formspree o EmailJS.</p>
          </form>
        </div>
      </aside>
    </main>
  </div>

  <script src="script.js"></script>
</body>
</html>
