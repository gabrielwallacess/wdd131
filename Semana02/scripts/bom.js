// Referências aos elementos da página
const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');

// Evento do botão Adicionar Capítulo
botao.addEventListener('click', function () {

    // Verifica se o campo não está vazio
    if (input.value.trim() !== '') {

        // Cria os elementos
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        // Define o conteúdo
        li.textContent = input.value;
        botaoExcluir.textContent = '❌';

        // Acessibilidade
        botaoExcluir.setAttribute('aria-label', `Excluir ${input.value}`);

        // Adiciona o botão ao item da lista
        li.append(botaoExcluir);

        // Adiciona o item à lista
        lista.append(li);

        // Evento do botão de exclusão
        botaoExcluir.addEventListener('click', function () {
            lista.removeChild(li);
            input.focus();
        });

        // Limpa o campo de entrada
        input.value = '';
    }

    // Retorna o foco para o campo de entrada
    input.focus();
});