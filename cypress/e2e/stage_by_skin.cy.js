describe('Покупка аватара тренера', function () {

    it('Авторизация', function () {
        cy.visit('https://pokemonbattle.ru/login');

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.wait(2000);

        cy.get('.auth__button').click({ force: true });
        cy.wait(2000);
        cy.get('.header__container > .header__id').should('be.visible');
        cy.get('.header__container > .header__id').click({ force: true });
        cy.wait(2000);
        cy.get('[href="/shop"]').should('be.visible');
        cy.get('[href="/shop"]').click({ force: true });
        cy.get('.available > button').first().click({ force: true });   
        cy.get('.credit').type('4111111111111111');                     
        cy.get('.k_input_ccv').type('125');                             
        cy.get('.k_input_date').type('1025');                           
        cy.get('.k_input_name').type('USER_LOGIN');                           
        cy.get('.pay-btn').click();                                     
        cy.get('#cardnumber').type('56456');                            
        cy.get('.payment__submit-button').click();                      
        cy.contains('Покупка прошла успешно').should('be.visible');
    });
 });