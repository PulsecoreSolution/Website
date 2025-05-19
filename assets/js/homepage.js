document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navUl = document.querySelector('#headernav ul');
    const header = document.querySelector('header');
    const section1 = document.getElementById('section1');
    const section6 = document.getElementById('section6');
    const links = document.querySelectorAll('nav a[href^="#"]');

    // Toggle mobile nav
    if (toggleButton && navUl) {
        toggleButton.addEventListener('click', () => {
            navUl.classList.toggle('show');
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

    const clientItems = [
        'MDEC', 'UiTM', 'UM', 'JAKIM', 'UTM', 'FTSM UKM', 'KPT', 'JPA'
    ];

    const clientLogos = document.getElementById('clientLogos');

    if (clientLogos) {
        const looped = clientItems.map(c => `<span>${c}</span>`).join(' ');
        clientLogos.innerHTML = looped + looped; // duplicate for loop
    }

});

// // Neon Glow Cursor for Section 6
// const canvas = document.createElement('canvas');
// canvas.id = 'neon-cursor';
// document.getElementById('section6').prepend(canvas);

// const section6 = document.getElementById('section6');
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas,
//   alpha: true,
//   antialias: true,
// });
// renderer.setSize(section6.clientWidth, section6.clientHeight);
// renderer.setPixelRatio(window.devicePixelRatio);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, section6.clientWidth / section6.clientHeight, 0.1, 1000);
// camera.position.z = 5;

// canvas.style.position = 'absolute';
// canvas.style.top = 0;
// canvas.style.left = 0;
// canvas.style.pointerEvents = 'none';
// canvas.style.zIndex = 1;
// section6.style.position = 'relative';

// // Add glow with custom material
// const trailLength = 30;
// const glowTrail = [];

// const glowMaterial = new THREE.MeshBasicMaterial({
//   color: 0x00ffff,
//   transparent: true,
//   opacity: 0.7,
//   blending: THREE.AdditiveBlending,
// });

// const geometry = new THREE.SphereGeometry(0.05, 16, 16);

// for (let i = 0; i < trailLength; i++) {
//   const glow = new THREE.Mesh(geometry, glowMaterial.clone());
//   glow.material.opacity = 1 - i / trailLength;
//   glow.material.color.setHSL(i / trailLength, 1, 0.5); // rainbow glow
//   scene.add(glow);
//   glowTrail.push(glow);
// }

// const mouse = { x: 0, y: 0 };
// section6.addEventListener('mousemove', (e) => {
//   const rect = section6.getBoundingClientRect();
//   mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//   mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
// });

// const vector = new THREE.Vector3();
// function animate() {
//   requestAnimationFrame(animate);

//   vector.x += (mouse.x * 2 - vector.x) * 0.2;
//   vector.y += (mouse.y * 2 - vector.y) * 0.2;

//   glowTrail.forEach((dot, i) => {
//     const target = i === 0 ? vector : glowTrail[i - 1].position;
//     dot.position.lerp(target, 0.2);
//   });

//   renderer.render(scene, camera);
// }

// animate();

// window.addEventListener('resize', () => {
//   camera.aspect = section6.clientWidth / section6.clientHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(section6.clientWidth, section6.clientHeight);
// });


// OPTIONAL: Clone scroll list items for infinite effect
// const scrollList = document.querySelector(".scroll-list");
// const items = Array.from(scrollList.children);
// window.addEventListener("load", () => {
//     items.forEach((item) => {
//         const clone = item.cloneNode(true);
//         clone.setAttribute("aria-hidden", "true");
//         scrollList.appendChild(clone);
//     });
// });

// OPTIONAL: Hide header on scroll down
// let lastScrollTop = 0;
// window.addEventListener('scroll', function () {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollTop > lastScrollTop) {
//         header.classList.add('hidden');
//     } else {
//         header.classList.remove('hidden');
//     }
//     lastScrollTop = scrollTop;
// });

// OPTIONAL: Custom animated cursor
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
//     cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
// });
// document.addEventListener('click', e => {
//     cursor.classList.add("expand");
//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// });



