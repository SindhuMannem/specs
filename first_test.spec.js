// Make sure a trending section exists

describe('Giphy Tests',() =>{
it('contains the correct text',() =>{
cy.visit('http://giphy.com');
cy.get('h3')
.invoke('text')
.should('include','Trending');

// A search field exists

cy.get('*[class^="search-button__SearchIcon"]')

// Make sure search works,can type text into search field and results are displayed after search

cy.get('input')
.type('stickers')
cy.get('*[class^="search-button__SearchIcon"]').click({force: true})
cy.go('back');

//click on a gif in trending section and it goes to a page that shows the clicked on gif

cy.get('div[class="Container-sc-3mbxb4 jfTqrJ"]').first().click() 

 });
});