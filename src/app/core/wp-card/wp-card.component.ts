import { Component, OnInit } from '@angular/core';

import { Cards } from './cards';

const cardsDetails: Cards[] = [
  {
    img: 'assets/imgs/TabfaLogo.png',
    titleText: 'شرکت آب و فاضلاب استان تهران',
    subText: 'اپلیکشن پرداخت قبوض مخصوص کنتورخوان'
  },
  {
    img: 'assets/imgs/EabfaLogo.png',
    titleText: 'شرکت آب و فاضلاب استان اصفهان',
    subText: 'سامانه جامع پرداخت قبوض، اپلیکیشن همراه آبفا اصفهان، سامانه تلفنی 1522، اپلیکیشن ارزیابی و اپلیکیشن قرائت کنتور'
  },
  {
    img: 'assets/imgs/phone.png',
    titleText: 'سامانه جامع مالی و خدمات غیرحضوری',
    subText: 'محاسبه و پرداخت قبوض در محل'
  },
];
const ourFacilities: Cards[] = [
  {
    img: 'assets/imgs/fast.PNG',
    titleText: 'تهیه گزارشات',
    subText:
      'اسناد مالی ،آمار داده ها و اطلاعات ، سیستم دریافت وصولی متمرکز، آمار تجمیع استانی و بودجه، گزارشگیری جامع مامورین قرائت'
  },
  {
    img: 'assets/imgs/accessible.png',
    titleText: 'قابل اطمینان',
    subText: 'سابقه نگهداری حداقل 20 ساله داده ها'
  },
  {
    img: 'assets/imgs/abfaApp.PNG',
    titleText: 'اپلیکشن آبفا',
    subText: 'آیا میخواهید اپلیکیشن آبفا را دانلود کنید؟',
    url: 'https://cafebazaar.ir/app/com.app.leon.moshtarak'
  },
  {
    img: 'assets/imgs/easyDiscoverable.PNG',
    titleText: 'در دسترس',
    subText: ''
  },
  {
    img: 'assets/imgs/safe.PNG',
    titleText: 'امن',
    subText: ''
  },
  {
    img: 'assets/imgs/installable.PNG',
    titleText: 'قابل اجرا برروی پلتفرم های مختلف',
    subText: ''
  }
];

@Component({
  selector: 'app-wp-card',
  templateUrl: './wp-card.component.html',
  styleUrls: ['./wp-card.component.scss']
})
export class WpCardComponent implements OnInit {
  cardsDetails = cardsDetails;
  ourFacilities = ourFacilities;

  constructor() { }

  ngOnInit() { }
}
