function getShows() {
	$.getJSON("shows.json", function(shows) {
		$('#showList li').remove();
		
		for (var i=0; i<shows.length; i++) {
			document.getElementById('showList').innerHTML +=
			'<li>' + '<a href="'+shows[i].page+'">' +
			'<h1>' + shows[i].name + '</h1>' +
			'<img src="'+shows[i].image+'">' +
			'<p>' + shows[i].airs + '</p>' + '</a>' + '</li>'
		}
		
		$('#showList').listview('refresh');
		
	});
}

function getMovies() {
	$.getJSON("movies.json", function(movies) { 
		$('#movieList li').remove();
		
		for (var i=0; i<movies.length; i++) {
			document.getElementById('movieList').innerHTML +=
			'<li>' + '<a href="'+movies[i].page+'">' +
			'<h1>' + movies[i].name + '</h1>' +
			'<img src="'+movies[i].image+'">' +
			'<p>' + movies[i].released + '</p>' + '</a>' + '</li>'
		}
		
		$('#movieList').listview('refresh');
		
	});
}