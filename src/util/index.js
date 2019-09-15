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

export function toShortDateStr(date) {
    return `${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
}

export function toGermanShortDateStr(date) {
    const year = date.getFullYear().toString().substr(-2)
    const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`
    const month = `${date.getMonth() < 9 ? '0' : ''}${date.getMonth() + 1}`
    return `${day}.${month} '${year}`
}


export function today() {
    const date = new Date()
    return toShortDateStr(date)
}

export function calculateAccountBalance(account){
    return formatCents(account.movements.filter(m => new Date(m.date) >= new Date(account.startDate)).reduce((accumulator, m) => m.amountInCents + accumulator, account.startingBalanceInCents))
}

export function calculateAccountBalanceTo(account, to){
    return account.movements.filter(m => new Date(m.date) <= to).reduce((accumulator, m) => m.amountInCents + accumulator, account.startingBalanceInCents)
}

export function calculateAccountBalanceFrom(account, from){
    return account.movements.filter(m => new Date(m.date) >= from).reduce((accumulator, m) => m.amountInCents + accumulator, account.startingBalanceInCents)
}

export function sumIncome(account, from, to){
    return account.movements.filter(m => (m.amountInCents > 0 && new Date(m.date) <= to && new Date(m.date) >= from)).reduce((accumulator, m) => m.amountInCents + accumulator, 0)
}

export function sumExpenses(account, from, to){
    return account.movements.filter(m => (m.amountInCents < 0 && new Date(m.date) <= to && new Date(m.date) >= from)).reduce((accumulator, m) => m.amountInCents + accumulator, 0)
}


export function getFirstOfMonth() {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

export function getLastOfMonth() {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}