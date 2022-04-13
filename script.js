const participantes = ['junior', 'rafael', 'daniel'];

function posicao(primeiro, segundo, terceiro) {
    let result = bonus(primeiro, segundo, terceiro);
    primeiro = result [0];
    segundo  = result [1];
    terceiro = result [2];

    console.log(`O campeão da maratona Kenzie é:

    1º colocado: ${primeiro}
    2º colocado: ${segundo}
    3º colocado: ${terceiro}`);
};

function bonus(primeiro, segundo, terceiro) {
    if (segundo == "daniel") {
        let colocado = primeiro;
        primeiro = segundo;
        segundo = colocado;
    } else if (terceiro == "daniel") {
        let colocado = segundo;
        segundo = terceiro;
        terceiro = colocado;
    }
    return [primeiro, segundo, terceiro];
}

posicao(participantes[0], participantes[1], participantes[2]);