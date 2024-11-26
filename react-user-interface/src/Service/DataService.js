import axios from "axios";

const API_URL = "http://localhost:8080/";

//Adat lekérése
const getData = () => {
    return axios.get(API_URL + "getdata");
}

const DataService = {
    getData,

};

export default DataService;