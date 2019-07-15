// Config used throughout the application
const config = {
    server: {
        baseUrl: {
            production: 'https://tranquil-thicket-13222.herokuapp.com',
            development: 'http://localhost:5000'
        } 
    },
    api: {
       autocomplete: {
           BASE_URL: 'https://suggestqueries.google.com/complete/search'
       }  
    },
    environment: {
        debug: false
    }
}

export default config;