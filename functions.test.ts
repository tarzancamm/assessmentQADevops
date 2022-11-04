const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray', () => {
        expect(shuffleArray([1, 2, 3])).toHaveLength(3)
    })

    test('shuffleArray', () => {
        expect(shuffleArray([1, 2, 3])).toContain(1)
        expect(shuffleArray([1, 2, 3])).toContain(2)
        expect(shuffleArray([1, 2, 3])).toContain(3)
    })
})