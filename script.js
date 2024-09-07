// Função para remover acentos e normalizar o texto
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função para criar o card HTML de cada museu
function criarCard(museu) {
    return `
        <div class="museu-card">
            <img src="${museu.imagem}" alt="${museu.nome}">
            <div class="museu-info">
                <h2>${museu.nome}</h2>
                <p><strong>Localização:</strong> ${museu.localizacao}</p>
                <p><strong>Horário:</strong> ${museu.horario}</p>
                <p>${museu.descricao}</p>
                <a href="${museu.link}" target="_blank">Visite o site</a>
            </div>
        </div>
    `;
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados");
    // Obtém o valor do campo de input e normaliza
    let campoPesquisa = document.getElementById("capital-filtro").value;
    // Se o campo de pesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = '<p class="mensagem-erro">Capital não encontrada!</p>';
        return;
    }
    // Remove acentos e converte para minúsculas
    campoPesquisa = removerAcentos(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada museu
    for (let museu of museus) {
        let capital = removerAcentos(museu.capital.toLowerCase());
        let nome = removerAcentos(museu.nome.toLowerCase());
        let descricao = removerAcentos(museu.descricao.toLowerCase());
        // Se a capital, nome ou descrição incluir o campo de pesquisa
        if (capital.includes(campoPesquisa) || nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Adiciona o card do museu aos resultados
            resultados += criarCard(museu);
        }
    }

    // Exibe mensagem se nenhum museu for encontrado
    if (!resultados) {
        resultados = "<p>Capital não encontrada!</p>";
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;

    // Limpa o campo de input após a pesquisa
    document.getElementById("capital-filtro").value = '';
}

// Função de busca ao pressionar "Enter"
document.getElementById('capital-filtro').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});
