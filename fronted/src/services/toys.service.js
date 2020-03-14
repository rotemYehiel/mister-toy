import { utilService } from './util.service.js'
import axios from 'axios';

// const baseUrl = '//localhost:3000/toys'

const baseUrl = (process.env.NODE_ENV !== 'development') ?
    '/api/toy' :
    '//localhost:3000/api/toys';

export const toysService = {
    query,
    getById,
    remove,
    save,

}


function query(filterBy) {

    // var queryParams = new URLSearchParams()
    // if (filterBy) {
    //     if (filterBy.name) queryParams.set('q', filterBy.name)
    //     if (filterBy.inStock) queryParams.set('inStock', filterBy.inStock)
    //     if (filterBy.type) queryParams.set('type', filterBy.type)
    // }
    // return axios.get(`${baseUrl}?${queryParams}`, { params: { filterBy } })
    return axios.get(`${baseUrl}`, { params: { filterBy } })
        .then(res => {
            console.log('the res after filter:', res)
            return res.data
        })



    // return axios.get(baseUrl)
    //     .then(res => res.data)

}

function save(toy) {
    console.log(toy)
    var prm;
    if (toy._id) {
        prm = axios.put(`${baseUrl}/${toy._id}`, toy)
    } else {
        prm = axios.post(`${baseUrl}`, {
            _id: utilService.makeId,
            name: toy.name,
            price: toy.price,
            type: toy.type,
            createdAt: toy.createdAt,
            inStock: toy.inStock
        })
    }
    return prm.then(res => res.data)
}

function getById(_id) {
    return axios.get(`${baseUrl}/${_id}`)
        .then(res => res.data)
}

function remove(id) {
    return axios.delete(`${baseUrl}/${id}`)
}