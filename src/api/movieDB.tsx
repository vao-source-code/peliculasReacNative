import axios from "axios";

const movieDB = axios.create({

    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '9c599ce2226ca038a7df1377e3ee7ce3',
        language: 'es-ES',
    }
})

export default movieDB;