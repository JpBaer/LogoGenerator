const shape = require('../util/shape')

    describe('Validate',() => {
        test('Makes sure Triangle render function works correctly',()=>{
    const testShape = new shape.Triangle('blue');
    expect(testShape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    })
})

    describe('Validate',() => {
        test('Makes sure Square render function works correctly',()=> {
        const newShape = new shape.Square('blue');
        expect(newShape.render()).toEqual(`<rect x="50" y="25" width="150" height="150" fill="blue" />`);
        })
    })

    describe('Validate',() => {
        test('Makes sure Circle render function works correctly',() => {
        const newShape = new shape.Circle('blue');
        expect(newShape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
        })
    })


