describe("Sistema de Votação - Bateria Completa", function() {
    let sistema;

    beforeEach(function() {
        sistema = new SistemaVotacao();
    });

    // GRUPO 1: TESTES DE BORDA (Fronteiras de Idade)
    describe("1. Análise de Valor Limite (Bordas)", function() {
        it("15 anos: Não deve votar (Limite Superior da Proibição)", function() {
            expect(sistema.verificarStatus(15)).toBe('Não pode votar');
        });
        it("16 anos: Voto Facultativo (Limite Inferior da Permissão)", function() {
            expect(sistema.verificarStatus(16)).toBe('Voto Facultativo');
        });
        it("17 anos: Voto Facultativo (Pré-Obrigatoriedade)", function() {
            expect(sistema.verificarStatus(17)).toBe('Voto Facultativo');
        });
        it("18 anos: Voto Obrigatório (Início da Maioridade Eleitoral)", function() {
            expect(sistema.verificarStatus(18)).toBe('Voto Obrigatório');
        });
        it("70 anos: Voto Obrigatório (Limite Superior da Obrigatoriedade)", function() {
            expect(sistema.verificarStatus(70)).toBe('Voto Obrigatório');
        });
        it("71 anos: Voto Facultativo (Retorno ao Facultativo)", function() {
            expect(sistema.verificarStatus(71)).toBe('Voto Facultativo');
        });
    });

    // GRUPO 2: TESTES DE SUCESSO PADRÃO (Novos!)
    describe("2. Cenários de Sucesso (Caminho Feliz)", function() {
        it("40 anos: Voto Obrigatório (Cenário Comum - Meio da Faixa)", function() {
            expect(sistema.verificarStatus(40)).toBe('Voto Obrigatório');
        });
        it("130 anos: Voto Facultativo (Limite Máximo de Vida Permitido)", function() {
            // Testa se o sistema aceita o limite exato antes de invalidar
            expect(sistema.verificarStatus(130)).toBe('Voto Facultativo');
        });
    });

    // GRUPO 3: TESTES DE FALHA (Tratamento de Erro)
    describe("3. Tratamento de Erros e Exceções", function() {
        it("Deve rejeitar idades negativas (-5)", function() {
            expect(sistema.verificarStatus(-5)).toBe('Idade Inválida');
        });
        it("Deve rejeitar idades acima do limite humano (150)", function() {
            expect(sistema.verificarStatus(150)).toBe('Idade Inválida');
        });
    });
});
