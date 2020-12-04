import {User, UserProps} from "./user";
import {Eventing} from "./eventing";
import axios, {AxiosResponse} from 'axios'
export class Collections<T, H> {
    models: T[] = [];
    events: Eventing = new Eventing();
    constructor(public rootUrl: string, public deserialize: (json: H) => T) {
    }
    get on() {
        return this.events.on
    }
    get trigger() {
       return this.events.trigger
    }
    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: H) => {
                this.models.push(this.deserialize(value))
            })
        })
        this.trigger('change')
    }

}