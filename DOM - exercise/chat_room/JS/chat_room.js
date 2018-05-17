function sendFunction (){
    var input = document.querySelector("#input_text");
    var chat = document.querySelector(".chat");

    var pOutput = document.createElement("p");
    pOutput.textContent = input.value;
    
    chat.appendChild(pOutput);
    input.value = "";
}

document.querySelector("#send_button").onclick = sendFunction;
