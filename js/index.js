document.addEventListener('DOMContentLoaded', function () {
    console
    const imgElement = document.querySelector('#frazzled-gif');

    imgElement.addEventListener('mouseenter', function () {
        imgElement.setAttribute('src', './img/FRAZZLED_LOGO_no_background.gif');
    });

    imgElement.addEventListener('mouseleave', function () {
        imgElement.setAttribute('src', './img/FRAZZLED_LOGO_no_background.gif');
    });
});