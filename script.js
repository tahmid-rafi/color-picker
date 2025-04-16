const box = document.querySelector('#box');
const switches = document.querySelectorAll('.color-switch');
const defaultColor = '#28292b';

     switches.forEach((el) => {
     el.addEventListener('click', (e) => {
     const dot = el.querySelector('.dot');
     const isActive = dot.classList.contains('translate-x-[32px]');

     // Toggle dot position
     dot.classList.toggle('translate-x-[32px]');

     // Toggle ring
     el.classList.toggle('ring-2');
     el.classList.toggle('ring-white');

     // Set or reset box color
     if (!isActive) {
     const color = el.getAttribute('data-color');
     box.style.backgroundColor = color;

     // Reset other buttons
     switches.forEach((btn) => {
     if (btn !== el) {
     btn.classList.remove('ring-2', 'ring-white');
     btn.querySelector('.dot').classList.remove('translate-x-[32px]');
          }
     });
          } else {
     box.style.backgroundColor = defaultColor;
     }
});
});