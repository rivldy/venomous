import { createSlice } from "@reduxjs/toolkit"

const postsData = [
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "25 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "24 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "24 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "22 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "21 April 2022"
    },
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "20 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "19 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "17 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "15 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "15 April 2022"
    },
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "14 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "14 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "13 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "11 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "11 April 2022"
    },
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "10 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "10 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "09 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "08 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "07 April 2022"
    },
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "07 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "06 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "05 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "03 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "04 April 2022"
    },
    {
        url: "",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: "Anita Carr",
        source: "thenews.com",
        publishedAt: "04 April 2022"
    },
    {
        url: "",
        title: "qui est esse",
        author: "Courtney Woods",
        source: "dailyearth.com",
        publishedAt: "03 April 2022"
    },
    {
        url: "",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: "Freddie Fletcher",
        source: "dailyearth.com",
        publishedAt: "02 April 2022"
    },
    {
        url: "",
        title: "eum et est occaecati",
        author: "Craig Romero",
        source: "thenews.com",
        publishedAt: "02 April 2022"
    },
    {
        url: "",
        title: "nesciunt quas odio",
        author: "Daryl Steeves",
        source: "dailyearth.com",
        publishedAt: "01 April 2022"
    },
]

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        data: postsData
    },
    reducers: {

    }
})

export default postsSlice.reducer