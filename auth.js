document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('regUsername').value;
  const password = document.getElementById('regPassword').value;
  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(u => u.username === username)) {
    document.getElementById('regError').innerText = 'Username already exists.';
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedIn', username);
  window.location.href = 'dashboard.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('loggedIn', username);
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('error').innerText = 'Invalid login credentials.';
  }
});

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}

function protectPage() {
  if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
  }
}

