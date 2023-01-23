var keyboard = document.getElementById("keyboard");
var textDisplay = document.getElementById("text-display");
keyboard.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    if(e.target.classList.contains("backspace")){
      if(textDisplay.textContent.length > 0){
        var text = textDisplay.textContent;
        text = text.substring(0, text.length - 1);
        textDisplay.textContent = text;
      }
    }
    else if(e.target.classList.contains("send")){
      // Envoie le texte saisi à une autre partie de l'application
      console.log("Texte saisi: " + textDisplay.textContent);
      textDisplay.textContent = "";
    }

    else if(e.target.classList.contains("space")){
      textDisplay.textContent += " ";
    }
    
    else{
      var text = e.target.textContent;
      textDisplay.textContent += text;
    }
  }
});
