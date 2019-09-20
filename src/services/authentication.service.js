import { BehaviorSubject } from 'rxjs'
import { handleResponse, authHeader } from '../helpers'
import { apiUrl } from './config'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

async function login(userName, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userName, password: password })
    }
    
    return fetch(`${apiUrl}/api/v1/identity/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user))
            currentUserSubject.next(user)

            return user
        })
}

async function isAuthorized() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authHeader }
    }
    
    /*return fetch(`${apiUrl}/api/v1/identity/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            return true
        })*/
}

function logout() {
    localStorage.removeItem('currentUser')
    currentUserSubject.next(null)
}

export const authenticationService = {
    login,
    logout,
    isAuthorized,
    currentUser : currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
}