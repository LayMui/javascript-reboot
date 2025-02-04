/* --------- States ---------
----------------------------------------------------
  states can represent variables set for the program
  to function properly. These could be counters,
  timers, api endpoints, etc

  ! key thing to remember is that these only run once!
---------------------------------------------------- */
// const definitionApi = "some-endpoint.com"
const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en";


/* --------- DOM Selectors ---------
----------------------------------------------------
  this is where we will query our DOM for all the
  selectors that we will need.
---------------------------------------------------- */
// const element = document.querySelector("#someId")
const form = document.querySelector("#form")
const userInput = document.querySelector("#user-input")
const definitionOutput = document.querySelector("#definition p")
const definitionSearch = document.querySelector("#definition h2")
const submitDefinition = document.querySelector(".btn.btn-primary.position-absolute.end-0.z-")
const alphabet = document.querySelectorAll(".alphabet")
const suggestedList = document.querySelector("#search-results")
/* --------- Function Declarations ---------
----------------------------------------------------
  This is where we define the functionality of our
  app. The functions here don't run automatically,
  they are normally expanded from within other
  functions or used in callbacks
---------------------------------------------------- */
// const myCallback = (e) => { e.preventDefault() }
const getDefinition = () => {
  const url = `${apiUrl}/${userInput.value}`;

  fetch(url)
    .then(response => response.json())
    .then((responseData) => {
     // console.log(responseData)
      if (responseData.title === "No Definitions Found") {
          definitionOutput.innerText = responseData.message
          definitionSearch.innerText = responseData.title;
      } else {
        definitionOutput.innerText = responseData[0].meanings[0].definitions[0].definition;
        definitionSearch.innerText = userInput.value;
      }
    });

}

const virtualKeyBoard = (e) => {
   userInput.value += e.currentTarget.innerText.toLowerCase()

}

const handleInputChange = (e) => {
  let debounceTimeout;

  clearTimeout(debounceTimeout);

  debounceTimeout = setTimeout(getDefinition, 300);
};

/* --------- Actions ---------
----------------------------------------------------
  actions stand for things like addEventListeners,
  intervals, etc
---------------------------------------------------- */
// document.addEventListener('DOMContentLoaded', myCallback)
userInput.addEventListener("input", handleInputChange);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getDefinition

})

alphabet.forEach((key) => {
  key.addEventListener("click", virtualKeyBoard);
})
