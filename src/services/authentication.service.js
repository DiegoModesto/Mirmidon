import { BehaviorSubject } from 'rxjs'
import { handleResponse } from '../helpers'
import { apiUrl } from './config'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

async function login(userName, password, keepLogged = false) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Login: userName, Password: password, KeepLogged: keepLogged })
    }
    
    return fetch(`${apiUrl}/user/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            debugger
            localStorage.setItem('currentUser', JSON.stringify(user))
            currentUserSubject.next(user)

            return user
        })
}

function logout() {
    localStorage.removeItem('currentUser')
    currentUserSubject.next(null)
}

export const authenticationService = {
    login,
    logout,
    currentUser : currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
}