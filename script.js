const toggleIcons = document.querySelectorAll('.toggleIcon');

toggleIcons.forEach(icon => {
  icon.addEventListener('click', function () {
    if (this.src.includes('icon-plus.svg')) {
      this.src = '/assets/images/icon-minus.svg';

      const hiddenText = this.closest('.row').nextElementSibling;
      hiddenText.style.display = 'block';
    } else {
      this.src = '/assets/images/icon-plus.svg';

      const hiddenText = this.closest('.row').nextElementSibling;
      hiddenText.style.display = 'none';
    }
  });
});
