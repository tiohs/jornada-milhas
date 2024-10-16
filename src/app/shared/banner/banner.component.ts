import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() src : string = '/assets/image/banner-homepage.png';
  @Input() alt : string = 'Banner Homepage';
}
