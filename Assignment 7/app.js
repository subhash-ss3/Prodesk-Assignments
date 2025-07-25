const imageContainerE1 = document.querySelector(".image-container");

const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", () => {
    imagenum = 6;
    for (let i = 0; i < imagenum; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 10000)}`;
        imageContainerE1.appendChild(newImg);
    }
});