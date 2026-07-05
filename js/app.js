// Simple Preloader Logic
window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        if(preloader) {
            preloader.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 1000); // Wait for slide up animation to complete
        }
    }, 800); // Hold the screen for a bit
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

    const pModal = document.getElementById('projectModal');
    if (pModal) {
        pModal.addEventListener('click', (e) => {
            if (e.target === pModal) closeProjectModal();
        });
    }
});

// Project Modal Logic
function openProjectModal(data) {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectModalContent');
    
    if(!modal || !content) return;
    
    // Populate data
    const pmIcon = document.getElementById('pm-icon');
    const pmImg = document.getElementById('pm-img');
    
    if (data.image) {
        pmImg.src = data.image;
        pmImg.classList.remove('hidden');
        pmIcon.classList.add('hidden');
    } else {
        pmIcon.className = `fa-solid ${data.icon} text-6xl text-primary/30 z-0`;
        pmIcon.classList.remove('hidden');
        pmImg.classList.add('hidden');
    }
    
    document.getElementById('pm-category').textContent = data.category;
    document.getElementById('pm-year').textContent = data.year;
    document.getElementById('pm-title').textContent = data.title;
    document.getElementById('pm-role').textContent = data.role;
    document.getElementById('pm-desc').textContent = data.desc;
    
    // Tech stack
    const techContainer = document.getElementById('pm-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'text-xs font-semibold text-dark border border-bordercolor rounded-md px-2 py-1 bg-white';
        span.textContent = t;
        techContainer.appendChild(span);
    });
    
    // Links
    const btnLive = document.getElementById('pm-live');
    const btnRepo = document.getElementById('pm-repo');
    
    if(data.live && data.live !== '#') {
        btnLive.href = data.live;
        btnLive.style.display = 'flex';
    } else {
        btnLive.style.display = 'none';
    }
    
    if(data.repo && data.repo !== '#') {
        btnRepo.href = data.repo;
        btnRepo.style.display = 'flex';
    } else {
        btnRepo.style.display = 'none';
    }
    
    // Show Modal
    modal.classList.add('active');
    setTimeout(() => {
        content.classList.remove('scale-90', 'opacity-0');
        content.classList.add('scale-100', 'opacity-100');
    }, 10);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectModalContent');
    
    if(!modal || !content) return;
    
    content.classList.remove('scale-100', 'opacity-100');
    content.classList.add('scale-90', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.remove('active');
    }, 300);
}
