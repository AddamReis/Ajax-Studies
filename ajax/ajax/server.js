const bodyParser = require('body-parser')
const express = require('express')
const app = express()

/*aplicado para qualquer requisição do servidor*/
app.use(express.static('.')) //provém os arquivos estáticos da aplicação a partir da raiz atual na pasta
app.use(bodyParser.urlencoded({ extended: true })) //se receber um submit de fomulário transforma em objeto
app.use(bodyParser.json()) //se receber json transforma em objeto

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.listen(8081, () => console.log('Executando...'))