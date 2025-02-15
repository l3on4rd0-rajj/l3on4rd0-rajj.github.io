document.addEventListener("DOMContentLoaded", function () {
    const cardsContent = document.querySelector(".cards-content");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-card-image");
    const modalDescription = document.getElementById("modal-card-description");
    const closeModal = document.querySelector(".close");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    // Dados dos cards
    const cardsData = [
        {
            image: "../assets/images/2.png",
            description: "Descrição do Card 1"
        },
        {
            image: "../assets/images/3.png",
            description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        },
        {
            image: "../assets/images/4.png",
            description: "Descrição do Card 3"
        },
        {
            image: "../assets/images/5.png",
            description: "Descrição do Card 4"
        },
        {
            image: "../assets/images/6.png",
            description: "Descrição do Card 5"
        },
        {
            image: "../assets/images/7.png",
            description: "Descrição do Card 6"
        },
        {
            image: "../assets/images/8.png",
            description: "Descrição do Card 7"
        },
        {
            image: "../assets/images/9.png",
            description: "Descrição do Card 8"
        },
        {
            image: "../assets/images/10.png",
            description: "Descrição do Card 9"
        },
        {
            image: "../assets/images/11.png",
            description: "Descrição do Card 10"
        },
        {
            image: "../assets/images/12.png",
            description: "Descrição do Card 11"
        },
        {
            image: "../assets/images/13.png",
            description: "Descrição do Card 12"
        },
        {
            image: "../assets/images/14.png",
            description: "Descrição do Card 13"
        }
    ];

    let currentIndex = 0;

    // Função para criar os cards
    cardsData.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.index = index; // Adiciona um índice para identificar o card

        const cardImage = document.createElement("img");
        cardImage.src = card.image;
        cardImage.alt = "Card Image";

        const cardDescription = document.createElement("div");
        cardDescription.classList.add("card-description");
        cardDescription.textContent = card.description;

        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardDescription);

        // Abrir modal ao clicar no card
        cardElement.addEventListener("click", () => {
            currentIndex = index;
            openModal(currentIndex);
        });

        cardsContent.appendChild(cardElement);
    });

    // Fechar modal ao clicar no botão de fechar
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Navegar para a carta anterior
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
        openModal(currentIndex);
    });

    // Navegar para a próxima carta
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cardsData.length;
        openModal(currentIndex);
    });

    // Função para abrir o modal com a carta selecionada
    function openModal(index) {
        const card = cardsData[index];
        modalImage.src = card.image;
        modalDescription.textContent = card.description;
        modal.style.display = "flex";
    }
});