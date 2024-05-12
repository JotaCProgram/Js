document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão pelo ID
    var button = document.getElementById('myButton');

    // Adicione um ouvinte de evento de clique ao botão
    button.addEventListener('click', function() {
        // Exibe uma mensagem no console quando o botão é clicado
        console.log("O botão foi clicado!");

        // Exemplo de como usar um dos elementos fornecidos
        console.log("Ação de histórico: Desfazer");
    });
});
