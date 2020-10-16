# Notas de desenvolvimento da aplicação
Este repositório trata-se de um teste técnico feito para a empresa Ioasys, onde foi desenvolvido uma aplicação em JavaScript com [React JS](https://reactjs.org/) que, atravez de uma autênticação do tipo oAuth, é capaz de listar, detalhar e filtrar as empresas recebidas pela api.

## Pontos notáveis
Fiz algumas adaptações ao layout para manter a paleta de cores da logomarca, ficando mais agradável aos olhos do usuário. 

No arquivo de rotas, enfrentei um problema que não consegui executar a solução ideal. Ao redirecionar para os detalhes da empresa, tentei passar o Id da empresa como parâmetro da seguinte forma:
```
<Private path="/enterprises/:id" exact component={EnterpriseInfo} />
``` 
Porém, meu componente não renderizava ao entrar na URL especificada, me forçando a especificar o path da maneira que está hoje.

## Pontos de Melhoria do desenvolvimento
Testes unitários poderiam ser inclusos para o funcionamento da aplicação em um ambiente de produção futuramente.
Também optei por não utilizar nenhuma framework para estilização dos componentes por serem poucas telas utilizadas na navegação do app.

## Configuração de projeto
### Pré-requisitos
* [NodeJs](https://nodejs.org/en/)
* Gerenciador de pacote ([npm](https://www.npmjs.com/get-npm) ou [yarn](https://classic.yarnpkg.com/pt-BR/docs/install))

### Instalando pacotes
```
npm install
```
ou
```
yarn install
```

### Executando a aplicação
```
npm start
```
ou
```
yarn start
```