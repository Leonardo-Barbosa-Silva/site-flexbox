window.document.querySelector('.menu-mobile').addEventListener('click', () => {
    var headerNav = document.querySelector('header nav ul')

    if (headerNav.style.display === 'none' || headerNav.style.display === '') {
        headerNav.style.display = 'flex'
    } else {
        headerNav.style.display = 'none'
    }
})