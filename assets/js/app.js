//create an array of strings, each one rated to a topic that interests you
//Save it to a variable called topics
//Take the topics in this array and create buttons in your HTML.
//Use a loop that appends a button for each string in the array.
//user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page
//When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing
//Under every gif, display its rating (PG, G, so on).
//Add a form to your page takes the value from a user input box and adds it into your topics array. 
//Then make a function call that takes each topic in the array remakes the buttons on the page.

// Initial array of movies
	var topics = ['adventure time', 'archer', 'futurama', 'minions'];

	// ========================================================

	// Generic function for dumping the JSON content for each button into the div
	function displayTopicInfo(){

		// YOUR CODE GOES HERE!!!
		// HINT: You will need to create a new div to hold the JSON.

	}

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#topicsView').empty();

		// Loops through the array of movies
		for (var i = 0; i < topics.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('topic'); // Added a class 
		    a.attr('data-comic', topics[i]); // Added a data-attribute
		    a.text(topics[i]); // Provided the initial button text
		    $('#topicsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#gifTopics').on('click', function(){

		// This line of code will grab the input from the textbox
		var topic = $('#gifTopics-input').val().trim();

		// The movie from the textbox is then added to our array
		topics.push(topic);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo
	$(document).on('click', '.topic', displayTopicInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();

//==============================================================

    $("button").on("click", function() {
      var comic = $(this).data("topics");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      comic + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================
        var imageUrl = response.data.image_original_url;
        var results = response.data;
        // ========================



        // Step 3: uncomment the for loop above and the closing curly bracket below.
        // Make a div with jQuery and store it in a variable named animalDiv.
        // Make a paragraph tag with jQuery and store it in a variable named p.
        // Set the inner text of the paragraph to the rating of the image in results[i].
        // Make an image tag with jQuery and store it in a variable named animalImage.
        // Set the image's src to results[i]'s fixed_height.url.
        // Append the p variable to the animalDiv variable.
        // Append the animalImage variable to the animalDiv variable.
        // Prepend the animalDiv variable to the element with an id of gifs-appear-here.

        // ============= put step 3 in between these dashes ======================

        for (var i = 0; i < results.length; i++) {
          var topicDiv = $('<div>');
          //var = $('<p>');
          //$('<p>').html(results[i]);
          var rating = results[i].rating;
          var p = $('<p>').text("Rating: " + rating);
          var comicImage = $('<img>');
          comicImage.attr("src", results[i].images.fixed_height.url);
          comicImage.attr("alt", "comic image");
          topicDiv.prepend(p);
          topicDiv.prepend(comicImage);
          $("#gifs-appear-here").prepend(topicDiv);
        // ==================================
        }

      });
    });
