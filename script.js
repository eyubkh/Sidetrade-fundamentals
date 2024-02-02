 document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');

  title.addEventListener('click', () => {
    title.innerText = title.innerText + '!';
  });
});