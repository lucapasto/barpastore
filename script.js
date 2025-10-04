// Questo file contiene il codice JavaScript per rendere il sito interattivo.

document.addEventListener('DOMContentLoaded', () => {
    const servicesList = document.querySelector('ul');
    const socialLinks = document.querySelectorAll('section:nth-of-type(2) a');

    // Animazione per la lista dei servizi
    servicesList.style.opacity = 0;
    setTimeout(() => {
        servicesList.style.transition = 'opacity 1s';
        servicesList.style.opacity = 1;
    }, 100);

    // Aggiunta di un effetto hover ai link dei social
    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.3s';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });
});