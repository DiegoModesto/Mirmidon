import { authenticationService } from "../services"

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)

        if(!response.ok){
            if([401,403].indexOf(response.status) !== -1){
                authenticationService.logout()
                window.location.reload(true)
            }
    
            let errors = data.errors || []
            return Promise.reject({ errors })
        }

        return data
    })
}