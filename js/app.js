// Simple Preloader Logic
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 500);
});

// Active State for Navigation
const sections = document.querySelectorAll('section');
const desktopNavLinks = document.querySelectorAll('.nav-link-item');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    // Desktop
    desktopNavLinks.forEach(li => {
        li.classList.remove('bg-primary/10', 'text-primary');
        li.classList.add('text-muted');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('bg-primary/10', 'text-primary');
            li.classList.remove('text-muted');
        }
    });

    // Mobile
    mobileNavLinks.forEach(li => {
        li.classList.remove('text-primary');
        li.classList.add('text-muted');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('text-primary');
            li.classList.remove('text-muted');
        }
    });
});

// Modal Logic
function openModal(imageSrc) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalImage');
    if(modal && modalImg) {
        modalImg.src = imageSrc;
        modal.classList.add('active');
    }
}
function closeModal() {
    const modal = document.getElementById('certModal');
    if(modal) modal.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
});
