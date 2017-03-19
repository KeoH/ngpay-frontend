
import { Serializable } from '../_interfaces';

export class User implements Serializable<User>{

    username: string;
    account: {
        email: string;
    }

    constructor(o: Object) {
        this.deserialize(o);
    }

    deserialize(input) {
        this.username = input.username;
        this.account.email = input.email;
        return this;
    }


}