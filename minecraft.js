// Efecto de rebote en las tarjetas
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.3s, box-shadow 0.3s';
    });
});