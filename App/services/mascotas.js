import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../Firebase/firebaseDb'

export const PetApi = createApi({
  reducerPath: 'PetApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPets: builder.query({
      query: () => `mascotas.json`,
    }),
    getPetInfo: builder.query({
        query: (id) => `mascotas/${id}.json`,
    }),
    getFavorites: builder.query({
        query: (id) => `favorito/${id}.json`,
        providesTags:'favorito'
    }),
    PostFavorite: builder.mutation({
        query: ({id, info}) => ({
          url: `favorito/${id}.json`,
          method: 'PUT',
          body: {...info}
        }),
        invalidatesTags: 'favorito'
      }),
  }),
})


export const { useGetPetsQuery, useGetPetInfoQuery, useGetFavoritesQuery, usePostFavoriteMutation } = PetApi