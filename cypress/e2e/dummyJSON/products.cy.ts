// Sample API Test using Cypress and Typescript

describe('example Products test suite', () => {
    it('GET all products header and status', () => {
        // Execute a get request and assert that the content-type in the header is correct.
        cy.request('GET', '/products').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.headers).to.have.property(
                'content-type',
                'application/json; charset=utf-8'
            )
            // This assertion is for the response time
            expect(response.duration).to.not.be.greaterThan(500)
        })
    })

    it('checks the response body for some properties', () => {
        // Execute a get request and assert that the content-type in the header is correct.
        cy.request('GET', '/products').then((response) => {
            expect(response.status).to.equal(200)
            // This assertion is for the response time
            expect(response.duration).to.not.be.greaterThan(500)
            Cypress._.each(response.body.products, (products) => {
                // These make sure the properties are not null
                expect(products.title).to.not.be.null
                expect(products.description).to.not.be.null

                // These make sure the properties exist
                expect(products).to.have.all.keys(
                    'id',
                    'title',
                    'description',
                    'price',
                    'discountPercentage',
                    'rating',
                    'stock',
                    'brand',
                    'category',
                    'thumbnail',
                    'images'
                )
            })
        })
    })

    it('GET single product body validation', () => {
        cy.request('GET', '/products/1').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.duration).to.not.be.greaterThan(500)
            // Validating againt the entire body
            cy.wrap(response.body).should('deep.include', {
                id: 1,
                title: 'iPhone 9',
                description: 'An apple mobile which is nothing like apple',
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                brand: 'Apple',
                category: 'smartphones',
                thumbnail:
                    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
                images: [
                    'https://cdn.dummyjson.com/product-images/1/1.jpg',
                    'https://cdn.dummyjson.com/product-images/1/2.jpg',
                    'https://cdn.dummyjson.com/product-images/1/3.jpg',
                    'https://cdn.dummyjson.com/product-images/1/4.jpg',
                    'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
                ],
            })
        })
    })

    it('GET single product item not found error', () => {
        // This will bypass the failOnStatusCode default behavior of failing tests that return a 4xx or 5xx response code
        cy.request({ url: '/products/1000', failOnStatusCode: false }).then(
            (response) => {
                expect(response.status).to.equal(404)
                expect(response.duration).to.not.be.greaterThan(500)
            }
        )
    })

    it('add a new product', () => {
        // Execute a get request and assert that the content-type in the header is correct.
        cy.request('POST', '/products/add', { title: 'BMW Pencil' }).then(
            (response) => {
                expect(response.status).to.equal(200)
                expect(response.duration).to.not.be.greaterThan(500)
                cy.wrap(response.body).should('deep.include', {
                    id: 101, // This will most likely not be correct in the real world since the id should auto increment
                    title: 'BMW Pencil',
                })
            }
        )
    })

    it('add a new product', () => {
        // Execute a get request and assert that the content-type in the header is correct.
        cy.request('PUT', '/products/1', { title: 'iPhone Galaxy +1' }).then(
            (response) => {
                expect(response.status).to.equal(200)
                expect(response.duration).to.not.be.greaterThan(500)
                cy.wrap(response.body).should('deep.include', {
                    id: 1,
                    title: 'iPhone Galaxy +1',
                    description: 'An apple mobile which is nothing like apple',
                })
            }
        )
    })
})
