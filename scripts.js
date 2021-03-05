const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}); 

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');

}); 

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
}); 

slider.addEventListener('mousemove', (e) => {
// Stop function from running
 if (!isDown) return;
 e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  // console.log({x, startX});
  // Calculate how far we deviated from the initial point 
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
})