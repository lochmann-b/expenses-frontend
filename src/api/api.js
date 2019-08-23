
const URL_ENDPOINT = 'https://bl-exp-backend.herokuapp.com/api'

export async function getToken(user, password){
    console.log(`login with ${user}, ${password}`)
    const res = await fetch(`${URL_ENDPOINT}/authenticate`, { headers: { 'Authorization': `Basic ${btoa(`${user}:${password}`)}` } })
    if(res.status !== 200) {
        throw Error(`${res.status} Could not fetch token`)
    }
    const token = res.text()
    return token
}

export async function getAccounts(token){
    const res = await fetch(`${URL_ENDPOINT}/accounts`, {headers: getHeader(token)})  
    if(res.status !== 200) {
        throw Error(`${res.status} Could not fetch accounts`)
    }
    const accounts = await res.json()
    return accounts;    
}

function getHeader(token){
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    }
}