// Abrir o modal de login
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login').style.display = 'flex';
});

// Fechar o modal de login
document.getElementById('close-login').addEventListener('click', function() {
    document.getElementById('login').style.display = 'none';
});

// Submissão do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que a página seja recarregada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Aqui você pode adicionar uma validação real do login, mas vamos apenas seguir
        alert("Login bem-sucedido!");
        
        // Esconder a tela de login e exibir o cardápio
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu').style.display = 'block';  // Exibe o cardápio
    } else {
        alert("Preencha todos os campos!");
    }
});
