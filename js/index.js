document.addEventListener('DOMContentLoaded', function () {
    console
    const imgElement = document.querySelector('#frazzled-gif');

    imgElement.addEventListener('mouseenter', function () {
        imgElement.setAttribute('src', './img/FRAZZLED_LOGO_no_background.gif');
    });

    imgElement.addEventListener('mouseleave', function () {
        imgElement.setAttribute('src', 'https://cdn.builder.io/api/v1/image/assets/TEMP/545ed2e3d54f95739fd120be7ed28730be7dc6f79604623f42ba3920a5109209?apiKey=f2493124652b497ab521fbc809f44def&');
    });
});