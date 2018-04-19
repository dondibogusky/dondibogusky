lazySizes.init();

const link01 = document.querySelector('#link01');
const zoom01 = mediumZoom('#zoom01', {
  background: 'rgba(0,0,0,0.75)',
  scrollOffset: 0,
  metaClick: false
});
// link01.addEventListener('click', () => zoom01.show());
$('#link01').click(function() {
  zoom01.show();
});
$('#zoom01').click(function() {
  zoom01.show();
});

const link02 = document.querySelector('#link02');
const zoom02 = mediumZoom('#zoom02', {
  background: 'rgba(0,0,0,0.75)',
  scrollOffset: 0,
  metaClick: false
});
// link02.addEventListener('click', () => zoom02.show());
$('#link02').click(function() {
  zoom02.show();
});
$('#zoom02').click(function() {
  zoom02.show();
});

const link03 = document.querySelector('#link03');
const zoom03 = mediumZoom('#zoom03', {
  background: 'rgba(0,0,0,0.75)',
  metaClick: false
});
// link03.addEventListener('click', () => zoom03.show());
$('#link03').click(function() {
  zoom03.show();
});
$('#zoom03').click(function() {
  zoom03.show();
});
