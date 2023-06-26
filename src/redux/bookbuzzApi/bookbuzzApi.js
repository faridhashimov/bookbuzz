import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const bookbuzzApi = createApi({
    reducerPath: 'bookbuzzApi',
    tagTypes: ['Products', 'Orders'],
    baseQuery: fetchBaseQuery({
        baseUrl:
            'https://dry-falls-41861-88221b34a74e.herokuapp.com/http://bookbuzz.cronhex.com/api/v1/',
        mode: 'cors',
        credentials: 'same-origin',
        prepareHeaders: (headers, { getState }) => {
            // headers.set('Content-Type', 'application/json')
            // headers.set('Access-Control-Allow-Origin', '*,*')
            // headers.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
            headers.set(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With'
            )
            const token = getState().user?.user?.result?.jwt

            if (token) {
                headers.set('Token', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => 'product/explore',
            providesTags: (result, error, id) => [{ type: 'Products', id }],
            transformResponse: (response) => response.result.products,
        }),
        getProduct: build.query({
            query: (id) => `product/details?productId=${id}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),
        getSearchedProducts: build.query({
            query: (value) => `product/search?q=${value}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Products', id })),
                          { type: 'Products', id: 'LIST' },
                      ]
                    : [{ type: 'Products', id: 'LIST' }],
            transformResponse: (response) => response.result.products,
        }),
        loginUser: build.mutation({
            query: (credentials) => ({
                url: 'account/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        checkout: build.mutation({
            query: (body) => ({
                url: `shop/checkout`,
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
        }),
    }),
})

export const {
    useGetAllProductsQuery,
    useGetSearchedProductsQuery,
    useCheckoutMutation,
    useGetProductQuery,
    useLoginUserMutation,
} = bookbuzzApi
