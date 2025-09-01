const form = document.getElementById('contactForm');
const status = document.getElementById('status');
const recipientInput = document.getElementById('recipient');
const previewBtn = document.getElementById('previewBtn');

function encodeMailBody(data) {
  const lines = [];
  lines.push(`Nombre: ${data.name}`);
  lines.push(`Correo: ${data.email}`);
  if (data.phone) lines.push(`Teléfono: ${data.phone}`);
  lines.push(`Producto: ${data.product}`);
  lines.push('');
  lines.push('Mensaje:');
  lines.push(data.message || '(sin mensaje)');
  return encodeURIComponent(lines.join('\n'));
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

  const recipient = recipientInput ? recipientInput.value : 'dmjp2030.2@gmail.com';
  const subject = encodeURIComponent(`Solicitud de información — ${data.product} — ${data.name}`);
  const body = encodeMailBody(data);

  const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  status.textContent = 'Se abrió tu cliente de correo para enviar la solicitud. Si nada sucede, revisa tu cliente de correo o usa la alternativa con servidor.';
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
  const preview = `Para: ${recipientInput.value}\nAsunto: Solicitud de información — ${data.product} — ${data.name}\n\n${body}`;
  alert(preview);
});
