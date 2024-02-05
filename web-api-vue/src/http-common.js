import Axios from 'axios';

const createAxios = Axios.create({
    baseURL: "https://localhost:7025"
});

export default createAxios;