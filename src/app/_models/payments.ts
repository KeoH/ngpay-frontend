
import { Serializable } from '../_interfaces';


export class Payment implements Serializable<Payment>{
    id: string;
    type: string;
    description: string;
    amount: number;
    creationDate: Date;

    constructor(o: Object) {
        this.deserialize(o);
    }

    getDate() {
        return ("0" + this.creationDate.getDate()).slice(-2) + "-"
            + ("0" + (this.creationDate.getMonth() + 1)).slice(-2) + "-"
            + this.creationDate.getFullYear();
    }

    getTime() {
        return ("0" + this.creationDate.getHours()).slice(-2) + ":" + ("0" + this.creationDate.getMinutes()).slice(-2);
    }
    deserialize(input) {
        this.id = input.id;
        this.type = input.type;
        this.description = input.description;
        this.amount = Number(input.amount);
        this.creationDate = new Date(input.creation_date);
        return this;
    }
}