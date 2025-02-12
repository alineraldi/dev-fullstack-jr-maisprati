const axios = require ('axios')

const apiService = {
    getData: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')

            return response.data
        } catch(error){
            throw new Error(`Erro ao buscar os dados ${error.message}`)
        }
    }
}

module.exports = apiService