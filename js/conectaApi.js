// Função incializa comunicação com API local 
async function listaVideos() {
    const conexao =  await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

async function criaVideos(titulo, descricao, url, imagem){
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
    console.log(conexaoConvertida, "show")
    return conexaoConvertida
}


//Objeto exportador de funções
export const conectaApi = {
    listaVideos,
    criaVideos
}
