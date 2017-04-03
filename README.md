# GifTastic - Giphy API App

## Overview

In this project, the GIPHY API is used to make a dynamic web page that populates with gifs chosen by the user. To finish this task, the user must call the GIPHY API and use JavaScript and jQuery to change the HTML of the site.

The final product is [GIPHY APP](https://drgiftastic.herokuapp.com/).

Like many APIs, GIPHY requires developers to use a key to access their API data. Their public API Key is provided [here](https://github.com/Giphy/GiphyAPI#overview) and used for developing this app.

## Procedure

* Create an array of strings, each one related to the topic: children comic. Save it to a variable called ```topics```.

* The app should take the topics in this array and create buttons in the  HTML.

* A loop that appends a button for each string in the array is used.

* When the user clicks on a button, the page grabs 10 static, non-animated gif images from the GIPHY API and place them on the page.

* When the user clicks one of the still GIPHY images, the gif animates. If the user clicks the gif again, it stops playing.

* Under every gif, its rating (PG, G, so on) is displayed.

* This data is provided by the GIPHY API.

* A form is added to the page which takes the value from a user input box and adds it into the topics array. 

* A function call is made that takes each topic in the array and remakes the buttons on the page.