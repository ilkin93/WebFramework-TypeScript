import {User, UserProps} from "./models/user";
import axios, {AxiosPromise, AxiosResponse} from 'axios';
import {Collections} from "./models/collections";
import {UserEdit} from "./views/userEdit";

import {UserForm} from "./views/userForm";
const user = User.build({name: 'Name', age: 44})
const userForm = new UserForm(document.getElementById('rootElement'), user)
userForm.render();


