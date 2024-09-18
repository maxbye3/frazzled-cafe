function toggleFaq(index) {
  const faqContent = document.getElementById('faq-content-' + index);
  const toggleIcon = document.getElementById('toggle-icon-' + index);

  if (faqContent.hidden) {
    faqContent.hidden = false;
    toggleIcon.src = 'img/cross.png';
  } else {
    faqContent.hidden = true;
    toggleIcon.src = 'img/arrow-down.png';
  }
}