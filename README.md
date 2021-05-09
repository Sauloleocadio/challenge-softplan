<h3 align="center">
  Desafio SOFTPLAN.
</h3>

<p>Esse desafio foi feito a partir dos requisitos pedidos pela a empresa baseado na api <a href="https://github.com/lennertVanSever/graphcountries">
  https://github.com/lennertVanSever/graphcountries</a></p>

<blockquote align="center">“Aprender é a única coisa de que a mente nunca se cansa, nunca tem medo e nunca se arrepende”!</blockquote>

<p align="center">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361" />

</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://challengesoftplan.netlify.app">Link do deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demonstração">Demonstração</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#pre-requisitos">Pré-requisito</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🏆 Sobre o desafio

Seguem as instruções para a próxima fase do nosso processo seletivo:
Crie um projeto utilizando React e a API Graph Countries
(https://github.com/lennertVanSever/graphcountries) seguindo as especificações abaixo.

Funcionalidades esperadas:

- Crie uma lista de cards para exibir os países mostrando a bandeira, o nome e a capital dele;
- Possibilite o usuário buscar países;
- Na lista, o usuário pode ir para a página de detalhes do país e ver uma lista mais completa de
  informações (bandeira, nome, capital, área, população e top-level domain);
- Crie um formulário para editar os dados de um país (salvando apenas no client-side);

Restrições técnicas:

- Utilize o create-react-app como base;
- Utilize redux para gerenciar o estado;
- Utilize react-router para trocar de página;
- Utilize @testing-library/react para testes;

Diferenciais:

- Crie uma pipeline no GitLab; (Exemplo: build =&gt; test =&gt; deploy);
- Entregar o projeto publicado e funcionando em alguma URL;
- Garanta 100% de cobertura no projeto com testes unitários;
- Substituir o redux pelo Local state management do Apollo Client;

Desafio Super Front:

- Na tela de detalhes do país, adicionar um mapa mostrando a distância entre o país e os 5 países
  mais próximos;

## Informações importantes

1. Segue o link de acesso ao deploy [DESAFIO SOFTPLAN](https://challengesoftplan.netlify.app).

## ✅ Demonstração

<img src="https://github.com/Sauloleocadio/challenge-softplan/blob/master/src/assets/systemone.png" /> 
<img src="https://github.com/Sauloleocadio/challenge-softplan/blob/master/src/assets/systemtwo.png" />

## ⚙ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e/ou [Yarn](https://yarnpkg.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

- Possuir contas na [Netlify](https://app.netlify.com/) para deploys de front

## 📗 Rodando a Aplicação (web)

```bash
# Clone este repositório
$ git clone https://github.com/Sauloleocadio/challenge-softplan.git

# Navegue até a pasta
$ cd challenge-softplan

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start
```

## 📎 Features

- [x] Listagem de Paises
- [x] Pesquisa na lista
- [x] Detalhamento completo do pais
- [x] Mapa com distância média entre os países

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- React-Redux
- Redux
- Javascript

## 📕 Bibliotecas

Esse projeto foi utilizou das seguintes lib:

- leaflet
- react-router-dom
- react-leaflet
- axios
- react-loading-skeleton

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by SAULO LEOCÁDIO :wave: , qualquer dúvida [SÓ CHAMAR](https://linktr.ee/sauloleocadio)
