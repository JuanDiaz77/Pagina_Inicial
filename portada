<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Página de Ventas — Producto Estrella</title>
  <style>
    :root{
      --accent:#06b6d4;
      --accent-2:#06d6a0;
      --muted:#94a3b8;
      --bg:#071227;
      --radius:12px;
      --glass: rgba(255,255,255,0.03);
      font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    *{box-sizing:border-box}
    body{margin:0;background: linear-gradient(180deg,var(--bg), #071827);color:#e6eef8;}
    .container{max-width:1100px;margin:36px auto;padding:24px}
    header{display:flex;justify-content:space-between;align-items:center;gap:16px}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:56px;height:56px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;font-weight:700}
    .logo span{color:#052023}
    .brand-title{font-weight:700}
    .brand-sub{font-size:13px;color:var(--muted)}
    nav a{color:var(--muted);text-decoration:none;margin-left:16px}
    nav a.cta{background:var(--accent);color:#042025;padding:8px 12px;border-radius:8px}
    .grid{display:grid;grid-template-columns:1fr 420px;gap:24px;margin-top:20px}
    .hero{padding:24px;border-radius:var(--radius);background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);box-shadow:0 6px 20px rgba(2,6,23,0.6)}
    .eyebrow{display:inline-block;padding:6px 10px;background:var(--glass);border-radius:999px;color:var(--muted);font-weight:600;font-size:13px}
    h1{margin:14px 0 8px;font-size:32px;line-height:1.03}
    .accent{color:var(--accent)}
    .lead{color:var(--muted);margin:0 0 14px}
    .features{display:flex;gap:12px;flex-wrap:wrap;margin-top:12px}
    .feature{background:rgba(255,255,255,0.02);padding:10px;border-radius:10px;min-width:140px}
    .price{display:flex;align-items:baseline;gap:12px;margin-top:14px}
    .price .big{font-size:26px;font-weight:700}
    .price .small{color:var(--muted)}
    .primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));border:none;padding:10px 14px;border-radius:10px;color:#042025;font-weight:700;cursor:pointer}
    .ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px 12px;border-radius:10px;color:var(--muted);cursor:pointer}
    .buy-btn{background:linear-gradient(90deg,#ff9800,#f44336);border:none;padding:12px 18px;border-radius:12px;color:white;font-weight:800;cursor:pointer}
    .buy-link{margin-left:12px}
    .card{padding:16px;border-radius:10px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))}
    .form-wrapper{position:sticky;top:28px}
    form{display:flex;flex-direction:column;gap:10px}
    label{font-size:13px;color:var(--muted)}
    input[type=text], input[type=email], textarea, select{
      padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;font-size:14px
    }
    textarea{min-height:110px;resize:vertical}
    .actions{display:flex;gap:10px;align-items:center}
    .tiny{font-size:13px;color:var(--muted)}
    .status{min-height:18px}
    @media (max-width:980px){.grid{grid-template-columns:1fr}.form-wrapper{position:relative;top:auto}.buy-link{display:inline-block;margin-top:10px}}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo"><span>PE</span></div>
        <div>
          <div class="brand-title">Producto Estrella</div>
          <div class="brand-sub">Convierte visitantes en clientes</div>
        </div>
      </div>
      <nav>
        <a href="#features">Características</a>
        <a href="#form" class="cta">Quiero más info</a>
      </nav>
    </header>

    <main class="grid">
      <section class="hero">
        <span class="eyebrow">Lanzamiento 2025</span>
        <h1>Haz crecer tus ventas con nuestro <span class="accent">Producto Estrella</span></h1>
        <p class="lead">Página de ventas creada para convertir: oferta clara, beneficios compactos y un formulario que envía la solicitud directo a tu correo electrónico.</p>

        <div class="features" id="features">
          <div class="feature"><strong>Conversión</strong><div class="tiny">Diseño enfocado en CTA.</div></div>
          <div class="feature"><strong>Fácil</strong><div class="tiny">Formulario simple — más respuestas.</div></div>
          <div class="feature"><strong>Listo</strong><div class="tiny">Funciona con mailto o integrable con servicios externos.</div></div>
        </div>

        <div class="price">
          <div class="big">$79</div>
          <div class="small">pago único — garantía 30 días</div>
        </div>

        <div class="hero-actions">
          <a href="#form"><button class="primary">Obtener ahora</button></a>
          <button class="ghost" onclick="document.getElementById('details').scrollIntoView({behavior:'smooth'})">Ver detalles</button>
          <a class="buy-link" href="https://tu-link-de-compra.com" target="_blank" rel="noopener">
            <button class="buy-btn">Comprar ahora</button>
          </a>
        </div>

        <div id="details" class="details"><strong>Incluye:</strong> material digital, consultoría y actualizaciones.</div>
      </section>

      <aside class="form-wrapper" id="form">
        <div class="card">
          <h3>Solicita más información</h3>
          <form id="contactForm" novalidate>
            <input type="hidden" id="recipient" value="ventas@tuempresa.com" />

            <label for="name">Nombre completo</label>
            <input id="name" type="text" placeholder="Tu nombre" required />

            <label for="email">Correo electrónico</label>
            <input id="email" type="email" placeholder="tu@correo.com" required />

            <label for="phone">Teléfono (opcional)</label>
            <input id="phone" type="text" placeholder="+57 3XX XXX XXXX" />

            <label for="product">Producto de interés</label>
            <select id="product">
              <option value="Producto Estrella">Producto Estrella</option>
              <option value="Plan Pro">Plan Pro</option>
              <option value="Consultoría">Consultoría</option>
            </select>

            <label for="message">Mensaje</label>
            <textarea id="message" placeholder="Cuéntanos tus dudas"></textarea>

            <div class="actions">
              <button type="submit" class="primary">Enviar por correo</button>
              <button type="button" class="ghost" id="previewBtn">Previsualizar</button>
            </div>

            <div id="status" class="tiny status"></div>
            <p class="tiny note">Este formulario usa <strong>mailto:</strong> para abrir tu cliente de correo.</p>
          </form>
        </div>
      </aside>
    </main>
  </div>

  <script>
    const form = document.getElementById('contactForm');
    const status = document.getElementById('status');
    const recipientInput = document.getElementById('recipient');
    const previewBtn = document.getElementById('previewBtn');

    function encodeMailBody(data) {
      const lines = [];
      lines.push(\`Nombre: \${data.name}\`);
      lines.push(\`Correo: \${data.email}\`);
      if (data.phone) lines.push(\`Teléfono: \${data.phone}\`);
      lines.push(\`Producto: \${data.product}\`);
      lines.push('');
      lines.push('Mensaje:');
      lines.push(data.message || '(sin mensaje)');
      return encodeURIComponent(lines.join('\\n'));
    }

    function validate(data) {
      if (!data.name || data.name.trim().length < 2) return 'Ingresa un nombre válido.';
      if (!data.email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(data.email)) return 'Ingresa un correo válido.';
      return '';
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = '';
      const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        product: document.getElementById('product').value,
        message: document.getElementById('message').value.trim()
      };

      const err = validate(data);
      if (err) { status.textContent = err; return; }

      const recipient = recipientInput.value || 'ventas@tuempresa.com';
      const subject = encodeURIComponent(\`Solicitud — \${data.product} — \${data.name}\`);
      const body = encodeMailBody(data);

      window.location.href = \`mailto:\${recipient}?subject=\${subject}&body=\${body}\`;
      status.textContent = 'Se abrió tu cliente de correo.';
    });

    previewBtn.addEventListener('click', function () {
      status.textContent = '';
      const data = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        product: document.getElementById('product').value,
        message: document.getElementById('message').value.trim()
      };
      const err = validate(data);
      if (err) { status.textContent = err; return; }
      const body = decodeURIComponent(encodeMailBody(data));
      alert(\`Para: \${recipientInput.value}\\nAsunto: Solicitud — \${data.product} — \${data.name}\\n\\n\${body}\`);
    });
  </script>
</body>
</html>
