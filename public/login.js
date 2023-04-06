
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

    //const body = await response.json();
    if (response?.status === 200) {
        localStorage.setItem('userName', frogName);
    }
}

async function login(event) {
  event.preventDefault();
  attemptLogin('/api/auth/login');
}

async function attemptLogin(endpoint) {

  const myPassword = document.getElementById("myLogin").value;
  var frogName;

  const response = await fetch(endpoint, {
    method : 'POST',
    body: JSON.stringify({password : myPassword}),
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
  //localStorage.setItem('userName', response2.body.frogName);
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
