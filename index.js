/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [x] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
var themeButton = document.getElementById("theme-button");

// Step 2: Write the callback function
const toggleDarkMode = () => {
  // Write your code here
  // This section will run whenever the button is clicked
  document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
// and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);


/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [x] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [x] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let rsvpSub = document.getElementById("rsvp-button");

const addParticipant = (event, person) => {
  // Step 2: Write your code to manipulate the DOM here
  let name = document.getElementById("rsvpName");
  let email = document.getElementById("rsvpEmail");

  let nameV = name.value;
  let emailV = email.value;

  let paragraph = document.createElement("p");
  let text = "🎟️ " + nameV + " has RSVP'd with email " + emailV;
  let content = document.createTextNode(text);
  paragraph.appendChild(content);
  let list = document.getElementById("rsvp-participants");
  list.appendChild(paragraph);

  //event.preventDefault();
}

// Step 3: Add a click event listener to the submit RSVP button here
//rsvpSub.addEventListener('click', addParticipant);


/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  var person = {
    name: rsvpInputs[0].value,
    email: rsvpInputs[1].value
  }

  for (var i = 0; i < rsvpInputs.length; i++) {
    var val = rsvpInputs[i].value;
    if (val.length <= 2){
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    }
    else {
      rsvpInputs[i].classList.remove("error");
    }
  }

  var email = document.getElementById("rsvpEmail");
  var emailV = email.value;

  if (emailV.includes("@") && emailV.includes(".com")) {
    containsErrors = false;
    rsvpInputs[1].classList.remove("error");
  }
  else {
    containsErrors = true;
    console.log("true");
    rsvpInputs[1].classList.add("error");
  }

  // TODO: Inside loop, validate the value of each input
  if (containsErrors == false) {
    addParticipant(person);
    toggleModal(person);
    for (var i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }


  // TODO: If no errors, call addParticipant() and clear fields

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpSub.addEventListener('click', validateForm);


/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

let modal = document.getElementById("success-modal");

const toggleModal = (person) => {
   // TODO
  let modalContent = document.getElementById("modal-text");
  // TODO: Update modal display to flex
  modal.style.display = "flex";

  // TODO: Update modal text to personalized message
  /*let paragraph = document.createElement("p");
  let text = "Thank's for RSVPing, " + person.name + "! We can't wait to see you at the event!";
  let content = document.createTextNode(text);
  paragraph.appendChild(content);
  let list = document.getElementById("modal-text");
  list.appendChild(modalContent);*/

  // Set modal timeout to 5 seconds
  setTimeout(() => {
    modal.style.display = "none";
    console.log("here");
  }, 5000);
}

const closeModal = () => {
  modal.style.display = "none";
}

let modalClose = document.getElementById("modal-button");
modalClose.addEventListener('click', closeModal);

var rotateFactor = 0;
var modalImg = document.getElementById("modal-item");

// TODO: animation variables and animateImage() function

const animateImage = () => {
  if (rotateFactor == 0){
    rotateFactor = -10;
  }
  else {
    rotateFactor = 0;
  }
  //modalImg.transform.rotate(${scaleFactor}deg);

};