import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrlLogin, apiKeyWeb, baseUrl } from '../../Firebase/firebaseDb'

export const LoginApi = createApi({
  reducerPath: 'LoginApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrlLogin }),
  endpoints: (builder) => ({
    PostRegister: builder.mutation({
        query: (user) => ({
            url: `accounts:signUp?key=${apiKeyWeb}`,
            method:'POST',
            body: user
        })
    }),
    PostLogin: builder.mutation({
      query: (user) => ({
        url: `accounts:signInWithPassword?key=${apiKeyWeb}`,
        method:'POST',
        body: {...user, returnSecureToken: true}
      })
    }),
    PostInfoUser: builder.mutation({
      query: ({idUser, info}) => ({
        url: `${baseUrl}infoUser/${idUser}.json`,
        method: 'PUT',
        body: {...info}
      }),
      invalidatesTags: 'infoUser'
    }),
    GetInfoUser: builder.query({
      query: (id) => `${baseUrl}infoUser/${id}.json`,
      providesTags:'infoUser'
    })
  }),
})


export const { usePostRegisterMutation, usePostLoginMutation, usePostInfoUserMutation, useGetInfoUserQuery } = LoginApi