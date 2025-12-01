# Sistema de Votação - Testes Automatizados com Jasmine

---

## 👥 Integrantes do Projeto

|           Nome        |     RA    |
|-----------------------|-----------|
| Savio Souza Freitas   | 152420555 |
| Felipe Girardi Macedo | 152220418 |

---

## 📋 Definição do Tema

### Ideia do Projeto

Este projeto implementa um **Sistema de Votação** que determina o status eleitoral de uma pessoa com base na sua idade, seguindo as regras do sistema eleitoral brasileiro. O sistema classifica os cidadãos nas seguintes categorias:

- **Não pode votar**: Menores de 16 anos
- **Voto Facultativo**: Entre 16 e 17 anos, ou maiores de 70 anos
- **Voto Obrigatório**: Entre 18 e 70 anos
- **Idade Inválida**: Idades negativas ou acima de 130 anos

### Regras de Negócio

| Faixa Etária | Status |
|--------------|--------|
| Menor que 0 ou maior que 130 | Idade Inválida |
| 0 a 15 anos | Não pode votar |
| 16 a 17 anos | Voto Facultativo |
| 18 a 70 anos | Voto Obrigatório |
| 71 anos ou mais (até 130) | Voto Facultativo |

---

## 🧪 Descrição dos Testes

O projeto utiliza o framework **Jasmine** para testes automatizados e está organizado em 3 grupos de testes, totalizando **10 specs (casos de teste)**.

### Grupo 1: Análise de Valor Limite (Bordas)

Testes focados nos valores de fronteira entre as diferentes categorias de votação.

| # | Teste | Idade | Resultado Esperado | Objetivo |
|---|-------|-------|-------------------|----------|
| 1 | Limite Superior da Proibição | 15 | Não pode votar | Verificar que 15 anos ainda não permite votar |
| 2 | Limite Inferior da Permissão | 16 | Voto Facultativo | Verificar que 16 anos já pode votar (facultativo) |
| 3 | Pré-Obrigatoriedade | 17 | Voto Facultativo | Verificar que 17 anos ainda é facultativo |
| 4 | Início da Maioridade Eleitoral | 18 | Voto Obrigatório | Verificar que 18 anos inicia a obrigatoriedade |
| 5 | Limite Superior da Obrigatoriedade | 70 | Voto Obrigatório | Verificar que 70 anos ainda é obrigatório |
| 6 | Retorno ao Facultativo | 71 | Voto Facultativo | Verificar que 71 anos volta a ser facultativo |

### Grupo 2: Cenários de Sucesso (Caminho Feliz)

Testes que validam cenários comuns e esperados de uso do sistema.

| # | Teste | Idade | Resultado Esperado | Objetivo |
|---|-------|-------|-------------------|----------|
| 7 | Cenário Comum | 40 | Voto Obrigatório | Verificar funcionamento para idade típica de adulto |
| 8 | Limite Máximo de Vida | 130 | Voto Facultativo | Verificar limite máximo aceito pelo sistema |

### Grupo 3: Tratamento de Erros e Exceções

Testes que validam o comportamento do sistema com entradas inválidas.

| # | Teste | Idade | Resultado Esperado | Objetivo |
|---|-------|-------|-------------------|----------|
| 9 | Idade Negativa | -5 | Idade Inválida | Verificar rejeição de valores negativos |
| 10 | Idade Acima do Limite | 150 | Idade Inválida | Verificar rejeição de idades impossíveis |

---

## 🚀 Como Executar os Testes

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexão com internet (para carregar o Jasmine via CDN)

### Passo a Passo

1. **Clone ou baixe o projeto** para sua máquina local

2. **Abra o arquivo de testes**:
   - Navegue até a pasta do projeto
   - Abra o arquivo `testes.html` em um navegador web
   - Você pode fazer isso de duas formas:
     - Duplo clique no arquivo `testes.html`
     - Clique com botão direito → "Abrir com" → Selecione seu navegador

3. **Visualize os resultados**:
   - O Jasmine irá executar automaticamente todos os testes
   - A página exibirá um relatório visual com:
     - ✅ Testes que passaram (verde)
     - ❌ Testes que falharam (vermelho)
     - Tempo de execução
     - Detalhes de cada spec

### Interpretando os Resultados

- **Barra verde**: Todos os testes passaram
- **Barra vermelha**: Um ou mais testes falharam
- Clique em qualquer teste para ver detalhes da execução

---

## 📁 Estrutura do Projeto

```
a3/
├── index.html      # Página principal do projeto
├── testes.html     # Arquivo com os testes automatizados Jasmine
└── README.md       # Este arquivo de documentação
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página de testes
- **JavaScript (ES6)**: Implementação da classe `SistemaVotacao`
- **Jasmine 4.5.0**: Framework de testes BDD (Behavior-Driven Development)

---

## 📊 Metodologias de Teste Aplicadas

### 1. Análise de Valor Limite (Boundary Value Analysis)
Técnica que foca nos valores de fronteira entre partições de equivalência. Identificamos os pontos críticos: 15→16, 17→18, 70→71.

### 2. Particionamento de Equivalência
Dividimos os dados de entrada em classes onde todos os valores devem produzir o mesmo resultado:
- Classe 1: Idades inválidas (< 0 ou > 130)
- Classe 2: Não votantes (0-15)
- Classe 3: Voto facultativo jovem (16-17)
- Classe 4: Voto obrigatório (18-70)
- Classe 5: Voto facultativo idoso (71-130)

### 3. Testes de Caminho Feliz (Happy Path)
Validação de cenários comuns e esperados de uso.

### 4. Testes de Exceção/Erro
Verificação do comportamento do sistema com entradas inválidas ou inesperadas.

---

## ✅ Conclusão

Este projeto demonstra a importância dos **testes automatizados** no desenvolvimento de software, aplicando técnicas fundamentais de teste de software como **Análise de Valor Limite** e **Particionamento de Equivalência**.

### Principais Aprendizados

1. **Qualidade do Software**: Os testes automatizados garantem que o sistema funcione conforme esperado, detectando erros antes que cheguem ao usuário final.

2. **Cobertura de Casos de Borda**: Ao testar os limites entre as diferentes categorias (15→16, 17→18, 70→71), garantimos que as transições entre estados funcionem corretamente.

3. **Tratamento de Erros**: É essencial validar entradas inválidas (idades negativas ou impossíveis) para tornar o sistema robusto e seguro.

4. **Documentação Viva**: Os testes servem como documentação executável do sistema, descrevendo o comportamento esperado de forma clara e verificável.

5. **Manutenibilidade**: Com uma suíte de testes automatizados, mudanças futuras no código podem ser validadas rapidamente, reduzindo o risco de regressões.

### Resultados Obtidos

O sistema implementado passou em todos os **10 casos de teste**, demonstrando:
- Correta classificação de eleitores por idade
- Tratamento adequado de valores de fronteira
- Validação robusta de entradas inválidas

A utilização do framework **Jasmine** permitiu criar testes legíveis e organizados, seguindo a metodologia **BDD (Behavior-Driven Development)**, onde os testes descrevem o comportamento esperado do sistema em linguagem próxima ao natural.

---

## 📚 Referências

- [Jasmine Documentation](https://jasmine.github.io/)
- [Tribunal Superior Eleitoral - TSE](https://www.tse.jus.br/)
- Software Testing Fundamentals - Boundary Value Analysis
- IEEE Standard for Software Test Documentation

---

*Projeto desenvolvido para fins acadêmicos*
