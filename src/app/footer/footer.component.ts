import {Component, OnInit} from '@angular/core';
import {PersianDigitService} from '../_services/persianDigitService';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  phone;
  tel;

  constructor(private persianDigit: PersianDigitService) {
    this.phone = persianDigit.toPersian('09167125770');
    this.tel = this.persianDigit.toPersian('06633231055');
  }

  ngOnInit() {
  }


}
