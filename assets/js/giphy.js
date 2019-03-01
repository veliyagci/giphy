
    
    $("button").on("click", function() {
      // Grabbing and storing the data-animal property value from the button
      var player = $(this).attr("data-player");

      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        player + "&api_key=wEMjus4W3KtOo8bgaXOJAS3NxKBmrB7o&limit=12";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
          console.log(queryURL);

          console.log(response);
          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var playerDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var playerImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            playerImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            playerDiv.append(p);
            playerDiv.append(playerImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(playerDiv);
          }
        });
    });
