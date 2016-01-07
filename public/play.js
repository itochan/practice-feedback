$(function() {
  var hash = location.search.substr(1);

  $.ajax('/practices/' + hash)
  .done(function(body) {
    $('#title').text(body.title);
    $('#createdAt').text(body.created_at);
    $('#practice').prop('src', body.file.url);
  });
});
