$(function() {
  var dateFormat = 'yy年m月d日';
  var minDate = new Date();
  minDate.setDate(minDate.getDate() + 3);
  var maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 2);

  $("#ContactFormDate").datepicker({
    dateFormat: dateFormat,
    minDate: minDate,
    maxDate: maxDate,
    beforeShowDay: function(date) {
      return [
        date.getDay() != 0 &&
        date.getDay() != 1 &&
        date.getDay() != 4 &&
        date.getDay() != 5 &&
        date.getDay() != 6
      ];
    },
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  });
});

