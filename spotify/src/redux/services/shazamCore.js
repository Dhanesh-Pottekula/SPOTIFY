import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi =createApi(
        {reducerpath:"shazamCoreApi",

        baseQuery:fetchBaseQuery({
        baseUrl:"https://shazam.p.rapidapi.com/",
        prepareHeaders:(headers)=>{
          headers.set('X-RapidAPI-Key','e8037b7b57msh93dfd08b1bdba0fp1cb8e3jsn8b7ce8b1c1ef')

          return headers
        }
      }),
      
        endpoints:(builder)=>({
          getTopCharts:builder.query({query:()=>"/charts/track"}),
        })
      },
    )

    export const {useGetTopChartsQuery,}=shazamCoreApi;