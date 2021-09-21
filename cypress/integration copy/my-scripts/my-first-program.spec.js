//Class
describe('my first test', () => {
    //Hook -  keep launching web for each test
    beforeEach(() =>{
        cy.visit('https://example.cypress.io/todo')
    })
    //test 1
    it('check 2 todo items displayed as default', () => {
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
    // test 2
    it('Add new item', () =>{
        const newItem = 'Adding third item'

        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
        cy.get('.todo-list li').should('have.length', 3).last().should('have.text', newItem)
    })

    it('Check on radio button of items', () => {
        cy.contains('Pay electric bills').parent().find('input[type=checkbox]').check()
        cy.contains('Pay electric bill').parents('li').should('have.class','completed')

    })

    

})