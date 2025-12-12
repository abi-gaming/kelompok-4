// INFO BUTTON
document.getElementById("infoBtn").addEventListener("click", function(){
    alert("Terbang Laro adalah warisan budaya Pasuruan yang mengajarkan kekompakan, keberanian, dan kebersamaan.");
});

// DARK MODE
function toggleDark(){
    document.body.classList.toggle("dark");
}

// LIGHTBOX
function openLightbox(img){
    document.getElementById("lightbox-img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}
