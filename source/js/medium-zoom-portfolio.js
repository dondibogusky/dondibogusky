const slider = document.querySelector('.slider');
const link01a = document.querySelector('#link01');
const zoom01a = document.querySelector('#zoom01');
const zoom01 = mediumZoom('#zoom01', {
  background: 'rgba(0,0,0,0.75)',
  metaClick: false
});

link01a.addEventListener('click', () => zoom01.show(), {passive: true});
$('#link01').click(function() {
  zoom01.show();
  $('.slider').slick('slickPause');
});
$('#zoom01').click(function() {
  zoom01.show();
  $('.slider').slick('slickPause');
});

const link02 = document.querySelector('#link02');
const zoom02 = mediumZoom('#zoom02', {
  background: 'rgba(0,0,0,0.75)',
  metaClick: false
});
link02.addEventListener('click', () => zoom02.show(), {passive: true});
$('#link02').click(function() {
  zoom02.show();
  $('.slider').slick('slickPause');
});
$('#zoom02').click(function() {
  zoom02.show();
  $('.slider').slick('slickPause');
});

const link03 = document.querySelector('#link03');
const zoom03 = mediumZoom('#zoom03', {
  background: 'rgba(0,0,0,0.75)',
  metaClick: false
});
link03.addEventListener('click', () => zoom03.show(), {passive: true});
$('#link03').click(function() {
  zoom03.show();
  $('.slider').slick('slickPause');
});
$('#zoom03').click(function() {
  zoom03.show();
  $('.slider').slick('slickPause');
});

