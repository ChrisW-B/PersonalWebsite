$(document).ready(
	function() {
		setTweet();
		setLastFM();
		setBg();
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

function setBg() {
	var tumblrWidget = $('.photo-descrip');
	$.ajax({
			url: "/bginfo"
		})
		.done(function(data) {
			if (data.success) {
				var info = $('<a href="' +
					data.url +
					'" title="Link to Background">' +
					data.descrip +
					'</a>');
				tumblrWidget.html(info);
			}
		});
}