const dropdownButton = document.getElementById('dropdown-button');
const dropdownMenu = document.getElementById('dropdown-menu');

dropdownButton.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('hidden');
  event.stopPropagation();
});

document.addEventListener('click', function(event) {
  const isClickInside = dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);
  if (!isClickInside) {
    dropdownMenu.classList.add('hidden');
  }
});