import axios from '../../src/index'

axios({
    method: 'get',
    url: '/getA',
    params: {
        a: 1,
        b: 2
    }
})