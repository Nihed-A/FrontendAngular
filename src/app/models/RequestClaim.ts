import { TypeClaim } from "./TypeClaim";
import { Status } from "./Status";

export class RequestClaim {

  idRequestClaim!:number;
    ref!:number;
    dateCreation!: Date;
    summary!:string;
    typeClaim!:TypeClaim;
    status!:string ;
    order!:number ;

}

