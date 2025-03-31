document.getElementById("saveButton").addEventListener("click", function () {
    const name = document.getElementById("characterName").value;
    const type = document.getElementById("characterType").value;
    const color = document.getElementById("characterColor").value;

    const character = { name, type, color };
    localStorage.setItem("character", JSON.stringify(character));
    alert("Character saved successfully!");
});
