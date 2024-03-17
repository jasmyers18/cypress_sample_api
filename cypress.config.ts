import { defineConfig } from 'cypress'
import 'dotenv/config'

export default defineConfig({
    e2e: {
        baseUrl: 'https://dummyjson.com',
        setupNodeEvents(on, config) {
            config.env = config.env || {}
            config.env.FAKE_API_KEY = process.env.FAKE_API_KEY

            return config
        },
    },
})
