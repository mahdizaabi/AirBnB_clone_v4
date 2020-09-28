const listAmen = [];
$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if (this.checked) {
      console.log($(this).attr('data-id'));
      listAmen.push($(this).attr('data-id'));
    } else {
      listAmen.splice(listAmen.indexOf($(this).attr('data-id'), 1));
    }
    $('.amenities h4').css('display', 'inline-block');
    $('.amenities h4').append($(this).attr('data-name') + ' ');
  });
});

$.get('http://55.55.55.5:5001/api/v1/status/', function (data, response) {
    if (response === 'success') {      
        console.log('succes');
        $('DIV#api_status').css("background-color", "#ff545f");
        //$('#api_status').addClass('available');
      } else {
        console.log('fail');
        $('DIV#api_status').removeClass('available');
      }
    
  
});
