const Modal= {
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')

    }
}
const transactions = [{
        id: 1 ,
        description: 'Luz',
        amount: -30000,
        date: '01/02/2022',
    },
    {    
        id: 2 ,
        description: 'Website',
        amount: 500000,
        date: '01/02/2022'},
    {    
        id: 3 ,
        description: 'Água',
        amount: -20000,
        date: '01/02/2022'},
    {    
        id: 4 ,
        description:'Aluguel',
        amount: -130000,
        date: '01/02/2022'}
    ]
const Transaction = {
    all: transactions,
    add(transaction){
        Transaction.all.push(transaction)
        console.log(Transaction.all)
    },
    incomes(){
        let income = 0;
        Transaction.all.forEach (transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount
            }
        })
        return income;
    },
    expenses (){
        let expense = 0;
        Transaction.all.forEach (transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense;
    },
    total (){
        return Transaction.expenses() + Transaction.incomes()
    }
}

const Utils = {
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : "" 
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}
const DOM = {
        transactionsContainer: document.querySelector('#data-table tbody'),
            
        addTransaction(transaction, index){

            const tr = document.createElement('tr')
            tr.innerHTML = DOM.innerHTMLTransaction(transaction)

            DOM.transactionsContainer.appendChild(tr)


        },

        innerHTMLTransaction(transaction){
            const CSSclass = transaction.amount > 0 ? "income" : "expense"

            const amount = Utils.formatCurrency(transaction.amount)
            const html = `
            <tr>
                <td class="description">${transaction.description}</td>
                <td class=${CSSclass} > ${amount}</td>
                <td class="date">${transaction.date}</td>
                <td>
                    <img src="./assets/minus.svg" alt="remover transação">
                </td>
            </tr>
            `
            return html
    },
        updateBalance(){
            document
                .getElementById('incomeDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.incomes())
            document
                .getElementById('expenseDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.expenses())
            document
                .getElementById('totalDisplay')
                .innerHTML = Utils.formatCurrency(Transaction.total())
}
}
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})
DOM.updateBalance()

Transaction.add({
    id: 39,
    description: 'alo',
    amount: 200,
    date: '21/01/2023'

})