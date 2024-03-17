function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encrypt() {
    let text = document.getElementById('text').value.toLowerCase();
    text = removeAccents(text);
    const encryptedText = text.replace(/e/g, 'enter')
                             .replace(/i/g, 'imes')
                             .replace(/a/g, 'ai')
                             .replace(/o/g, 'ober')
                             .replace(/u/g, 'ufat');
    document.getElementById('output').value = encryptedText;
}

function decrypt() {
    let text = document.getElementById('text').value.toLowerCase();
    text = removeAccents(text);
    const decryptedText = text.replace(/enter/g, 'e')
                             .replace(/imes/g, 'i')
                             .replace(/ai/g, 'a')
                             .replace(/ober/g, 'o')
                             .replace(/ufat/g, 'u');
    document.getElementById('output').value = decryptedText;
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('output');
    outputTextarea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
}
