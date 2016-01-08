// const DOMAIN = 'http://localhost:3000';
const DOMAIN = 'https://koefb.itochan.jp';

var comments;
var hash;

$(function() {
  hash = location.search.substr(1);

  $.ajax(`${DOMAIN}/practices/${hash}`)
  .done(function(body) {
    $('#title').text(body.title);
    $('#createdAt').text(new Date(body.created_at).toLocaleString());
    $('#practice').prop('src', `${DOMAIN}${body.file.url}`);
  });

  $('#commentForm').submit(function() {
    $.ajax({
      url: `${DOMAIN}/practices/${hash}/comments`,
      method: 'post',
      contentType: 'application/json',
      processData: 'false',
      data: JSON.stringify({
        playback_time: Math.floor($('#practice')[0].currentTime),
        text: $('#commentText').val()
      })
    })
    .done(function(body) {
      loadComments(hash);
      $('#commentText').val('');
    });
  });

  loadComments(hash);
  playVideo();
});

function loadComments(hash) {
  $.ajax(`${DOMAIN}/practices/${hash}/comments`)
  .done(function(body) {
    comments = body;
    var tbody = $('#comments tbody');
    tbody.children().remove();
    comments.forEach(function(element, index, array) {
      var time = element.playback_time;
      var seconds = ('0' + time % 60).slice(-2);
      var minutes = (time - seconds) / 60;
      var formattedTime = `${minutes}:${seconds}`;

      tbody.append(`<tr id='comment-${element.id}'><td>${formattedTime}</td><td>${element.text}</td>` +
        `<td><input type='button' onclick='deleteComment(${element.id}); return false;' value='削除'></td></tr>`);
    });
  });
}

function deleteComment(id) {
  $.ajax({
    url: `${DOMAIN}/practices/${hash}/comments/${id}`,
    method: 'delete'
  }).done(function () {
    $(`#comment-${id}`).remove();
  });
}

var timerId;

function playVideo() {
  if (timerId != null) {
    return;
  }
  timerId = setInterval('moveComment()', 1000);
}

function moveComment() {
  var currentTime = Math.floor($('#practice')[0].currentTime);

  for (comment of comments) {
    if (currentTime != comment.playback_time) {
      continue;
    }
    var time = comment.playback_time;
    var seconds = ('0' + time % 60).slice(-2);
    var minutes = (time - seconds) / 60;
    var formattedTime = `${minutes}:${seconds}`;

    $('<div>').appendTo('#viewerComments')
    .text(comment.text)
    .css('color', '#fff')
    .prop('loop', '1')
    .marquee({
      delayBeforeStart: 0
    })
    .bind('finished', function() {
      $(this).remove();
    });
  }
  timerId = null;
}
