//function to get images from dogAPI
function getImages(numOfDogImages) {
    //if number of images asked for is less than 3, return 3 by default
    if (numOfDogImages < 3){
        fetch(`https://dog.ceo/api/breeds/image/random/3`)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
        
    }
    //if number asked for is greater than 50, create error and ask for number under 50
    else if (numOfDogImages > 50){
        return alert('Please select a number less than 50');
        }
        //return inputted number of dog images
        else {
            fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogImages}`)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson));
        
 }
    }

    //display images onto the DOM

    function displayImages(responseJson){
        console.log(responseJson);
        $('.results').html('');
        responseJson.message.forEach(fetchedImage => {
            $('.results').append(`<img src="${fetchedImage}" class= "results">`);
        });
        //remove hidden class
        $('.results').removeClass('hidden');

    }

   


//function to submit form input
function watchForm(){
    $('.submitButton').submit( event => {
        event.preventDefault();
        let enteredNum = $('#numDogs').val();
        getImages(enteredNum);
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });