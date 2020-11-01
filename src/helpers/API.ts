import axios from 'axios'

const API = {
  url: 'https://rickandmortyapi.com/api',
  getCharacters(params: object) {
    const endpoint = 'character'
    return axios
      .get(`${this.url}/${endpoint}/`, { params })
      .then((response) => {
        const { info, results } = response.data
        const { pages } = info
        return { pages, characters: results }
      })
      .catch((error) => {
        console.log('Error fetching characters', error)
      })
  }
}

export default API
