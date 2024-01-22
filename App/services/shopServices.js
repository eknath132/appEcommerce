import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../Firebase/firebaseDb'

export const ShopApi = createApi({
  reducerPath: 'ShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
    }),
    getProduct: builder.query({
        query: (id) => `products/${id}.json`,
    }),
    getCategories: builder.query({
        query: () => 'categories.json'
    })
  }),
})


export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } = ShopApi