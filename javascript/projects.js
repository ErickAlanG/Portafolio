export function desplazar() {
    const slider = document.querySelector('.projects-slider');

    if (!slider) {
        console.error('No se encontró .projects-slider');
        return;
    }

    slider.addEventListener('wheel', (e) => {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 3;
    });
}

export function centrar(){
    window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.project-card');

    cards[Math.floor(cards.length / 2)].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
    });
});
}