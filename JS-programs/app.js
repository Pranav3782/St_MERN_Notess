console.log('App loaded');

const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', function () {
  title.classList.toggle('highlight');
})
