import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestClaim} from '../../../models/RequestClaim';
import {RequestClaimServiceService} from '../request-claim-service.service';

@Component({
  selector: 'app-request-claim-detail',
  templateUrl: './request-claim-detail.component.html',
  styleUrls: ['./request-claim-detail.component.scss']
})
export class RequestClaimDetailComponent implements OnInit {

  claimDetails: number;
  requestClaim: RequestClaim;
  @Output() closeAll = new EventEmitter<boolean>();
  @Input() id: number;

  constructor(private route: ActivatedRoute, private requestClaimService: RequestClaimServiceService, private router: Router, private v: ActivatedRoute) {
  }

  idclaim!: any;

  ngOnInit() {

    this.claimDetails = this.id;
    this.idclaim = this.v.snapshot.params['id'];
    // @ts-ignore
    this.requestClaimService.getClaimById(this.idclaim).subscribe(
        data => this.requestClaim = data
    )
  }

  detailReclamation(id: any) {
  };

}
