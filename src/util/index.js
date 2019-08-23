export function formatCents(amountIncents){    
    return (amountIncents / 100.00).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}