const DOMAIN = 'http://localhost:3000';
// const DOMAIN = 'https://koefb.itochan.jp';

$(function() {
  $('#upload').submit(function() {
    var uploadForm = $('#upload')[0];
    var formData = new FormData(uploadForm);

    $.ajax({
      url: `${DOMAIN}/practices`,
      method: 'post',
      data: formData,
      processData: false,
      contentType: false
    }).done(function(response) {
      location.href = `play.html?${response.access_hash}`;
    });
  });
});
