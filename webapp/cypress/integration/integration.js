const url = Cypress.env('APP_IP')

describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
  })
  
  describe('Client', () => {
    it('visits the app', () => {
      cy.visit(`http://${url}`)
    })

    it('Test button', () => {
        cy.get('#btn').click()
    })
  })

  describe('XHR request to API endpoint /', () => {
    it('cy.request() - make an XHR request', () => {
        cy.request(`http://${url}:4000/api/`)
          .should((response) => {
            expect(response.status).to.eq(200)

        })
    })
  })

  describe('XHR request to API endpoint /message', () => {
    it('cy.request() - make an XHR request', () => {
        cy.request(`http://${url}:4000/api/message`)
          .should((response) => {
            expect(response.status).to.eq(200)
        })
    })
  })
