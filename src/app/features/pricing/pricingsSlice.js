import { createSlice } from "@reduxjs/toolkit"

const pricings = [
    {
        yearPlan: "2-year plan",
        price: "3.99",
        save: "51%",
        buttonText: "Get 2-Year Plan",
        discount: {
            before: "198.96",
            after: "95.76",
            text: "for the first 2 years"
        },
        perYear: "99.48",
        bestValue: true
    },
    {
        yearPlan: "1-year plan",
        price: "4.99",
        save: "30%",
        buttonText: "Get 1-Year Plan",
        discount: {
            before: "99.48",
            after: "59.88",
            text: "for the first year"
        },
        perYear: "99.48",
        bestValue: false
    },
    {
        yearPlan: "1-month plan",
        price: "11.99",
        save: "0%",
        buttonText: "Get 1-month Plan",
        discount: {
            bill: "11.99",
            text: "billed every month"
        },
        perYear: "99.48",
        bestValue: false
    },
]

export const pricingsSlice = createSlice({
    name: "pricings",
    initialState: {
        data: pricings
    },
    reducers: {

    }
})

export default pricingsSlice.reducer