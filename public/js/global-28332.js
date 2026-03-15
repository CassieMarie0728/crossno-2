(function() {
  const init = () => {
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 100) {
        nav.classList.add('shadow-lg', 'shadow-red-900/10');
      } else {
        nav.classList.remove('shadow-lg', 'shadow-red-900/10');
      }
      lastScroll = currentScroll;
    }, { passive: true });

    const mobileBtn = document.querySelector('nav button');
    const navLinks = document.querySelector('nav .hidden.md\\:flex');
    
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-full');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('right-0');
        navLinks.classList.toggle('bg-neutral-950');
        navLinks.classList.toggle('p-6');
        navLinks.classList.toggle('border-b-2');
        navLinks.classList.toggle('border-red-700');
      });
    }
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();