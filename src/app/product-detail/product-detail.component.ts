import {Component, Input, OnInit} from '@angular/core';
import {PersianDigitService} from '../_services/persianDigitService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input()
  selectedProduct=0;//0 goftare , 1 ecab , 2 samandar , 3 patil


  url;
  header;
  headerDetail;
  text;

  constructor(private persianDigit: PersianDigitService) {

  }

  ngOnInit() {
    if (this.selectedProduct == 0)
      this.selectGofare();
    else if (this.selectedProduct == 1)
      this.selectEcab();
    else if (this.selectedProduct == 2)
      this.selectSamandar();
    else if (this.selectedProduct == 3)
      this.selectPatil();
  }

  selectGofare(){
    this.selectedProduct=0;
    this.header="گفتاره | پلتفرم مشاوره روانشناسی آنلاین";

    this.headerDetail = ` تاریخ شروع پروژه: ${this.persianDigit.toPersian('95/6')}  وضعیت پروژه: اجرایی شده`;
    this.text="گفتاره پلتفرمی برای ارائه خدمات روانشناسی و مشاوره آنلاین است که در سال 1395 کار خود را آغاز کرده است. هدف گفتاره، آسان کردن مشاوره روانشناسی بوده که این امر را با کاهش دادن هزینه ها، دسترسی آسان به روانشناسان معتبر، عدم نیاز به مراجعه حضوری و افزایش امنیت فرایند مشاوره محقق کرده است. فلسفه به وجود آمدن گفتاره بهبود حال روانی تک تک اعضای جامعه برای داشتن جامعه ای سالم و پویا است.";
    this.url = 'http://goftare.com';
  }
  selectEcab(){
    this.selectedProduct=1;
    this.header="ایکب | پلتفرم سفارش آنلاین تاکسی";
    this.headerDetail = `تاریخ شروع پروژه: ${this.persianDigit.toPersian('94/10')}  وضعیت پروژه: اجرایی شده`;
    this.text="ایکب، اولین پلتفرم درخواست خودروی آنلاین در کشور است که در سال 1394 به منظور فروش به کسب و کارهایی که قصد ورود به این صعنت را دارند، توسعه داده شده و همچنان روند توسعه آن ادامه دارد. این پلتفرم که به صورت white_label ارائه می شود. تا کنون در 8 استان کشور تحت برندهای مختلف راه اندازی شده و روزانه به افراد زیادی خدمت رسانی می کند. همچنین این محصول در دفتر ریاست جمهوری داوری شده و به عنوان محصول دانش بنیان انتخاب شده است.";
    this.url = 'http://e-cab.ir';

  }
  selectSamandar(){
    this.selectedProduct=2;
    this.header="سمندر | پلتفرم راهنمای گردشگری";
    this.headerDetail = `تاریخ شروع پروژه: ${this.persianDigit.toPersian('93/8')}  وضعیت پروژه: پیاده سازی شده`;
    this.text = 'سمندر، پلتفرمی است که به منظور ارائه خدمات گردشگری توسعه یافته است. این خدمات در دو حوزه جذب و راهنمای گردشگر هستند که با استفاده از نقشه و محتوا و با به کارگیری ویژگی های شبکه های احتماعی ارائه می شوند. راه اندازی این پلتفرم به عنوان یک کسب و کار تنها نیازمند تامین محتوای مناسب است تا بتواند از صنعت پردرآمد گردشگری استفاده نماید.';
    this.url = 'http://qteam.ir';
  }
  selectPatil(){
    this.selectedProduct=3;
    this.header="پاتیل | پلتفرم سفارش آنلاین غذا";
    this.headerDetail = `تاریخ شروع پروژه: ${this.persianDigit.toPersian('95/5')}  وضعیت پروژه: پیاده سازی شده`;
    this.text="پاتیل پلتفرمی برای سفارش آنلاین غذاست که با هدف ارائه خدمات به کسانی که قصد راه اندازی این کسب و کار را دارند، توسعه داده شده است. کار اصلی این پلتفرم، متصل کردن رستوران ها، فست فود ها و کترینگ ها به افرادی است که می خواهند غذا سفارش دهند. به صورتی کاربران بتوانند بدون نیاز به تماس با مراکز مختلف، در یک نرم افزار قیمت و کیفیت غذاهای مختلف را با هم مقایسه کرده و غذای دلخواه خود را سفارش دهند.";
    this.url = 'http://patill.ir';
  }
}
