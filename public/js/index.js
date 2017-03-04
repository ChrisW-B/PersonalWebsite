const ONE_MIN = 60 * 1000;

$(document).ready(
  function() {
    setInterval(setTweet, 2 * ONE_MIN);
    setInterval(setLastFM, ONE_MIN / 2);
    setTweet();
    setLastFM();
    setBgInfo();
  }
);

function setTweet() {
  var textWidget = $('.twitter-widget .descrip');
  var timeWidget = $('.twitter-widget .reltime');
  $.ajax({
      url: "/twitter"
    })
    .done(function(data) {
      if (data.success) {
        textWidget.html(data.text);
        var time = $('<a href="' + data.link +
          '" title="' +
          data.time +
          '">' + data.time + "</a>");
        timeWidget.html(time);
      }
    });
}

function setLastFM() {
  var textWidget = $('.lastfm-widget .descrip');
  $.ajax({
      url: "/lastfm"
    })
    .done(function(data) {
      if (data.success) {
        textWidget.text(data.text);
      }
    });
}

function setBgInfo() {
  var tumblrWidget = $('.photo-descrip');
  $.ajax({
      url: "/bginfo"
    })
    .done(function(data) {
      if (data.success) {
        var info = $('<a href="' +
          data.link +
          '" title="Link to Background">' +
          data.descrip +
          '</a>');
        tumblrWidget.html(info);
      }
    });
}
