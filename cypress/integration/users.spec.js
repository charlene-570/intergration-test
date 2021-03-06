describe('User management', () => {
    it('log in with valid credentials', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.visit('/')
        cy.get('input[name="username"]').clear()
            .type(username)
        cy.get('input[name="password"]').type(password, { log: false })
        cy.get('#kc-login').click()     
    })

    it('Admin can search for a user', function () {
        cy.get('.ant-menu-submenu-title .anticon')
            .click()
        cy.get('.ant-menu-inline .ant-menu-submenu-title')
            .eq(1)
            .click()
        cy.get('.ant-menu-item a[href="/admin/users/list"]')
            .click()
        cy.get('.search-input-wrapper .ant-input-affix-wrapper-lg')
            .type('bobi')
        cy.get('.ant-input-suffix .ant-input-clear-icon')
            .click()
    })

    it('Admin can add a user', function () {
        cy.get('.ant-space-item .create-user')
            .click()
        cy.get('input#firstName')
            .type('QA')
        cy.get('input#lastName')
            .type('tester')
        cy.get('input#email')
            .type('tester@gmail.com')
        cy.get('input#username')
            .type('tester')
        cy.get('.ant-select-selector')
            .eq(0)
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="Update Password"]')
            .should('have.text', 'Update Password')
            cy.get('.ant-select-selector')
            .eq(1)
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="Testers"]')
            .should('have.text', 'Testers')
            .click()
        cy.get('.ant-form-item-control-input button[type="submit"]')
            .click()
    })

    it('User can move to the next page of the users list', function () {
        cy.get('.ant-pagination .ant-pagination-next')
            .click()
    })

    it('User can view more than 5 users per page', function () {
        cy.get('.ant-pagination-options .ant-select-selector')
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="10 / page"]')
            .click()
        cy.get('.ant-pagination-options .ant-select-selector')
            .click()
        cy.get('.rc-virtual-list-holder-inner div[title="20 / page"]')
            .click()
    })
})