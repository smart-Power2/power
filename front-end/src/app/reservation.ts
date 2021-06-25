import { User } from "./models/user.model";
export interface Reservation {
    car: any;
    user: any;
    takeItAt:Date;
    returnItAt:Date;

}
