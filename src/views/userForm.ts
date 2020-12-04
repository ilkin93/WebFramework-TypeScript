import {View} from "./view";
import {User, UserProps} from "../models/user";

export class UserForm extends View<User, UserProps>{
    eventsMap(): {[k: string]: () => void} {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }
    onSaveClick = (): void => {
        this.model.save();
    }
    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input){
            const name = input.value
            this.model.set({name})
        }

    }
    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    template(): string {
        return `<div>
                <h1>User Form</h1>
                <div> User name: ${this.model.get('name')} </div>
                <div> User age: ${this.model.get('age')} </div>
                <input placeholder="${this.model.get('name')}" />
                <button class="set-name">Set Name</button>
                <button class="set-age" >Set random age </button>
                <button class="sav-model" > Save User</button>
            </div>`
    }

}