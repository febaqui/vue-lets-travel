import axios from 'axios';

export default {
    baseURL: 'http://localhost:3000',
    config: {
        headers: {
            Accept: 'application/json',
        }
    },

    getAllHotels(){
        return axios.get(`${this.baseURL}/all`)
    }
}