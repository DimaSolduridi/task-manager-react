import axios from "axios";

class HttpService {

    apiurl = process.env.REACT_APP_API;


    get(){
        return axios.get(this.apiurl)
    }

    post(newitem){
        return axios.post(this.apiurl, newitem)
    }

    put(updateditem){
        return axios.put(this.apiurl + updateditem.id, updateditem)
    }

    delete(id){
        return axios.delete(this.apiurl+id)

    }
}

export default HttpService;