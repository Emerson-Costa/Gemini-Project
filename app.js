let section = document.getElementById("resultados-pesquisa");
let results = "";
for (let data of datas ){
    results+= `
                            <div class="item-resultado">
                                <h2>
                                    <a href="#" target="_blank">${data.title}</a>
                                </h2>
                                <p class="descricao-meta">${data.description}</p>
                                <p>Gênero: ${data.gender}</p>
                                <a href=${data.link} target="_blank">Mais Informações</a>
                            </div>
    `
}
section.innerHTML = results;