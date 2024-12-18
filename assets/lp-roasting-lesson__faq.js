$(function () {
  $('body').on('click', '.faq-list__item dt', function () {
    if ($(this).closest('dl').hasClass('active')) {
      $(this).next('dd').slideUp('fast');
      $(this).closest('dl').removeClass('active');
    } else {
      $(this).next('dd').slideDown('fast');
      $(this).closest('dl').addClass('active');
    }
  });
});