let intentsRestants = 5;
let paraulaadivinar = 'Rapid';
paraulaadivinar = paraulaadivinar.toUpperCase();
//Posa la paraula en majuscules

function comprovarParaula() {
    let paraulai = document.getElementById("paraulaInput").value;
    paraulai = paraulai.toUpperCase();
    //Posa la paraula introduida en majuscules
    if (paraulaadivinar == paraulai) {
        alert('¡Has guanyat!')
        // Si son iguals les paraules has guanyat
        return; // Aixo fa q no funcioni les altres funcions si es compleix aquesta
    }
        if (intentsRestants > 0) {
            intentsRestants--;
        } else {
            alert(`S'han acabat els intents. La paraula era: ${paraulaadivinar}`);
            return;
        }

        if (paraulaadivinar.length == paraulai.length) {
            // Comprova si la paraula té la mateixa longitud
            let resultat = '';
            for (let posiciódelaparaula = 0; posiciódelaparaula < paraulai.length; posiciódelaparaula++) {
                //Aumenta les posicions
                if (paraulai.charAt(posiciódelaparaula) == paraulaadivinar.charAt(posiciódelaparaula)) {
                    resultat += `<span class="verd">${paraulai.charAt(posiciódelaparaula)}</span>`;
                    // Es coloreja de color verd
                } else if (paraulaadivinar.includes(paraulai.charAt(posiciódelaparaula))) {
                    resultat += `<span class="taronja">${paraulai.charAt(posiciódelaparaula)}</span>`;
                    // Cada vegada que hi hagi una lletra de color taronja la pinta y el resultat+= fa que si n'hi ha més d'una lletra taronja la pinti també
                    //span = un element de linea
                    // Es coloreja de color taronja
                } else {
                    resultat += `<span class="blanc">${paraulai.charAt(posiciódelaparaula)}</span>`;
                    // Es coloreja de color blanc
                }
            }
            document.getElementById('resultat').innerHTML = resultat; // Mostra el resultat
        } else {
            alert('Error: La paraula ha de tenir 5 lletres.');
        }
}
