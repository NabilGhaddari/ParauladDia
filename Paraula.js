let intentosRestantes = 5;
let paraulaadivinar = 'Rapid';
paraulaadivinar = paraulaadivinar.toUpperCase();
//Posa la paraula en majuscules

function comprovarParaula() {
    let paraulai = document.getElementById("paraulaInput").value;
    paraulai = paraulai.toUpperCase();
//Posa la paraula introduida en majuscules
    if (paraulaadivinar == paraulai ){
        document.getElementById('paraula').hidden = false;
        // Si son iguals les paraules has guanyat
        return; // Aixo fa q no funcioni les altres funcionc si es compleix aquesta
    }
    if (intentosRestantes > 1) {
        intentosRestantes--;
        document.getElementById("intents").innerText = 'Intentos restantes: ' + intentosRestantes;
    }else {
        alert(`Se han agotado los intentos. La palabra era: ${paraulaadivinar}`);
        return;
    }

    if (paraulaadivinar.length == paraulai.length) {
        // Comprova si la paraula té la mateixa longitud

        for (let posiciódelaparaula = 0; posiciódelaparaula < paraulai.length; posiciódelaparaula++) {
            //Aumenta les posicions
            if (paraulai.charAt(posiciódelaparaula) == paraulaadivinar.charAt(posiciódelaparaula)) {
                alert('verd')
                // Es coloreja de color verd
            }
            else if (paraulaadivinar.includes(paraulai.charAt(posiciódelaparaula))) {
                alert('taronja fluix');
                // Es coloreja de color taronja fluix
            }
            else {
                alert('blanc');
                // Es coloreja de color blanc
            }
        }
    } else {
        alert('Error: La paraula ha de tenir 5 lletres.');
    }
}
