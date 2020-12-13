//comando para criar um servidor (criando acesso pela porta 5500): 
//require('express')().listen(5500)

//abrir terminal e digitar:
//node src/server.js

//abrir navegador (google chrome) e digitar 127.0.0.1:5500
//se o servidor não estiver rodando, o navegador irá retornar "Can not Get/"
//se limpar o código do servidor, a porta 5500 irá fechar.

//Configurar o Get:
// .get("/", (req, res) => {
//     return res.send("Hi from NLW")

//digitar no terminal, novamente:
//node src/server.js

//Reiniciar servidor:
//toda alteração que fazemos no get é necessário reiniciar o servidor:
//no terminal, ctrl + c irá parar o servidor
//e ctrl+L irá limpar o servidor
//depois precisamos reiniciar o servidor digitando:
//node src/server.js

//iremos instalar um módulo que irá reiniciar o servidor automaticamente toda vez que salvar o arquivo server.js

// digitar no terminal:
//npm install nodemon -D

//Depois de instalado, precisamos configurar o nodemon no arquivo package.json alterando o script para:

// "scripts": {
//     "dev": "nodemon src/server.js"}

//abrir terminal e digitar:
//npm run dev
//agora o nodemon irá monitorar os arquivos com extensão .js, .mjs e .json e fará a atualização automática no servidor

// Configurar a home:
// .get("/", (req, res) => {
//     return res.sendFile(__dirname + "/views/index.html")
//dirname = é o caminho onde está o arquivo do servidor

//depois de confifurar a home será preciso informar o caminho que estão as imagens e o css para o servidor.

//Iremos fazer isso com o comando:
// server.use(express.static("public"))

//depois iremos informar o caminho das outras páginas nos .gets
//precisamos ir no index.html e alterar o caminho dos botões que chamam as mudanças de pagina para que fiquem igual ao que estiver escrito no get

//Finalizado.

    // const express = require('express')
    // const server = express()

    // server.use(express.static("public"))  //arquivos estaticos são as imagens e o css que estão na pasta public

    // .get("/", (req, res) => {
    //     return res.sendFile(__dirname + "/views/index.html")
    // })
    // .get("/study", (req, res) => {
    //     return res.sendFile(__dirname + "/views/study.html")
    // })
    // .get("/give-classes", (req, res) => {
    //     return res.sendFile(__dirname + "/views/give-classes.html")
    // })

    // .listen(5500)

//Mas se fecharmos o Vs Code, o servidor irá parar de funcionar.
// Para isso precisaremos configurar nosso pc como servidor através do Git Bash.


//Configurando servidor no Git Bash:

//abrir o git bash e digitar o caminho do diretório onde está o arquivo do servidor:
//cd /c/users/lord_/desktop/code/nlw

//digitar o comando para iniciar o servidor:
////node src/server.js

//Instalar o Template Engine: nunjucks
//No terminal: npm install nunjuck

//Com o nunjuck poderemos utilizar o const proffys (Array com Objetos)




//Servidor
const express = require('express');
const server = express();

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))  
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Start do servidor(porta aberta)
.listen(5500);