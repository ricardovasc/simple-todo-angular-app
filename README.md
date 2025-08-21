# Simple To-Do Angular App

Este é um projeto simples de uma aplicação de lista de tarefas desenvolvida com o framework Angular 15.

## Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas em sua máquina:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (que inclui o npm). É recomendado usar um gerenciador de versões como o [nvm](https://github.com/nvm-sh/nvm).
- [Angular CLI](https://github.com/angular/angular-cli) (instalado como dependência do projeto).

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ricardovasc/simple-todo-angular-app.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd simple-todo-angular-app
    ```

3.  **Instale as dependências:**
    Este comando irá baixar todas as bibliotecas necessárias para o projeto.
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Outros Scripts Úteis

-   **Para fazer o build de produção:**
    ```bash
    npm run build
    ```
    Os arquivos do build serão armazenados no diretório `dist/`.

-   **Para executar os testes unitários:**
    ```bash
    npm test
    ```
    Isso executará os testes via [Karma](https://karma-runner.github.io).
