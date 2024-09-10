let search = () => {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Seleciona o valor que foi inserido no campo de pesquisa
    let searchField = document.getElementById("search-field").value; 
    searchField = searchField.toLowerCase();
    
    // Se o campo de pesquisa estiver vazio, não retorna nada.
    if(searchField == ""){
        section.innerHTML = "<p>Nenhum resultado foi encontrado!</p>"
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let results = ""; 
    let title = "";
    let description = "";
    let tags = "";

    // Itera sobre cada item do array de dados
    for (let data of datas) { 
        title = data.title.toLowerCase();
        description = data.description.toLowerCase();
        tags = data.tags.toLowerCase();
        if(title.includes(searchField) || description.includes(searchField) || tags.includes(searchField)){
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
    }

     // Atribui o HTML gerado para a seção, renderizando os resultados na página
    if(!results){
        section.innerHTML = "<p>Nenhum resultado foi encontrado, tente novamente.</p>"
    }else{
        section.innerHTML = results;
    }

   
   
}

