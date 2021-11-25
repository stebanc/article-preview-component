const share = document.getElementById('share');
const tooltip = document.getElementById('tooltip');

share.addEventListener('click', () => {
  console.log('share');
  share.classList.toggle('footer__share--active');
  tooltip.classList.toggle('tooltip--visible');
})