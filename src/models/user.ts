import {Model} from "./model";
import {Attributes} from "./attributes";
import {Sync} from "./sync";
import {Eventing} from "./eventing";
import {Collections} from "./collections";

export interface UserProps {
    name?: string,
    age?: number,
    id?: number
}

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps>{
    static build(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new Sync<UserProps>(rootUrl)
        )
    }

    static buildUserCollection(): Collections<User, UserProps>{
        return new Collections<User, UserProps>(rootUrl, (json:UserProps) => User.build(json))
    }

    setRandomAge(): void {
       const age = Math.round(Math.random() * 1000);
       this.set({age})
    }

}
