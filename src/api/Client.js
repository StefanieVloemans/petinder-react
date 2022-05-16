import axios from "axios";

const client = axios.create({
    baseURL: 'https://petinder-react.herokuapp.com/',
}) ;

export default client;