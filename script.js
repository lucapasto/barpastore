// Questo file contiene il codice JavaScript per rendere il sito interattivo.

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const servicesList = document.querySelector('ul');
    const socialLinks = document.querySelectorAll('section:nth-of-type(2) a');
    const navItems = document.querySelectorAll('.nav-item');

    // Animazione per la lista dei servizi (rispetta reduced motion)
    if (!prefersReducedMotion) {
        servicesList.style.opacity = 0;
        setTimeout(() => {
            servicesList.style.transition = 'opacity 1s';
            servicesList.style.opacity = 1;
        }, 100);
    }

    // Aggiunta di un effetto hover ai link dei social
    socialLinks.forEach(link => {
        if (!prefersReducedMotion) {
            link.addEventListener('mouseover', () => {
                link.style.transform = 'scale(1.1)';
                link.style.transition = 'transform 0.3s';
            });
            link.addEventListener('mouseout', () => {
                link.style.transform = 'scale(1)';
            });
        }
    });

    // Gestione della navigazione attiva
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Rimuovi la classe active da tutti gli elementi
            navItems.forEach(nav => nav.classList.remove('active'));
            // Aggiungi la classe active all'elemento cliccato
            e.target.classList.add('active');
            // Aggiorna aria-current
            navItems.forEach(nav => nav.removeAttribute('aria-current'));
            e.target.setAttribute('aria-current', 'page');
        });
    });

    // Smooth scrolling per i link di navigazione
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Evidenzia la sezione attiva durante lo scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(nav => {
                    nav.classList.remove('active');
                    nav.removeAttribute('aria-current');
                    if (nav.getAttribute('href') === `#${sectionId}`) {
                        nav.classList.add('active');
                        nav.setAttribute('aria-current', 'page');
                    }
                });
            }
        });
    });
});
// Animazione titolo principale e sottotitolo
document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const titolo = document.querySelector('.display');
    const sottotitolo = document.querySelector('.subtitle');
    if (!prefersReducedMotion) {
        if (titolo) {
            titolo.style.opacity = 0;
            titolo.style.transform = 'translateY(-30px)';
            setTimeout(() => {
                titolo.style.transition = 'opacity 0.8s, transform 0.8s';
                titolo.style.opacity = 1;
                titolo.style.transform = 'translateY(0)';
            }, 200);
        }
        if (sottotitolo) {
            sottotitolo.style.opacity = 0;
            sottotitolo.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                sottotitolo.style.transition = 'opacity 0.8s 0.3s, transform 0.8s 0.3s';
                sottotitolo.style.opacity = 1;
                sottotitolo.style.transform = 'translateY(0)';
            }, 400);
        }
    }

    // Animazione cards servizi: effetto "fade-in" a cascata
    const cards = document.querySelectorAll('.services .card');
    if (!prefersReducedMotion) {
        cards.forEach((card, i) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s, transform 0.6s';
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, 600 + i * 120);
        });
    }

    // Effetto "pulse" sui badge quando si passa sopra
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transition = 'box-shadow 0.3s, transform 0.3s';
            badge.style.boxShadow = '0 0 0 4px rgba(123,92,255,0.18)';
            badge.style.transform = 'scale(1.05)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.boxShadow = '';
            badge.style.transform = 'scale(1)';
        });
    });
    // Animazione "bounce" sul link della posizione quando si passa sopra
    const posizione = document.querySelector('.posizione');
    if (posizione && !prefersReducedMotion) {
        posizione.addEventListener('mouseenter', () => {
            posizione.style.transition = 'transform 0.3s';
            posizione.style.transform = 'scale(1.12) rotate(-2deg)';
        });
        posizione.addEventListener('mouseleave', () => {
            posizione.style.transform = 'scale(1) rotate(0)';
        });
    }

    // Animazione quote immagine: fade-in
    const imageQuote = document.querySelector('.image-quote');
    if (imageQuote && !prefersReducedMotion) {
        imageQuote.style.opacity = 0;
        setTimeout(() => {
            imageQuote.style.transition = 'opacity 1.2s';
            imageQuote.style.opacity = 1;
        }, 900);
    }
    // Rimosso: auto-rotate recensioni (sezione non presente)
});
