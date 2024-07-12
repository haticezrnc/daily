document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  const dailyForm = document.getElementById('dailyForm');
  const todoForm = document.getElementById('todoForm');
  const entryList = document.getElementById('entryList');
  const todoList = document.getElementById('todoList');
  const logoutButton = document.getElementById('logoutButton');

  function toggleForms() {
      document.getElementById('register').style.display = 
          document.getElementById('register').style.display === 'none' ? 'block' : 'none';
      document.getElementById('login').style.display = 
          document.getElementById('login').style.display === 'none' ? 'block' : 'none';
  }

  registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('username', document.getElementById('regUsername').value);
      localStorage.setItem('password', document.getElementById('regPassword').value);
      alert('Kayıt başarılı!');
      toggleForms();
  });

  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
      const username = document.getElementById('logUsername').value;
      const password = document.getElementById('logPassword').value;

      if (username === storedUsername && password === storedPassword) {
          alert('Giriş başarılı!');
          document.getElementById('login').style.display = 'none';
          document.getElementById('daily').style.display = 'block';
      } else {
          alert('Kullanıcı adı veya şifre hatalı!');
      }
  });

  dailyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entry = document.getElementById('dailyEntry').value;
      const date = new Date().toLocaleDateString();
      const listItem = document.createElement('li');
      listItem.textContent = `${date}: ${entry}`;
      entryList.appendChild(listItem);
      document.getElementById('dailyEntry').value = '';
  });

  todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const todoItem = document.getElementById('todoItem').value;
      const listItem = document.createElement('li');
      listItem.textContent = todoItem;

      listItem.addEventListener('click', () => {
          listItem.classList.toggle('completed');
      });

      todoList.appendChild(listItem);
      document.getElementById('todoItem').value = '';
  });

  logoutButton.addEventListener('click', () => {
      document.getElementById('daily').style.display = 'none';
      document.getElementById('login').style.display = 'block';
      alert('Çıkış başarılı!');
  });
});
