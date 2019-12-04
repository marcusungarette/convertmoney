const axios = require('axios')

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolar=====`

axios
.get(url)
.then( res => console.log(res.data.value[0].cotacaoVenda))
.catch( err => console.log(err))