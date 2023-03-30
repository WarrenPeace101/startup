(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
        const nameEl = document.querySelector('#userName');
        nameEl.value = userName;
        const user = await getUser(nameEl.value);
        authenticated = user?.authenticated;
    }

    if (authenticated) {
        document.querySelector('#playerName').textContent = userName;
    }

})();


async function createFrog() {
    attemptCreateFrog('/api/auth/create');
}

async function attemptCreateFrog(endpoint) {

    const response = await fetch(endpoint, {
        method : 'post',
        body: JSON.stringify({frogName : frogName, password : password}),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })

    const body = await response.json();

    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        window.location.href = 'play.html';
    }
    else {
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();
    }
}

function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }

  async function getUser(frogName) {
    let scores = [];
    
    const response = await fetch(`/api/user/${frogName}`);
    if (response.status === 200) {
      return response.json();
    }
  
    return null;
  }