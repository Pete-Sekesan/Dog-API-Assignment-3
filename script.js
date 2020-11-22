//function to get images from dogAPI
function getImages(numOfDogImages) {
    fetch("https://dog.ceo/api/breed/" + selectDogBreed() + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
        }
        
 
    

    //display images onto the DOM

    function displayImages(responseJson) {
        console.log(responseJson);
        if (responseJson.status !== "success") {
            alert('We could not find that breed. Please try another.')
        } else if (responseJson.status === "success") {
                $('.results').replaceWith(`<img src="${responseJson.message}" class= "results">`);
                $('.results').removeClass('hidden');
            };
            //remove hidden class
            
 
        }
    

    function selectDogBreed(){
        let dogBreed = $('#selectBreed').val();
        return dogBreed.toLowerCase().trim();
        
        

    }
   


//function to submit form input
function watchForm(){
    $('.submitButton').submit( event => {
        event.preventDefault();
        getImages();
    })
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });