  document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aqui você pode adicionar lógica para validar o login
  // Neste exemplo, estou apenas verificando se os campos estão preenchidos
  if (username && password) {
    // Aqui você pode redirecionar o usuário para outra página, por exemplo:
    // window.location.href = "dashboard.html";
    console.log("Login successful");
  } else {
    document.getElementById("error-message").innerText = "Por favor, insira um nome de usuário e senha.";
  }
});
