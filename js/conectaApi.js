// Função incializa comunicação com API local 
async function listaVideos() {
    const conexao =  await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}

//Objeto exportador de funções
export const conectaApi = {
    listaVideos
}
