const URL_ENDPOINT = 'https://bl-exp-backend.herokuapp.com/api'

export function getToken(user, password) {
    return doFetch(
        `${URL_ENDPOINT}/authenticate`,
        {
            headers: {
                'Authorization': `Basic ${btoa(`${user}:${password}`)}`
            }
        },
        res => res.text(),
        `Authenticaton failed`
    )
}

export function getAccounts(token) {
    return doFetch(
        `${URL_ENDPOINT}/accounts`,
        {
            headers: getHeader(token)
        },
        res => res.json(),
        `Could not fetch accounts`
    )
}

export function saveAccount(token, account) {
    return doFetch(
        `${URL_ENDPOINT}/accounts`,
        {
            method: 'POST',
            headers: getHeader(token),
            body: JSON.stringify(account)
        },
        res => res.json(),
        `Could not save account ${account.accountName}`
    )
}

export function _updateAccount(token, account) {
    return doFetch(`${URL_ENDPOINT}/accounts/${account.id}`,
        {
            method: 'PUT',
            headers: getHeader(token),
            body: JSON.stringify(account)
        },
        res => res.json(),
        `Could not update account ${account.id}`
    )
}

export function _createMovement(token, movement) {
    return doFetch(`${URL_ENDPOINT}/accounts/${movement.accountId}/movements`,
        {
            method: 'POST',
            headers: getHeader(token),
            body: JSON.stringify(movement)
        },
        res => res.json(),
        `Could not create movement ${movement.description}`
    )
}

export function _updateMovement(token, movement) {
    return doFetch(`${URL_ENDPOINT}/accounts/${movement.accountId}/movements/${movement.id}`,
        {
            method: 'PUT',
            headers: getHeader(token),
            body: JSON.stringify(movement)
        },
        res => res.json(),
        `Could not create movement ${movement.description}`
    )
}

export function _deleteMovement(token, movement) {
    return doFetch(
        `${URL_ENDPOINT}/accounts/${movement.accountId}/movements/${movement.id}`,
        {
            method: 'DELETE',
            headers: getHeader(token)
        },
        res => res.json(), `Could not delete Movement ${movement.id}`
    )
}

export function _deleteAccount(token, accountId) {
    return doFetch(
        `${URL_ENDPOINT}/accounts/${accountId}`,
        {
            method: 'DELETE',
            headers: getHeader(token),
        },
        res => res.text(), `Could not delete account ${accountId}`
    )
}

function doFetch(url, request, resolve, errorMessage) {
    return fetch(url, request)
        .then(res => {
            if (res.ok) {
                return resolve(res)
            }
            throw Error(`Error ${res.status}: ${errorMessage}`)
        })
}


function getHeader(token) {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
    }
}