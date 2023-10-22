
  function navToggle() {
    let btn = document.getElementById('menuBtn');
    let nav = document.getElementById('menu');
    let top = document.getElementById('hamburgerTop');
    let bottom = document.getElementById('hamburgerBottom');

    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
    top.classList.toggle('bg-white');
    bottom.classList.toggle('bg-white');
 
  }

  const template = document.getElementById('followTip');
  const container = document.createElement('div');

  tippy('#follow', {
    content: container.innerHTML,
    animation: 'scale',
    duration: 250,
    arrow: true,
    placement: 'bottom',
    interactive: true,
  });