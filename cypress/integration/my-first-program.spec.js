//Class
describe('my first test', () => {
    //Hook -  keep launching web for each test
    beforeEach(() => {
        cy.visit('/todo')

        const screenshot =`${Cypress.config('screenshotsFolder')} / ${Cypress.spec.name}`;  
        cy.log('dsadsadasdasdasdasdsaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.log(screenshot)
    })
    //test 1
    it('check 2 todo items displayed as default', () => {
        cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last().should('have.text', 'Walk the dog')

        cy.log(Cypress.config('screenshotsFolder'))

        cy.log(Cypress.spec.name)
        
    })
    // test 2
    it('Add new item', () => {
        const newItem = 'Adding third item'

        cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
        cy.get('.todo-list li').should('have.length', 2).last().should('have.text', newItem)
    })
    //test 3
    it('Check on radio button of items', () => {
        cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check()
        cy.contains('Pay electric bill').parents('li').should('have.class', 'completed')

    })

    context('do actions with checked item', function () {
        beforeEach(function () {
            cy.contains('Pay electric bill').parent().find('input[type=checkbox]').check()
        })

        it('filter uncompleted item', function () {

            cy.xpath('//a[text()="Active"]').click()

            //Verify
            cy.get('.todo-list li')
                .should('have.length', 1)
                .first()
                .should('have.text', 'Walk the dog')

            cy.contains('Pay electric bill').should('not.exist')

        })
        it('filter for completed item', function () {

            cy.xpath('//a[text()= "Completed"]').click()
            cy.get('.todo-list li')
                .should('have.length', 1)
                .first().should('have.text', 'Pay electric bill')
            cy.contains('Walk the dog')
                .should('not.exist')

        })

    })

    
})