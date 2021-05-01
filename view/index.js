const form = document.forms.namedItem('changeLight');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const pixelNum = formData.get('pixelNum');
  const r = formData.get('r');
  const g = formData.get('g');
  const b = formData.get('b');
  const data = {
    pixelNum,
    r,
    g,
    b,
  };
  fetch('/api/change', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err);
    });
});