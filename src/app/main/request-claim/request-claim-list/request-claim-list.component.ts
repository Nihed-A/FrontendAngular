import {ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {RequestClaimServiceService} from '../request-claim-service.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexMarkers,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis
} from 'ng-apexcharts';
import {NavigationEnd, Router} from '@angular/router';
import {CardAnalyticsService} from "../../ui/card/card-analytics/card-analytics.service";
import {CoreConfigService} from "../../../../@core/services/config.service";
import {ChartOptions} from "../../ui/card/card-analytics/card-analytics.component";
import {colors} from "../../../colors.const";
import {Subject} from "rxjs";
import {RequestClaim} from "../../../models/RequestClaim";


@Component({
  selector: 'app-request-claim-list',
  templateUrl: './request-claim-list.component.html',
  styleUrls: ['./request-claim-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RequestClaimListComponent implements OnInit {

  refused = 0;
  pending = 0;
  inProgress = 0;
  resolved = 0;

  @ViewChild('customerChartoptionsRef') customerChartoptionsRef: any;
  public customerChartoptions: Partial<ChartOptions>;
  someSubscription: any;
  data: RequestClaim[] = [];
  public basicSelectedOption: number = 10;
  
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('tableRowDetails') tableRowDetails: any;

  private $primary = '#7367F0';
  private $danger = '#EA5455';
  private $warning = '#FF9F43';
  private $info = '#00cfe8';
  private $success = '#00db89';
  private $primary_light = '#9c8cfc';
  private $warning_light = '#FFC085';
  private $danger_light = '#f29292';
  private $info_light = '#1edec5';
  private $stroke_color = '#ebe9f1';
  private $label_color = '#e7eef7';
  private $purple = '#df87f2';
  private $white = '#fff';

  private $textHeadingColor = '#5e5873';
  private $strokeColor = '#ebe9f1';
  private $labelColor = '#e7eef7';
  private $avgSessionStrokeColor2 = '#ebf0f7';
  private $budgetStrokeColor2 = '#dcdae3';
  private $goalStrokeColor2 = '#51e5a8';
  private $revenueStrokeColor2 = '#d0ccff';
  private $textMutedColor = '#b9b9c3';
  private $salesStrokeColor2 = '#df87f2';
  private $earningsStrokeColor2 = '#28c76f66';
  private $earningsStrokeColor3 = '#28c76f33';

  private _unsubscribeAll: Subject<any>;


  /**
   * Constructor
   *
   * @param {CoreConfigService} _coreConfigService
   * @param {CardAnalyticsService} _cardAnalyticsService
   */
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
  constructor(private requestService: RequestClaimServiceService, private ngxService: NgxUiLoaderService,private cdr: ChangeDetectorRef) {
    this.getAllRequestClaims();
    this.getStatisticalData();

  }

  ngOnInit(): void {
    this.getStatisticalData();


  }

  loadRequests(): void {
    this.requestService.retrieveAllClaims().subscribe(requests => {
      this.data = requests;
      this.cdr.detectChanges();
    });
  }
    filterUpdate($event: KeyboardEvent) {

    }

  public ColumnMode = ColumnMode;
  selectPlan: any;
  selectStatus: any;
  selectedStatus: any;
  selectRole: any;
  contentHeader: any;
  selectedRole: any;
  selectedPlan: any;
  isMenuToggled: Boolean = false;


  filterByPlan($event: any) {
    
  }

  filterByStatus($event: any) {
    
  }

  filterByRole($event: any) {
    
  }

  getAllRequestClaims(){
    this.requestService.retrieveAllClaims().subscribe(res =>this.data = res)
  }

  resolveRequest(requestClaim) {
    this.requestService.resolveRequestClaim(requestClaim).subscribe();
    setTimeout(() => {
      this.loadRequests();
      this.cdr.detectChanges();
    }, 0);
  }

  deleteRequest(id: number) {
    this.requestService.deleteClaim(id).subscribe()
    setTimeout(() => {
      this.loadRequests();
      this.cdr.detectChanges();
    }, 0);
  }

  async getStatisticalData() {
    await new Promise(r => setTimeout(r, 1000));
    for (let item of this.data)  {
        if (item.status == 'refused') {
            this.refused++;
        } else if (item.status == 'pending') {
            this.pending++;
        } else if (item.status == 'in_progress')
            this.inProgress++;
         else {
            this.resolved++;
        }
    };
    console.log(this.refused);
    console.log(this.pending);
    console.log(this.inProgress);

    this.customerChartoptions = {
      series: [this.pending, this.inProgress,this.refused,this.resolved],
      chart: {
        type: 'pie',
        height: 345,
        toolbar: {
          show: false
        }
      },
      labels: ['Pending', 'In Progress', 'Refused', 'Resolved'],
      dataLabels: {
        enabled: false
      },
      legend: { show: false },
      stroke: {
        width: 4
      },
      colors: [colors.solid.primary, colors.solid.warning, colors.solid.danger, colors.solid.success],
    };

  }

}
