import axios from '../../src/index'

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//      foo: ['bar', 'baz']
//     }
// })
//  axios({
//      method: 'get',
//      url:'/base/get',
//      params: {
//          foo: {
//              bar: 'baz'
//          }
//      }
//  })

//  const date = new Date()
//  axios({
//      method: 'get',
//      url: '/base/get',
//      params: {
//          date
//      }
//  })

//  axios({
//      method: 'get',
//      url: '/base/get',
//      params: {
//          foo: 'bar',
//          baz: null
//      }
//  })

//  axios({
//      method:'get',
//      url: '/base/get',
//      params:{
//          foo: '@:$'
//      }
//  })

//  axios({
//      method: 'get',
//      url:'/base/get#hash',
//      params: {
//          foo: 'bar'
//      }
//  })

// tslint:disable-next-line: no-floating-promises
axios({
    method:'post',
    url:'/base/post',
    data:{
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
})

// tslint:disable-next-line: no-floating-promises
axios({
    method: 'post',
    url:'/base/post',
    headers:{
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    },
    data: {
        a: 1,
        b: 2
    }
}).then((res)=> {
    console.log(res)
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

// tslint:disable-next-line: no-floating-promises
axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
}).then((res)=> {
    console.log(res)
})

const arr = new Int32Array([21,32])

// tslint:disable-next-line: no-floating-promises
axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
}).then((res)=> {
    console.log(res)
})