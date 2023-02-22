import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector("[data-formulario]")

async function criaVideo(evento){
    evento.preventDefault()

    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()
    const url = document.querySelector("[data-url]").value
    const imagem = document.querySelector("[data-imagem]").value
    

    await conectaApi.enviaVideos(titulo, descricao, url, imagem)

    window.location.href = "../pages/envio-concluido.html"
}

formulario.addEventListener("submit", evento => criaVideo(evento))