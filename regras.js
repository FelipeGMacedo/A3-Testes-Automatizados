// --- LÓGICA DO SISTEMA (A CLASSE) ---
class SistemaVotacao {
    verificarStatus(idade) {
        if (idade < 0 || idade > 130) return 'Idade Inválida';
        if (idade < 16) return 'Não pode votar';
        if (idade >= 18 && idade <= 70) return 'Voto Obrigatório';
        return 'Voto Facultativo';
    }
}

// --- INTERAÇÃO COM A PÁGINA ---
function executarVerificacao() {
    // 1. Pega o valor do input
    const idade = parseInt(document.getElementById('inputIdade').value);
    
    // 2. Instancia a classe
    const sistema = new SistemaVotacao();
    
    // 3. Executa a lógica
    const resultado = sistema.verificarStatus(idade);
    
    // 4. Mostra na tela
    document.getElementById('resultadoTexto').innerText = "Resultado: " + resultado;
}
