# banco-web-tests

Este projeto tem como objetivo demonstrar como automatizar testes de aplicações web utilizando Cypress e JavaScript, com organização de código.

## Objetivo

Automatizar cenários de testes para a aplicação Banco Web, utilizando boas práticas de organização, customização de comandos e geração de relatórios, servindo como referência didática para alunos de QA.

## Componentes do Projeto

- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes, localizados em `cypress/support/commands/`.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML dos testes executados.
- **Estrutura de pastas**:
  - `cypress/e2e/`: Scripts de testes automatizados.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/support/`: Configurações e comandos customizados.
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js instalado
- Clonar e executar a [API](https://github.com/juliodelimas/banco-api) e a [aplicação Web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/juliodelimas/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

- Execute os testes em modo headless:
  ```bash
  npm test
  ```
- Execute os testes com interface gráfica do Cypress:
  ```bash
  npm run cy:open
  ```
- Para rodar em modo headed (com navegador visível):
  ```bash
  npm run cy:headed
  ```

## Relatórios

Após a execução dos testes, o relatório em HTML estará disponível em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- `cypress/e2e/login.cy.js`: Testes de login.
- `cypress/e2e/transferencia.cy.js`: Testes de transferência bancária.

## Custom Commands

Os comandos customizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos utilitários gerais.
- `cypress/support/commands/login.js`: Comandos relacionados ao login.
- `cypress/support/commands/transferencia.js`: Comandos para operações de transferência.

Para utilizar um comando customizado em seus testes, basta chamar `cy.<nomeDoComando>()`.

## Observações

- Certifique-se de que a API e a aplicação web estejam rodando antes de executar os testes.
- Os dados de acesso e exemplos estão em `cypress/fixtures/`.

---

Mentoria 2.0 - Automação de Testes com Cypress
