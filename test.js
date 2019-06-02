// Problem 2 

// Create a function that uses AJAX

function getAjax (){

    // Create an XMLHttpRequest object

    var ourRequest = new XMLHttpRequest();
    ourRequest.onreadystatechange = function(){

        //  Check the request and status

        if(ourRequest.readyState == 4) { 
            if(ourRequest.status == 200) {

            // Converting json to object 
            var jsonObj = JSON.parse(ourRequest.responseText);

            }
            else{
                console.log("Something wrong happened: " + ourRequest.status);
            }
         
        } 
        else{
            console.log("Ignored readyState: " + ourRequest.readyState);
        } 
           
    }
    // Initialize request
    ourRequest.open('GET', 'http://.....json' ); // Here must be the exact address
    // Send asynchronous request
    ourRequest.send();

};
getAjax();

// Problem 3

// Create a function that looks for id with two parameters

function findById(obj, target){

    if (obj.id === target) {
      return obj.label;
    }

    // Create a loop for...of (ES6) through our object and arrays

    for (const nested of obj.nested) {
      const result = findById(nested, target);
      
      if (result) {
        return result;
      }
    }
  };
   
  // This is our JSON converted to the JavaScript object.

   var obj = {"id":1,"label":"a","nested":[{"id":2,"label":"B","nested":[{"id":5,"label":"E","nested":[]},{"id":6,"label":"F","nested":[]},{"id":7,"label":"G","nested":[]}]},{"id":3,"label":"C","nested":[]},{"id":4,"label":"D","nested":[{"id":8,"label":"H","nested":[]},{"id":9,"label":"I","nested":[]}]}]};
   
  
  console.log(findById(obj, 1)); // a
  console.log(findById(obj, 4)); // D
  console.log(findById(obj, 8)); // H
  console.log(findById(obj, 15)); // undefined

  // Problem 4

// Function that allows you to enter only letters
function allLetter(inputtxt) {
  var letters = /^[A-Za-z]+$/;

  if (inputtxt.value.match(letters)) {
    alert('Your name have accepted : you can try another');
    return true;
  } else {
    alert('Please input alphabet characters only');
    return false;
  }
}
  
// Validation 

function showError(container, errorMessage) {
  container.className = 'error';
  var msgElem = document.createElement('span');
  msgElem.className = "error-message";
  msgElem.innerHTML = errorMessage;
  container.appendChild(msgElem);
}

function resetError(container) {
  container.className = '';
  if (container.lastChild.className == "error-message") {
    container.removeChild(container.lastChild);
  }
}

// Hints for the input field

function validate(form) {
  var elems = form.elements;

  resetError(elems.text1.parentNode);
  if (!elems.text1.value) {
    showError(elems.text1.parentNode, ' Enter your name.');
  }

  resetError(elems.addres1.parentNode);
  if (!elems.addres1.value) {
    showError(elems.addres1.parentNode, ' Your current address.');
  }

  resetError(elems.addres2.parentNode);
  if (!elems.addres2.value) {
    showError(elems.addres2.parentNode, ' Maybe you have another address.');
  }

  resetError(elems.city.parentNode);
  if (!elems.city.value) {
    showError(elems.city.parentNode, ' City.');
  }

  resetError(elems.state.parentNode);
  if (!elems.state.value) {
    showError(elems.state.parentNode, ' Select a state.');
  }
  
};

//  Function of clearing data from the form
function myFunction() {
  document.getElementById("myForm").reset();
}