let display = document.getElementById("display");

function addValor(valor) {
    display.value += valor;
}

function limpar() {
    display.value = '';
    document.getElementById('resultado').innerHTML = '';
}

function calcular() {
    calcularHidrocarboneto();
}

function calcularHidrocarboneto() {
    const input = display.value.trim().toUpperCase();
    const resultado = document.getElementById('resultado');


    const match = input.match(/^C(\d*)H(\d+)$/);

    if (!match) {
        resultado.innerHTML = '<p style="color:red">Fórmula inválida. Use o formato CxHy (ex: C2H6)</p>';
        return;
    }

    const carbonos = parseInt(match[1]) || 1;
    const hidrogenios = parseInt(match[2]);

    let tipo = '';
    let formulaGeral = '';

    if (hidrogenios === 2 * carbonos + 2) {
        tipo = 'Alcano (cadeia saturada)';
        formulaGeral = 'CnH2n+2';
    } else if (hidrogenios === 2 * carbonos) {
        tipo = 'Alceno (1 dupla ligação)';
        formulaGeral = 'CnH2n';
    } else if (hidrogenios === 2 * carbonos - 2) {
        tipo = 'Alcino (1 tripla ligação)';
        formulaGeral = 'CnH2n-2';
    } else {
        tipo = 'composto fora da série normal de hidrocarbonetos';
        formulaGeral = 'desconhecida';
    }

    resultado.innerHTML = `
        <p><strong>Fórmula Molecular:</strong> ${input}</p>
        <p><strong>Carbonos:</strong> ${carbonos}</p>
        <p><strong>Hidrogênios:</strong> ${hidrogenios}</p>
        <p><strong>Tipo:</strong> ${tipo}</p>
        <p><strong>Fórmula Geral:</strong> ${formulaGeral}</p>
    `;
}
