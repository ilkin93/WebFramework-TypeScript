import axios, {AxiosPromise} from "axios";

interface HasId{ /// generics constraints
    id?: number
}

export class Sync<AnyType extends HasId> {
    constructor(public rootUrl: string) {}
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }
    save(data: AnyType): AxiosPromise{
        const {id} = data
        if(id){
           return axios.put(`${this.rootUrl}/${id}`, data);
        }else {
           return axios.post(this.rootUrl, data);
        }
    }
}