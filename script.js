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
const transactions =[{
        id= 1,
        description= 'Luz',
        amount= -30000,
        date= 01/02/2022
    },
    {    
        id= 2,
        description= 'website',
        amount= 500000,
        date= 01/02/2022},
    {    
        id= 3,
        description= 'Água',
        amount= -20000,
        date= 01/02/2022},
    {    
        id= 4,
        description='Aluguel',
        amount= -130000,
        date= 01/02/2022}
    ]
const Transaction = {
    incomes (){

    },
    expenses (){

    },
    total (){

    }
}
const DOM = {
            addTransaction (transaction, index){
                const tr = document.createElement('tr')
                tr.innerHTML = DOM.innerHTMLTransaction()

        },
            InnerHTMLTransaction (transaction){
        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense"> -R$300,00</td>
            <td class="date">01/02/2022</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transação">
            </td>
        </tr>
        `
        return html
    }
}
DOM.addTransaction(transactions[0])