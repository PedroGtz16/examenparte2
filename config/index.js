require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 8080,
    host: process.env.HOST || "0.0.0.0",
    apikey:process.env.tone_apikey,
    serviceUrl:process.env.tone_url
}

module.exports = { config };