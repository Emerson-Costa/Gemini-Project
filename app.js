let search = () => {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa"); 

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let results = ""; 

    // Itera sobre cada item do array de dados
    for (let data of datas) { 
        // Constrói o HTML para cada item, formatando os dados
        results += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${data.title}</a>
                </h2>
                <p class="descricao-meta">${data.description}</p>
                <p>Gênero: ${data.gender}</p>
                <a href=${data.link} target="_blank">Mais Informações</a>
            </div>
        `;
    }

    // Atribui o HTML gerado para a seção, renderizando os resultados na página
    section.innerHTML = results;
}

