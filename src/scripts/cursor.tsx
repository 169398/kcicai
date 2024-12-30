document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('button, a, .service-card').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  document.querySelectorAll('button, a').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('clickable'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('clickable'));
  });
}); 