// Função incializa comunicação com API local 
async function listaVideos() {
    const conexao =  await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

// Função para cadastrar videos no db.json
async function enviaVideos(titulo, descricao, url, imagem){
    const conexao = await fetch ("http://localhost:3000/videos", {
        method: "POST", 
        headers: {
            "Content-type" : "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil vizualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

//Função para buscar vídeo por termos pesquisados

async function buscaVideos(termoDePesquisa){
    const conexao = await fetch (`http://localhost:3000/videos?q=${termoDePesquisa}`)
}

//Objeto exportador de funções
export const conectaApi = {
    listaVideos,
    enviaVideos,
    buscaVideos
}
