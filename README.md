# ![logo](https://user-images.githubusercontent.com/45273884/197882822-6aea8a30-52dd-40da-87aa-862b2c72a088.png) Github Blog

![Code_dpUp9VvUwH](https://user-images.githubusercontent.com/45273884/197885937-2f54c606-11db-40ec-be0f-04d8caa7c350.gif)

## Descrição

Este é Github Blog, projeto feito como desafio do módulo 3 do curso de React da Rocketseat, Ignite, o objetivo do projeto era criar uma aplicação que conectasse com o github e buscasse informações do usuário, informações de issues de algum repositório(no caso utilizei a sessão de issues do próprio repositório) e disponibilizasse essas informações no app. Foi um projeto simples mas me permitiu entrar em contato com markdown, tecnologia que até então não conhecia, além disso utilizei várias táticas para melhorar o desempenho e performance da aplicação com uso de callbacks e seletores para os contextos, por fim também fiz o uso de temas dinâmicos no styled components para trocar a cor de fundo em algumas rotas do app.

## Como iniciar o projeto

Instale as dependências do projeto com:
```
npm i
```

Para a env utilize o arquivo .env.example renomeando para .env e informe as variáveis:
```
VITE_OCTOKIT_AUTH= //api key do github
VITE_GITHUB_USERNAME= //usuário do github
VITE_GITHUB_REPO= //nome do repositório que verá as issues
```

Para iniciar a aplicação use:
```
npm run dev
```

Para iniciar o json-server use:
```
npm run dev:server
```

Para buildar a aplicação use:
```
npm run build
```

## Tecnologias usadas

 - O projeto foi escrito usando **Typescript**;
 - React com **Vite**;
 - Contexto feito com a api do **useContext**;
 - Melhorado o contexto e seu impacto na performance da aplicação com a biblioteca **use-context-selector** e **useCallback**;
 - Foi usado **styled-components** para css in js;
 - Ícones com **fontawesome**;
 - **Octokit** para consumo da api do github;
 - Formulário usando **react-hook-forms** com validação da biblioteca **zod**;
 - Rotas com **react-router-dom**;
 - Formatação de datas com **date-fns**;
 - Markdown com **react-markdown** e estilização de code com **rehype-highlight**.
 

## Possíveis problemas

  Não foi detectado nenhum até o momento.

## Possíveis melhorias

 - Tornar a aplicação mais genérica, para receber um username do github e um repositório, e assim conseguir pesquisar issues respectivos de acordo com o que o usuário quer.(Existe uma branch com o início dessa ideia mas incompleta no momento)

## Autor

Marcelo "Masa" Alves
- <img src="https://user-images.githubusercontent.com/45273884/192056758-d7c1995b-4459-4acf-bb20-c4e19ee5daf3.svg" alt="twitter-logo" style="width: 20px; height: 20px;"> [@masamarux](https://twitter.com/masamarux)
- <img src="https://user-images.githubusercontent.com/45273884/192056770-fa5b48e0-a216-4f55-86fc-83cc6dd3590a.svg" alt="linkedin-logo" style="width: 20px; height: 20px;"> [Marcelo Alves](https://www.linkedin.com/in/marceloalves-/)


## Histórico de versões
* 1.0 - (25/10/2022)
    * Lançamento inicial
