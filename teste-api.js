const axios = require('axios')

const url = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='12-02-2019'&$top=100&$format=json&$select=cotacaoVenda'

axios
.get(url)
.then( res => console.log(res.data.value[0].cotacaoVenda))