import userReducer, { userLogin, logOut } from '../userSlice'

const user = {
    isError: false,
    errorMessage: null,
    result: {
        jwt: 'eyJhb',
    },
}

describe('userSlice', () => {
    test('should return default state whe we pass an empty action', () => {
        const result = userReducer(undefined, { type: '' })

        expect(result).toEqual({
            user: {},
        })
    })

    test('should return user state for userLogin action', () => {
        const action = { type: userLogin.type, payload: user }
        const result = userReducer({}, action)
        expect(result.user.isError).toBe(false)
        expect(result.user.errorMessage).toBe(null)
        expect(result.user.result.jwt).toBe('eyJhb')
    })

    test('should return empty state for "logOut" action', () => {
        const action = { type: logOut.type, payload: undefined }
        const result = userReducer({}, action)

        expect(result.user).toBe(null)
    })
})
