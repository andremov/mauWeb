var $form = $('form#test-form');
var url = 'https://script.google.com/macros/s/AKfycbw1xqjEYBww-lW9AupV7MEPEQ-2Ho71RNtIjF01BtYn8ieqTos/exec';


$('#submit-form').on('click', function (e){

  var field1length = document.getElementById('field1').value.length;
  var field2length = document.getElementById('field2').value.length;
  var field3length = document.getElementById('field3').value.length;
  var video = document.getElementById('ytstream');

  if (field1length > 1 && field2length > 1 && field3length > 1) {
    $('button#submit-form').prop('disabled',true);

    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject(),
      success: function(data) {
        $form.remove();
        video.style.visibility="visible";
      },
      error: function(data) {
          alert("Registro fallido.");
          $('button#submit-form').prop('disabled',false);
      }
    });
  } else {
    alert("Todos los campos son requeridos.")
  }
})
