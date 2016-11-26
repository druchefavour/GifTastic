// Initial array of movies
	var topics = ['adventure time', 'archer', 'futurama', 'minions'];

	// ========================================================

	// Generic function for dumping the JSON content for each button into the div
	function displayTopicInfo(){
    var comic = $(this).attr("data-comic");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + comic + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({url:queryURL, method: "GET"}).done(function(response) {
      //$("#topicsView").html(JSON.stringify(response));
        var topicDiv = $("<div class='comic'>");
        var rating = response.data.rating;
        var pOne = $("<p>").text("Rating: " + rating);
        topicDiv.append(pOne);
        var imageUrl = response.data.image_original_url;
        var results = response.data;
        console.log(results[1]);
        for (var i = 0; i < results.length; i++) {
        var topicDiv = $('<div>');
          //var = $('<p>');
          //$('<p>').html(results[i]);
        var rating = results[i].rating;
        var p = $('<p>').text("Rating: " + rating)
        var comicImage = $('<img>');
        comicImage.addClass('gif');
        comicImage.attr("src", results[i].images.fixed_height.url);
        comicImage.attr('data-still', results[i].images.fixed_height_still.url);
        comicImage.attr('data-animate', results[i].images.fixed_height.url);
        comicImage.attr('data-state', 'still');
        //comicImage.attr("src", results[i].images.fixed_width.url);
        comicImage.attr("alt", "comic image");
        topicDiv.prepend(p);
        topicDiv.append(comicImage);
      $("#gifs-appear-here").prepend(topicDiv);
     }
     $('.gif').on('click', function () {
      var state = $(this).attr('data-state');
     if (state === 'still') {
      $(this).attr('src', $(this).data('animate'));
      $(this).attr('data-state', 'animate');
    }
    else {
      $(this).attr('src', $(this).data('still'));
      $(this).attr('data-state', 'still');
    }

     })
    });
  }
//============
	// Generic function for displaying movie data 
	function renderButtons(){
    $("#buttons-view").empty();
    for(var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.addClass("comic");
      a.attr("data-comic", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }

  $('#addTopic').on('click', function(event) {
    event.preventDefault();
    var comic =$('#topic-input').val().trim();
    topics.push(comic);
    console.log(comic);
    renderButtons();
    return false;
  });
  $(document).on('click', '.comic', displayTopicInfo);
  renderButtons();
	// ========================================================
	// This function handles events where one button is clicked
	//$('#addTopic').on('click', function(){
		// This line of code will grab the input from the textbox
	//var topic = $('#topic-input').val().trim();
		// The movie from the textbox is then added to our array
		//topics.push(topic);
		// Our array then runs which handles the processing of our movie array
	//	renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
	//	return false;
	//})

	// ========================================================

	// Generic function for displaying the movieInfo
	//$(document).on('click', '.topic', displayTopicInfo);


	// ========================================================

	// This calls the renderButtons() function
	//renderButtons();

//==============================================================
    // Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
    //$('#topicsView').empty();
    // Loops through the array of movies
    //for (var i = 0; i < topics.length; i++){
    // Then dynamicaly generates buttons for each movie in the array
    // Note the jQUery syntax here... 
    //    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
    //    a.addClass('topic'); // Added a class 
    //    a.attr('data-comic', topics[i]); // Added a data-attribute
    //    a.text(topics[i]); // Provided the initial button text
  //      $('#topicsView').append(a); // Added the button to the HTML
  //  }
//  }

  $("button").on("click", function() {
  var comic = $(this).data("topics");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
  comic + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({ url: queryURL, method: "GET" }).done(function(response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.


        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================
    var results = response.data;
    var imageUrl = results.images;
    console.log(results[1].images.original.url);
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
      comicImage.attr("src", results[i].images.fixed_height_still.url);
     // comicImage.attr("src", results[i].images.fixed_width.url);
      comicImage.attr("alt", "comic image");
      topicDiv.prepend(p);
      topicDiv.append(comicImage);
      $("#gifs-appear-here").prepend(topicDiv);
//============================================
//comicImage.addClass("gif");
//var state = $(this).attr('data-state');
//var still = $(this).attr('data-still');
//$(this).attr("data-state", still);
//$(this).attr("src", results[i].images.  fixed_height_still.url);
//$(this).attr("data-still", results[i].images.fixed_width_still.url);
//$(this).attr("data-animate", results[i].images.fixed_height.url);

//$(".gif").on('click', function () {
//if (state === 'still') {
//      $(this).attr('src', $(this).data('animate'));
 //     $(this).attr('data-state', 'animate');
 //   }
 //   else {
 //     $(this).attr('src', $(this).data('still'));
 //     $(this).attr('data-state', 'still');
 //   }
   
//}); 

    
        // ==================================
      }

    });
    })

  //==========================
 // var gifDiv = $("<div class='gif'>");
 // $(".gif").on("click", function() {
 //   var results = response.data;
 //   var gifImage = $('<img>');
 //   gifImage.attr("src", results[i].images.fixed_height_still.url);
//    gifImage.attr("alt", "still image");
//    gifImage.addClass("still");
//    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
//    gifImage.attr("data-state", still);

//    var still = $(this).data("still");

 //   var gifAnimateImage = $('<img>');
 //   gifAnimateImage.attr("src", results[i].images.fixed_height.url);
 //   gifAnimateImage.attr("alt", "animate image");
 //   gifAnimateImage.addClass("animate");
//    gifAnimateImage.attr("data-animate", results[i].images.fixed_height.url);
//    var animate = $(this).data("animate");
