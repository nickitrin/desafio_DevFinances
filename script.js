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
    incomes (){

    },
    expenses (){

    },
    total (){

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
    }
}
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})