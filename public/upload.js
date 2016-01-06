$(function() {
  $('#upload').submit(function() {
    var uploadForm = $('#upload')[0];
    var formData = new FormData(uploadForm);

    $.ajax({
      url: '/practices',
      method: 'post',
      data: formData,
      processData: false,
      contentType: false
    }).done(function(response) {
      console.log(data);
    });
  });
});
