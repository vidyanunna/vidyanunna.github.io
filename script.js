// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        if (href.includes('.html')) {
            window.location.href = href;
        } else {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle category sections
document.querySelectorAll('.category-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetGrid = document.getElementById(targetId);
        const toggleIcon = this.querySelector('.toggle-icon');

        targetGrid.classList.toggle('active');
        toggleIcon.classList.toggle('active');
    });
});

// Toggle project details
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const details = document.getElementById(targetId);
        
        details.classList.toggle('active');
    });
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    observer.observe(card);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);