// import { User } from "./models/user.model";

export interface Reservation {
    id?: number;
    car: any;
    user: any;
    takeItAt:Date;
    returnItAt:Date;

}
