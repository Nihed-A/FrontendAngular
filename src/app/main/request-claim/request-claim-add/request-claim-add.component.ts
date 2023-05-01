import { Component, OnInit } from '@angular/core';
import {RequestClaim} from "../../../models/RequestClaim";
import {RequestClaimServiceService} from "../request-claim-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-claim-add',
  templateUrl: './request-claim-add.component.html',
  styleUrls: ['./request-claim-add.component.scss']
})
export class RequestClaimAddComponent implements OnInit {
  claim: RequestClaim = new RequestClaim();
  constructor(private requestClaimService: RequestClaimServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  ajouter() {

    this.requestClaimService.addRequestClaim(this.claim)
        .subscribe((res:any) => this.router.navigateByUrl("/apps/e-commerce/shop"));
  }
  claimTypes = [
    'Package_Not_Received',
    'Incomplete_Package',
    'Damaged_Product',
    'Wrong_Product_Reference',
    'Refund_Not_Received',
    'Product_Not_Working',
    'Product_Canceling',
    'Order_Canceling',
    'Order_Not_Shipp'
  ];
}
