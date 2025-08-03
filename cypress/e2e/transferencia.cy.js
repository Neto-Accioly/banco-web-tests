describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)            
        })
        cy.contains('button', 'Entrar').click()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Priscila dos Anjos').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Julio de Lima').click()

        cy.get('#valor').click().type('11')

        cy.contains('button','Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})