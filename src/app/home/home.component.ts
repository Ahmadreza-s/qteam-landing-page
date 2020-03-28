import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {PersianDigitService} from '../_services/persianDigitService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent;

  ngOnInit() {
  }

  constructor(private persianDigit: PersianDigitService) {


  }

  goftare() {
    this.ProductDetailIndex = 0;
    this.productDetail.selectGofare();
  }

  ecab() {
    this.ProductDetailIndex = 1;
    this.productDetail.selectEcab();
  }

  samandar() {
    this.ProductDetailIndex = 2;
    this.productDetail.selectSamandar();
  }

  patil() {
    this.ProductDetailIndex = 3;
    this.productDetail.selectPatil();
  }
  ProductDetailIndex=1;

  ucabImgUrl="../assets/img/ucab_logo.png";
  taxAppImgUrl="../assets/img/taxapp_logo.png";
  karinoImgUrl="../assets/img/karino_logo.png";
  sorenImgUrl = '../assets/img/soren_logo.png';
  onTaxImgUrl = '../assets/img/ontax_logo.png';

  setNormalImgs(){
    this.ucabImgUrl="../assets/img/ucab_logo.png";
    this.taxAppImgUrl="../assets/img/taxapp_logo.png";
    this.karinoImgUrl="../assets/img/karino_logo.png";
    this.sorenImgUrl = '../assets/img/soren_logo.png';
    this.onTaxImgUrl = '../assets/img/ontax_logo.png';
  }

  onTax(){
    this.setNormalImgs();
    this.onTaxImgUrl = '../assets/img/ontax_logo_light.png';
  }


  OnSoren() {
    this.setNormalImgs();
    this.sorenImgUrl="../assets/img/soren_logo_light.png";
  }

  OnKarino() {
    this.setNormalImgs();
    this.karinoImgUrl = '../assets/img/karino_logo_light.png';
  }

  OnTaxApp() {
    this.setNormalImgs();
    this.taxAppImgUrl="../assets/img/taxapp_logo_light.png";
  }

  OnUcab() {
    this.setNormalImgs();
    this.ucabImgUrl="../assets/img/ucab_logo_light.png";
  }
}
