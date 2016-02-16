$(document).ready(function() {

	//display content as templates
	var displaySongs = function(songs) {
		var list = $("#song-list");

		$.each(songs, function (key, song) {
			
			var element = $('<a/>')
			.html(song.name)
			.attr('id', key)
			.addClass("list-group-item")
			.appendTo(list);

		});

	}
	//get content from server

	$.ajax({
		url:'songs.json',
		dataType:'json',
		method: 'GET'
	}).done(function(data) {
		displaySongs(data)
		console.log('consume data', data);
	});

	
});






//selecting songs

//playing songs