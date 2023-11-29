function lerXML() {
    var input = document.getElementById('inputFile');
    var arquivoXML = input.files[0];

    if (arquivoXML) {
        var leitor = new FileReader();

        leitor.onload = function (e) {
            var xmlString = e.target.result;
            processarXML(xmlString);
        };

        leitor.readAsText(arquivoXML);
    } else {
        alert("Por favor, selecione um arquivo XML.");
    }
}

function processarXML(xmlString) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    var elementos = xmlDoc.getElementsByTagName("*");

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        console.log(elemento.tagName + ": " + elemento.textContent);
    }
}
