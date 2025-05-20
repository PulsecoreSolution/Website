document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navUl = document.querySelector('#headernav ul');
    const header = document.querySelector('header');
    const section1 = document.getElementById('section1');
    const section6 = document.getElementById('section6');
    const links = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle mobile nav
    if (toggleButton && mobileMenu) {
        toggleButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });
    }

    // Smooth scroll
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = header.offsetHeight || 60;
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Transparent header toggle based on section1
    function updateHeaderStyle() {
        const rect = section1.getBoundingClientRect();
        const isInSection1 = rect.top <= 0 && rect.bottom > 80;
        header.classList.toggle('transparent', isInSection1);
    }

    window.addEventListener('scroll', updateHeaderStyle);
    window.addEventListener('resize', updateHeaderStyle);
    updateHeaderStyle();

    // Looping text only for section6
    const loopItems = [
        'SYSTEM DEVELOPMENT',
        'INNOVATION',
        'IT SOLUTION',
        'IT CONSULTANT',
        'MAINTENANCE SERVICES',
        'SYSTEM SERVICES PROVIDER'
    ];

    const loopingTextInner = section6?.querySelector('#loopingTextInner');

    if (loopingTextInner) {
        // const spanGroup = loopItems.map(text => `<span class="loop-item">||&nbsp;&nbsp;${text}&nbsp;&nbsp;</span>`).join('');
        const spanGroup = loopItems.map(text => `<span> ${text} </span>`).join('');
        loopingTextInner.innerHTML = spanGroup + spanGroup;
    }

    // Scroll
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    if (scrollLeftBtn && scrollRightBtn && scrollContainer) {
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });

        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // fade
    const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Optional: run only once
    }
  });
}, { threshold: 0.1 });

fadeInElements.forEach(el => observer.observe(el));

});




