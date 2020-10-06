const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/*aplicado para qualquer requisição do servidor*/
app.use(express.static('.')) //provém os arquivos estáticos da aplicação a partir da raiz atual na pasta
app.use(bodyParser.urlencoded({ extended: true })) //se receber um submit de fomulário transforma em objeto
app.use(bodyParser.json()) //se receber json transforma em objeto

app.listen(8081, () => console.log('Executando...'))