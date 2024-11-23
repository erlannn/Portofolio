document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Cegah perilaku default

        console.log('Link clicked'); // Debugging

        const targetId = this.getAttribute('href').substring(1); // Ambil ID target
        console.log('Target ID:', targetId); // Debugging

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            console.log('Scrolling to:', targetElement); // Debugging
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            console.error('Target element not found!');
        }
    });
});
