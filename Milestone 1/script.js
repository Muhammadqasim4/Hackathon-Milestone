document.getElementById("toogle").addEventListener("click", function () {
    var content = document.getElementById("content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "flex"; // Show the content
    }
    else {
        content.style.display = "none"; // Hide the content
    }
});
