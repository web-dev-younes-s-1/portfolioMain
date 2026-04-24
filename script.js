const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/xdaybpnw', {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    form.innerHTML = '<p style="text-align:center; color: green; font-size:40px"><i class="fa-regular fa-circle-check"></i></p>';
  } else {
    alert('Some thing wrong! please refill it');
  }
});