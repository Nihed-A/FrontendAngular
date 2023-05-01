import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestClaimListComponent } from './request-claim-list/request-claim-list.component';
import { RequestClaimDetailComponent } from './request-claim-detail/request-claim-detail.component';
import { RequestClaimAddComponent } from './request-claim-add/request-claim-add.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ContentHeaderModule} from '../../layout/components/content-header/content-header.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {CardSnippetModule} from '../../../@core/components/card-snippet/card-snippet.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {FormsModule} from '@angular/forms';
import {CsvModule} from '@ctrl/ngx-csv';
import {NgApexchartsModule} from "ng-apexcharts";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

const routes = [
  {
    path: 'list',
    component: RequestClaimListComponent
  },
  {
    path: 'list/:id',
    component: RequestClaimDetailComponent
  },
  {
    path: 'add',
    component: RequestClaimAddComponent
  }
]

@NgModule({
  declarations: [
    RequestClaimListComponent,
    RequestClaimDetailComponent,
    RequestClaimAddComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ContentHeaderModule,
    NgSelectModule,
    CardSnippetModule,
    NgxDatatableModule,
    NgxUiLoaderModule,
    FormsModule,
    CsvModule,
    NgApexchartsModule,
    NgbDropdownModule

  ]
})
export class RequestClaimModule { }
