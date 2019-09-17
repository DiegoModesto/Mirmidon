import { apiUrl } from './config'
import { authHeader, handleResponse } from '../helpers'

function getById(id) {
    const rqOptions = { method: 'GET', headers: authHeader() }
    return fetch(`${apiUrl}/users/${id}`, rqOptions).then(handleResponse)
}

export const userService = {
    getById
}