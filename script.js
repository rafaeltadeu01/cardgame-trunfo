const imageContainer = document.getElementById("displayed-image");
const imageFolder = "imagens/"; // Caminho para a pasta das imagens

// Array para armazenar os caminhos das imagens
const imagePaths = [];

// Função para carregar os caminhos das imagens da pasta
function loadImagesFromFolder() {
    for (let i = 1; i <= 10; i++) { // Altere o número de imagens conforme necessário
        const imagePath = `${imageFolder}imagem${i}.png`;
        imagePaths.push(imagePath);
    }
}

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
}

function displayRandomImage() {
    const randomImage = getRandomImage();
    imageContainer.src = randomImage;
}

// Chama a função para carregar os caminhos das imagens da pasta
loadImagesFromFolder();

// Exibe uma imagem aleatória ao carregar a página
displayRandomImage();

// Exibe uma nova imagem aleatória quando a imagem atual é clicada
imageContainer.addEventListener("click", displayRandomImage);
