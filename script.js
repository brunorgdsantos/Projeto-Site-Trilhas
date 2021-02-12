let time = 2000, /*tempo de rotação das imagens*/
    currentImageIndex = 0, /*Logica, a primeira imagem começa do 0*/
    images = document /*Pegando as imagens*/
        .querySelectorAll("#slider img")/*Pegando todas as imagens que estiverem no slider img do css*/
max = images.length; /*pegando o maximo de imagens*/

function nextImage() {/*Função troca de imagens*/

    images[currentImageIndex]
        .classList.remove("selected")/*retirando o selected da imagem*/

    currentImageIndex++ /*Acrescentando +1 ao current*/

    if (currentImageIndex >= max)/*Resetando o current se ele for maior que o max*/
        currentImageIndex = 0

    images[currentImageIndex]/*Colocando o selected na imagem*/
        .classList.add("selected")
}

function start() { /*Parte logica, para as mudaças de imagens*/
    setInterval(() => {
        nextImage() /*Função troca de imagens*/
    }, time)/*time é o tempo de transição de cada imagem, estabelecida em 2000!*/
}
window.addEventListener("load", start)/*A função start sera executada assim que a janela for aberta*/