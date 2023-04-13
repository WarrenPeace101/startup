
function toCreateFrog() {
  window.location.href = 'createfrog.html';
}

function toHomeScreen() {
  window.location.href = 'index.html';
}

async function createFrog() {
    attemptCreateFrog('/api/auth/create');
}

async function attemptCreateFrog(endpoint) {

    const frogInput = document.getElementById("frogName").value;
    const myPassword = document.getElementById("password").value;
    var frogColor = "greenFrog";
  
    if (document.getElementById("blueFrog").checked) {
      frogColor = document.getElementById("blueFrog").value;
    }
    if (document.getElementById("pinkFrog").checked) {
      frogColor = document.getElementById("pinkFrog").value;
    }

    const response = await fetch(endpoint, {
        method : 'post',
        body: JSON.stringify({frogName : frogInput, password : myPassword, frogColor : frogColor}),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })

    window.location.href = 'index.html';
}

async function login(event) {
  attemptLogin('/api/auth/login');
}

async function attemptLogin(endpoint) {

  const myUsername = document.getElementById("myLoginUsername").value;
  const myPassword = document.getElementById("myLoginPassword").value;
  let frogColor = "greenFrog";

  const response = await fetch(endpoint, {
    method : 'POST',
    body: JSON.stringify({frogName : myUsername, password : myPassword, frogColor: frogColor}),
    headers: {
        'Content-type': 'application/json; charset = UTF-8'
    },
})

console.log(response.body);

if (response?.status === 200) {

  const myResponse = await response.json();

  frogColor = myResponse.frogColor;
  localStorage.setItem('userName', myUsername);
  localStorage.setItem('frogColor', frogColor);
  window.location.href = 'gamescreen.html';
}
}
  async function getUser(frogName) {
    
    const response = await fetch(`/api/user/${frogName}`);
    if (response.status === 200) {
      return response.json();
    }
    return null;
  }

  function callService(url, displayCallback) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayCallback(data);
      });
  }

  function displayQuote(data) {
    const containerEl = document.querySelector("#quoteText");
  
    const quoteEl = document.createElement("p");
    quoteEl.classList.add("quote");
    const authorEl = document.createElement("p");
    authorEl.classList.add("author");
  
    quoteEl.textContent = data.content;
    authorEl.textContent = data.author;
  
    containerEl.appendChild(quoteEl);
    containerEl.appendChild(authorEl);
  }

  callService("https://api.quotable.io/random", displayQuote);