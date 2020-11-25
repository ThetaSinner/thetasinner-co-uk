describe('Home apge', () => {
    it('Contains sections', () => {
        cy.visit('http://localhost:3000')

        cy.contains("ThetaSinner Home")
        cy.contains("Projects")
    })

    it('Sorts on active', () => {
        cy.visit('http://localhost:3000')

        cy.contains("Active").click()

        cy.get('.card').first().contains('active')
    })

    it('Sorts on archived', () => {
        cy.visit('http://localhost:3000')

        cy.contains("Archived").click()

        cy.get('.card').first().contains('archived')
    })

    it('Sorts on language', () => {
        cy.visit('http://localhost:3000')

        cy.contains("Language").click()

        // Relies on the alphabetically first language used on a project being cpp!
        cy.get('.card').first().contains('cpp')
    })
})


