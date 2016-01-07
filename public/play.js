$(function() {
  var hash = location.search.substr(1);

  $.ajax(`/practices/${hash}`)
  .done(function(body) {
    $('#title').text(body.title);
    $('#createdAt').text(new Date(body.created_at).toLocaleString());
    $('#practice').prop('src', body.file.url);
  });

  $.ajax(`/practices/${hash}/comments`)
  .done(function(body) {
    var tbody = $('#comments tbody');
    tbody.children().remove();
    body.forEach(function(element, index, array) {
      var time = element.playback_time;
      var seconds = ('0' + time % 60).slice(-2);
      var minutes = (time - seconds) / 60;
      var formattedTime = `${minutes}:${seconds}`;

      tbody.append(`<tr><td>${formattedTime}</td><td>${element.text}</td></tr>`);
    });
  });

  $('#commentForm').submit(function() {
    $.ajax({
      url: `/practices/${hash}/comments`,
      method: 'post',
      contentType: 'application/json',
      processData: 'false',
      data: JSON.stringify({
        playback_time: Math.floor($('#practice')[0].currentTime),
        text: $('#commentText').val()
      })
    })
    .done(function(body) {
      console.log(body);
    });
  });
});
