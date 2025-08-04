describe('Transferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazendoLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        cy.realizarTransferencia('Priscila dos Anjos', 'Julio de Lima', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

        it('Deve apresentar erro quando tentar transferir mais que 5 mil sem o token', () => {
        // Act
        cy.realizarTransferencia('Priscila dos Anjos', 'Julio de Lima', '6000')

        // Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})