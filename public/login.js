
async function createFrog() {
    attemptCreateFrog('/api/auth/create');
}

async function attemptCreateFrog(endpoint) {

    const frogInput = document.getElementById("frogName").value;
    const myPassword = document.getElementById("password").value;

    const response = await fetch(endpoint, {
        method : 'post',
        body: JSON.stringify({frogName : frogInput, password : myPassword}),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
}

async function login(event) {
  //event.preventDefault();
  attemptLogin('/api/auth/login');
}

async function attemptLogin(endpoint) {

  const myUsername = document.getElementById("myLoginUsername").value;
  const myPassword = document.getElementById("myLoginPassword").value;

  const response = await fetch(endpoint, {
    method : 'POST',
    body: JSON.stringify({frogName : myUsername, password : myPassword}),
    headers: {
        'Content-type': 'application/json; charset = UTF-8'
    },
})

if (response?.status === 200) {

  /*const response2 = await fetch('/api/auth/create', {
    method : 'POST',
    body: JSON.stringify({frogName : frogName}),
    headers: {
        'Content-type': 'application/json; charset = UTF-8'
    },
  });
 /* const response2 = await fetch(`/api/password/${myPassword}`);
  console.log(response2);*/
  localStorage.setItem('userName', myUsername);
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