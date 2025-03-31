document.addEventListener("DOMContentLoaded", function () {
    const characterDisplay = document.getElementById("characterDisplay");
    const characterData = localStorage.getItem("character");

    if (characterData) {
        const character = JSON.parse(characterData);
        characterDisplay.innerHTML = `
            <h2>${character.name}</h2>
            <p>Type: ${character.type}</p>
            <div style="width: 100px; height: 100px; background-color: ${character.color};"></div>
        `;
    }
});
