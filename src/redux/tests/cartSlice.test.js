import cartReducer, {
    addToCart,
    deleteFromCart,
    increaseQt,
    decreaseQt,
    resetCart,
} from '../cartSlice'

const product = {
    id: 235,
    title: 'The Great Journey',
    subtitleShort: 'Exploring the Unknown',
    mainImage: 'https://res.com/4279.jpg',
    price: 20.35,
    quantity: 1,
}

describe('cartSlice', () => {
    it('should return default state when we pass an empty action', () => {
        const result = cartReducer(undefined, { type: '' })
        expect(result).toEqual([])
    })

    it('should add new product with "addToCard" action', () => {
        const action = { type: addToCart.type, payload: product }
        const result = cartReducer([], action)
        expect(result[0].id).toEqual(235)
        expect(result[0].title).toEqual('The Great Journey')
        expect(result[0].subtitleShort).toEqual('Exploring the Unknown')
        expect(result[0].mainImage).toEqual('https://res.com/4279.jpg')
        expect(result[0].price).toEqual(20.35)
        expect(result[0].quantity).toEqual(1)
    })

    it('should increase product by id with "increaseQt" action', () => {
        const action = {
            type: increaseQt.type,
            payload: { id: 235 },
        }
        const result = cartReducer([product], action)
        expect(result[0].quantity).toBe(2)
    })

    it('shouldn\'t increase product by id with "increaseQt" action', () => {
        const action = {
            type: increaseQt.type,
            payload: { id: 236 },
        }
        const result = cartReducer([product], action)
        expect(result[0].quantity).toBe(1)
    })

    it('should decrease product by id with "decreaseQt" action', () => {
        const action = {
            type: decreaseQt.type,
            payload: { id: 235 },
        }
        const result = cartReducer([product], action)
        expect(result[0].quantity).toBe(0)
    })

    it('shouldn\'t decrease product by id with "decreaseQt" action', () => {
        const action = {
            type: decreaseQt.type,
            payload: { id: 236 },
        }
        const result = cartReducer([product], action)
        expect(result[0].quantity).toBe(1)
    })

    it('should delete product by id with "deleteFromCart" action', () => {
        const action = {
            type: deleteFromCart.type,
            payload: { id: 235 },
        }
        const result = cartReducer([product], action)
        expect(result).toEqual([])
    })

    it('should resete products state with "deleteFromCart" action', () => {
        const action = {
            type: resetCart.type,
            payload: undefined,
        }
        const result = cartReducer([], action)
        expect(result).toEqual([])
    })
})
