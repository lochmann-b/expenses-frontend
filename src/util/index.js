export function formatCents(amountIncents){    
    return (amountIncents / 100.00).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function sortMovements(a, b){
    let order = new Date(b.date) - new Date(a.date)
    if (order === 0){        
        order = a.description < b.description ? 1 : a.description > b.description ? -1 : 0
    }
    if(order === 0){
        order = b.amountInCents - a.amountInCents
    }
    return order
}

export function today() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate()}`
}

export function calculateAccountBalance(account){
    return formatCents(account.movements.filter(m => new Date(m.date) >= new Date(account.startDate)).reduce((accumulator, m) => -m.amountInCents + accumulator, account.startingBalanceInCents))
}