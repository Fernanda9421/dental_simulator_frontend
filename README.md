<br />
<div align="center">
  <img src="src/assets/logo.png" alt="Logo" width="120" height="120">

  <h3 align="center">Dental Simulator</h3>
  <p align="center">
    Dental Simulator é uma aplicação em React, utilizada para gerar relatórios de um consultório odontológico. Com essa aplicação, é possível cadastrar novas consultas, cadastrar novos tratamentos, filtrar parcelas por data e gerar o valor total à receber em determinado período de tempo.
  </p>
  <br />
  <br />
    <p><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router"><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS 3"></p>
</div>
<br />
<br />

## Conteúdos:

- Projeto
  - [Sobre](#sobre)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente e comunicação com a API](#variáveis-de-ambiente-e-comunicação-com-a-api)
  - [Instalação](#instalação)
  - [Inicialize a Aplicação](#inicialize-a-aplicação)
  - [Deploy da Aplicação](#deploy-da-aplicação)
  - [Funcionalidades](#funcionalidades)
- Processos e Aprendizados
  - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Principais aprendizados](#principais-aprendizados)
- [Autor](#autor)

<br />
<br />

# Projeto:

## Sobre

### Problema inicial:
  - Essa aplicação foi criada com o intuito de resolver o problema de uma pessoa fictícia.
  Érica é dentista, e atende seus pacientes apenas com atendimento particular.
  Atualmente, ela anota as consultas e as parcelas (caso o paciente deseje parcelar o pagamento) em um caderno, informando a data e o valor que cada paciente deve pagar.
  Para saber quanto vai receber em um determinado período de tempo, Érica precisa somar os valores na calculadora.

### Solução proposta:
  - Com essa aplicação, Érica será capaz de:
    - Visualizar todas as consultas cadastradas, com o nome do cliente, a data de atendimento, o tratamento realizado e seu valor total;
    - Cadastrar uma nova consulta, informando o nome do cliente, o tratamento realizado, o número de parcelas, a data de atendimento e a data de vencimento da primeira parcela;
    - Visualizar as parcelas referente à cada cliente, com o nome, o valor da parcela e a data de vencimento de cada uma delas;
    - Cadastrar um novo atendimento, informando o nome do tratamento e seu valor total;
    - Gerar um relatório de quanto vai receber em um determinado período de tempo, informando a data inicial e a data final.

## Pré-requisitos:
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [VSCode](https://code.visualstudio.com/)

## Variáveis de Ambiente e comunicação com a API
Essa aplicação consome e envia dados para uma API. Portanto, para rodar a aplicação localmente, você precisará escolher entre dois caminhos:

<details>
  <summary><strong>Clonar o repositório Dental Simulator API</strong></summary><br />

  - Acesse [esse repositório](https://github.com/Fernanda9421/dental_simulator_backend) e siga o passo a passo descrito no README;
  - Configure as variáveis de ambiente:
    - Na raiz do projeto, crie uma arquivo nomeado como `.env`
    - Dentro dele, insira as seguintes informações:
    ```
    REACT_APP_BACKEND_BASE_URL=http://localhost
    REACT_APP_BACKEND_PORT=3001
    ```
  - Siga para a seção [Instalação](#instalação)

  **Observação: as duas aplicações devem estar rodando para que tudo funcione corretamente.**
</details>

<details>
  <summary><strong>Consumir a API hospedada na nuvem</strong></summary><br />

  - Configure as variáveis de ambiente:
    - Na raiz do projeto, crie uma arquivo nomeado como `.env`
    - Dentro dele, insira as seguintes informações:
    ```
    REACT_APP_BACKEND_BASE_URL=https://dental-simulator-backend.herokuapp.com
    REACT_APP_BACKEND_PORT=443
    ```
  - Siga para a seção [Instalação](#instalação)
</details>

## Instalação
- Clone o repositório:
  ```bash
  git clone git@github.com:Fernanda9421/dental_simulator_frontend.git
  ```
- Acesse o repositório:
  ```bash
  cd dental_simulator_frontend
  ```
- Instale as dependências:
  ```bash
  npm install
  ```

## Inicialize a Aplicação
  Para rodar a aplicação, digite o comando no terminal:
  ```bash
  npm start
  ```

## Deploy da Aplicação
O *deploy* da aplicação foi feito utilizando a plataforma **Heroku**.

- Aplicação disponível em:
[https://dental-simulator-frontend.herokuapp.com/](https://dental-simulator-frontend.herokuapp.com/)

## Funcionalidades:

### Relatórios:
- Tabela contendo todas as pessoas cadastradas, e suas respectivas faturas do tratamento realizado.
É possível visualizar o número de faturas cadastradas, e o valor à receber com a soma de todas elas.
- Campos de `Data inicial` e `Data final`, onde a pessoa usuária seleciona um período de tempo, e ao gerar o relatório, apenas as faturas com vencimento entre as data escolhidas são retornadas, juntamente com o número de faturas e valor total à receber atualizados.

### Consultas:
- Tabela contendo todas as consultas realizadas até o momento, contendo o nome, a data do atendimento, o tratamento realizado e o valor total do tratamento de cada cliente.
- Botão para cadastrar uma nova consulta.

### Cadastrar nova consulta:
- Formulário contendo campos para preenchimento das informações necessárias para cadastrar um novo cliente no banco de dados;
- Todos os campos são obrigatórios e possuem validações;
- Caso os campos não estejam preenchidos corretamente, é exibido uma mensagem de erro, informando o que é necessário para validar a informação;
- Caso o valor escolhido para o campo **Tratamento** seja `Outro`, uma extensão do formulário se abre, para a pessoa usuária seja capaz de cadastrar um novo tratamento no banco de dados, com seu respectivo valor. Se o tratamento já estiver cadastrado, uma mensagem de erro é gerada.
- Caso o cliente ainda não esteja cadastrado no banco de dados, ao preencher todos as informções corretamente, o mesmo é cadastrado.
- O valor total do tratamento pode ser dividido em até 10 parcelas, e cada parcela será cadastrada com seu respectivo valor e exibida na tela de `Relatórios`.
- A pessoa usuária seleciona a data de vencimento da primeira parcela, e caso o tratamento seja parcelado, a data de vencimentos das outras parcelas são geradas automaticamente, sempre acrescida de um mês.
- O botão de cadastro só é habilitado quando todos os campos são preenchidos corretamente.

---

# Processos e Aprendizados

## Tecnologias utilizadas
- [React.js](https://reactjs.org/docs/getting-started.html)

## Principais aprendizados
Nesse projeto, tive a oportunidade de praticar as seguintes habilidades:
- Fazer requisições - consumir e enviar dados à uma API, desenvolvida para essa aplicação;
- Utilizar os ciclos de vida de um componente React;
- Hooks - poder utilizar componentes funcionais para guardar estado e gerenciar o ciclo de vida do componente;
- Criar rotas para navegar entre as páginas da aplicação.

# Autor:
- [Linkedin](https://www.linkedin.com/in/fernandaacarvalho/)
- [Github](https://github.com/Fernanda9421)