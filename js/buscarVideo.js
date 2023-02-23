import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./mostraVideos.js";

//Função que faz filtro por termo de pequisa e envia para API
async function buscarVideo(evento){
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await conectaApi.buscaVideos(dadosPesquisa)
    
    const lista = document.querySelector("[data-lista]")

    //laço que remove todos os videos da pagina
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url,
        elemento.imagem)))
}

const btnPesquisa = document.querySelector("[data-btn-pesquisa]")

btnPesquisa.addEventListener("click", evento => buscarVideo(evento))