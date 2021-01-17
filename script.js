function copyText() {
    document.getElementById("text-input").disabled = false;
    var copyText = document.getElementById("text-input");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("text-input").disabled = true;
    alert("Copied to Clipbord!")
}

setInterval(function(){
    var inputColor = document.getElementById("input").value;
    var textInputColor = document.getElementById("text-input").value;
    var copyButton = document.getElementById("copy-button");
    document.getElementById("text-input").value = inputColor
    document.getElementById("body").style.backgroundColor = inputColor
    document.getElementById("input").style.backgroundColor = inputColor
    if(inputColor==='#000000' || inputColor==='#00000'){
        document.getElementById("text").style.color = 'white'
    } else {
        document.getElementById("text").style.color = 'black'
    }
}, 10)