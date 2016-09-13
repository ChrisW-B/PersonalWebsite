$(document).ready(function() {
	$.getScript("http://photo.chriswbarry.com/api/read/json?number=20&type=photo", function() {
		var bg = $('.left-side');
		var randNum = Math.round(Math.random() * (tumblr_api_read.posts.length - 1));
		var recentPhoto = tumblr_api_read.posts[randNum];
		console.log();
		var photoUrl = recentPhoto['photo-url-1280'].replace("http://", "https://");
		var postUrl = recentPhoto.url;
		var caption = $(recentPhoto['photo-caption']).text();
		$('head').append('<style>.left-side:after{background-image: linear-gradient(102deg, rgba(0, 195, 216, 0.82) 9%, rgba(186, 39, 66, 0.51) 100%), url("' + photoUrl + '")}</style>');
		var captionEle = $('<a>', {
			href: postUrl,
			class: 'descrip photo-descrip',
			html: "Background: <br/>" + caption
		});
		bg.append(captionEle);
	});
});