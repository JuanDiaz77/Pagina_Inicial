<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Página de Ventas — Producto Estrella</title>

  <!-- CSS integrado -->
  <style>
    :root {
      --bg:#0f1724; --card:#0b1220; --accent:#06b6d4; --muted:#94a3b8; --accent-2:#06d6a0;
      --glass: rgba(255,255,255,0.04);
      --radius:14px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    }
    * { box-sizing:border-box }
    body {
      margin:0;
      background:linear-gradient(180deg,#071029 0%, #071827 60%);
      color:#e6eef8;
      -webkit-font-smoothing:antialiased;
    }
    .container { max-width:1100px;margin:36px auto;padding:28px }
    header { display:flex;align-items:center;justify-content:space-between;gap:20px }
    .brand { display:flex;align-items:center;gap:12px }
    .logo { width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent-2));display:flex;align-items:center;justify-content:center;font-weight:700 }
    .logo span { color:#052023 }
    nav a { color:var(--muted);text-decoration:none;margin-left:18px }
    nav a.cta { background:var(--accent);color:#042025;padding:10px 14px;border-radius:10px }

    .grid { display:grid;grid-template-columns:1fr 420px;gap:28px;margin-top:28px }
    .hero { background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:28px;border-radius:var(--radius);box-shadow:0 6px 20px rgba(2,6,23,0.6) }
    .eyebrow { display:inline-block;padding:6px 10px;background:var(--glass);border-radius:999px;color:var(--muted);font-weight:600;font-size:13px }
    h1 { margin:18px 0 8px;font-size:34px;line-height:1.02 }
    p.lead { color:var(--muted);margin:0 0 18px }

    .features { display:flex;gap:12px;margin-top:18px;flex-wrap:wrap }
    .feature { background:rgba(255,255,255,0.02);padding:12px;border-radius:12px;min-width:150px }
    .price { display:flex;align-items:baseline;gap:14px;margin-top:18px }
    .price .big { font-size:28px;font-weight:700 }
    .price .small { color:var(--muted) }

    .card { background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:18px;border-radius:12px }
    .form-wrapper { position:sticky;top:28px }
    form { display:flex;flex-direction:column;gap:12px }
    label { font-size:13px;color:var(--muted) }
    input[type=text], input[type=email], textarea, select {
      padding:12px;
      border-radius:10px;
      border:1px solid rgba(255,255,255,0.04);
      background:transparent;
      color:inherit;
      font-size:14px
    }
    textarea { min-height:120px;resize:vertical }
    .actions { display:flex;gap:10px;align-items:center }
    button.primary {
      background:linear-gradient(90deg,var(--accent),var(--accent-2));
      border:none;padding:12px 16px;border-radius:10px;color:#042025;font-weight:700;cursor:pointer
    }
    button.ghost {
      background:transparent;border:1px solid rgba(255,255,255,0.06);
      padding:10px 12px;border-radius:10px;color:var(--muted);cursor:pointer
    }
    .tiny { font-size:13px;color:var(--muted) }
    footer { margin-top:28px;color:var(--muted);font-size:13px }
    @media (max-width:980px) {
      .grid { grid-template-columns:1fr; }
      .form-wrapper { position:relative;top:auto }
    }
    .buy-btn {
      background: linear-gradient(90deg, #ff9800, #f44336);
      border: none;
      padding: 14px 24px;
      border-radius: 12px;
      color: white;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .buy-btn:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  </style>
</head>

<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo"><span>PE</span></div>
        <div>
          <div style="font-weight:700">Guía profesional para crear y vender productos digitales</div>
          <div style="font-size:13px;color:var(--muted)">Nunca antes había sido tan posible transformar lo que sabemos</div>
        </div>
      </div>
      <nav>
        <a href="#features">Características</a>
        <a href="#prices" class="cta">Área de compras</a>
      </nav>
    </header>

    <main class="grid">
      <section class="hero">
        <span class="eyebrow">Lanzamiento septiembre 2025</span>
        <h1>Haz crecer tus ventas con nuestro <br><span style="color:var(--accent)">Producto Estrella</span></h1>
        <p class="lead">Página de ventas diseñada para convertir: oferta clara, beneficios compactos y un formulario que envía la solicitud directo a tu correo electrónico.</p>

        <div class="features" id="features">
          <div class="feature"><strong>Descripción</strong><div class="tiny">Este libro nace con el objetivo de convertirse en tu mapa estratégico...</div></div>
          <div class="feature"><strong>Fácil</strong><div class="tiny">Durante siglos, el emprendimiento estuvo limitado por recursos tangibles...</div></div>
        </div>

        <div class="price" id="prices">
          <div class="big">$5 USD</div>
          <div class="small">pago único — garantía 7 días</div>
        </div>

        <div style="margin-top:20px; text-align:center;">
          <a href="https://go.hotmart.com/N101607925C" target="_blank">
            <button class="buy-btn">Comprar ahora</button>
          </a>
        </div>
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
            <textarea id="message" placeholder="Cuéntanos tus dudas o necesidades"></textarea>

            <div class="actions">
              <button type="submit" class="primary">Enviar por correo</button>
              <button type="button" class="ghost" id="previewBtn">Previsualizar</button>
            </div>

            <div id="status" class="tiny"></div>
            <p class="tiny">Este formulario utiliza <strong>mailto:</strong> para abrir el cliente de correo del usuario.</p>
          </form>
        </div>
      </aside>
    </main>
  </div>

  <!-- JS integrado -->
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

      const recipient = recipientInput ? recipientInput.value : 'ventas@tuempresa.com';
      const subject = encodeURIComponent(\`Solicitud de información — \${data.product} — \${data.name}\`);
      const body = encodeMailBody(data);

      const mailto = \`mailto:\${recipient}?subject=\${subject}&body=\${body}\`;
      window.location.href = mailto;
      status.textContent = 'Se abrió tu cliente de correo para enviar la solicitud.';
    });

    previewBtn.addEventListener('click', function () {
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
      alert(\`Para: \${recipientInput.value}\\nAsunto: Solicitud de información — \${data.product} — \${data.name}\\n\\n\${body}\`);
    });
  </script>
</body>
</html>
