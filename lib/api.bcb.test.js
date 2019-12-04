const api = require('./api.bcb')
const axios = require('axios')

jest.mock('axios')

test('getCotacaoAPI', () => {
    const res = {
        data: {
            value: [
               { cotacaoVenda: 3.90 } 
            ]
        }
    }
    axios.get.mockResolvedValue(res)
    api.getCotacaoAPI('url').then( resp => {
        expect(resp).toEqual(res)
        expect(axios.get.mock.calls[0][0]).toBe('url')

    })
})
test('extractCotacao', () => {
    const cotacao = api.extractCotacao({
        data: {
            value: [
               { cotacaoVenda: 3.90 } 
            ]
        }
    })
    expect(cotacao).toBe(3.90)
})

describe('getToday', () => {
    const RealDate = Date

    function mockDate(date){
        global.Date = class extends RealDate {
            constructor(){
                return new RealDate(date)
            }
        }
    }
    afterEach(() => {
        global.Date = RealDate
    })

    test('getToday', () => {
        mockDate('2019-01-01T12:00:00z')
        const today = api.getToday()
        console.log(today)
    })
})