let efb = document.querySelector('#q');
let menu = document.querySelector('#q1');

efb.addEventListener('click', () => {
  menu.classList.toggle('open');
  efb.classList.toggle('active');   // 加上这一行，控制三条杠变 X
});