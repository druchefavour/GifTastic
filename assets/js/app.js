//create an array of strings, each one rated to a topic that interests you
//Save it to a variable called topics
//Take the topics in this array and create buttons in your HTML.
//Use a loop that appends a button for each string in the array.
//user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page
//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing
//Under every gif, display its rating (PG, G, so on).
//Add a form to your page takes the value from a user input box and adds it into your topics array. 
//Then make a function call that takes each topic in the array remakes the buttons on the page.

$("button").on("click", function() {
      var comic = $(this).data("cartoons-comics");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      comic + "&api_key=dc6zaTOxFJmzC&limit=30";

//=============================================
// Initial array of Topics
//var topics = [];
//==============================================

// Generic function for capturing the topic name from the data-attribute
//function alertTopicName() {
//	var topicName =$(this).data("name");
//	alert(topicName);
//	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=cartoons-comics&api_key=dc6zaTOxFJmzC'

	//Write code between the dashes below to hit the queryURL, take the data and display it in the div with an id of moviesView

	//------YOUR CODE GOES IN THESE DASHES

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		// Creates a generic div to hold the movie
			console.log(response);


			var imageUrl = response.data.image_original_url;
            var results = response.data;
			//Retrieves the Rating Data

			for (var i = 0; i < results.length; i++) {
          var topicDiv = $('<div>');
          //var = $('<p>');
          //$('<p>').html(results[i]);
          var rating = results[i].rating;
          var p = $('<p>').text("Rating: " + rating);
          var topicImage = $('<img>');
          topicImage.attr("src", results[i].images.fixed_height.url);
          topicImage.attr("alt", "topic image");
          topicDiv.prepend(p);
          topicDiv.prepend(topicImage);
          $("#gifs-appear-here").prepend(topicDiv);
      }
        
	});
	//--------------
}) 
