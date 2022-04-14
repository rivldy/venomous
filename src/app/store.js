import { configureStore } from '@reduxjs/toolkit'
import tabsReducer from './features/testimonial/tabsSlice'
import servicesReducer from './features/services/servicesSlice'
import youtubersReducer from './features/testimonial/youtubersSlice'
import twittersReducer from './features/testimonial/twittersSlice'
import techsReducer from './features/testimonial/techsSlice'
import footerLinksReducer from './features/footer/footerLinksSlice'
import pricingsReducer from './features/pricing/pricingsSlice'

export default configureStore({
    reducer: {
        tabs: tabsReducer,
        services: servicesReducer,
        youtubers: youtubersReducer,
        twitters: twittersReducer,
        techs: techsReducer,
        footerLinks: footerLinksReducer,
        pricings: pricingsReducer
    }
})