import { Component, OnInit } from '@angular/core';

import { Cards } from './cards';

const cardsDetails: Cards[] = [
  {
    img: '../../../assets/imgs/phone.png',
    titleText: 'سامانه جامع مالی و خدمات غیرحضوری',
    subText: 'محاسبه و پرداخت قبوض در محل'
  },
  {
    img: '../../../assets/imgs/TabfaLogo.png',
    titleText: 'شرکت آب و فاضلاب استان تهران',
    subText: 'اپلیکشن پرداخت قبوض مخصوص کنتورخوان'
  },
  {
    img: '../../../assets/imgs/EabfaLogo.png',
    titleText: 'شرکت آب و فاضلاب استان اصفهان',
    subText: 'سامانه جامع پرداخت قبوض و اپلیکیشن پرداخت و امور خودکار تلفنی'
  }
];
const ourFacilities: Cards[] = [
  {
    img: '../../../assets/imgs/fast.PNG',
    titleText: 'تهیه گزارشات',
    subText:
      'اسناد مالی ،آمار داده ها و اطلاعات ، سیستم دریافت وصولی متمرکز، آمار تجمیع استانی و بودجه'
  },
  {
    img: '../../../assets/imgs/accessible.png',
    titleText: 'قابل اطمینان',
    subText: 'سابقه نگهداری 30 ساله داده ها'
  },
  {
    img: '../../../assets/imgs/abfaApp.PNG',
    titleText: 'اپلیکشن آبفا',
    subText: 'آیا میخواهید اپلیکیشن آبفا را دانلود کنید؟'
  },
  {
    img: '../../../assets/imgs/easyDiscoverable.PNG',
    titleText: 'قابل استفاده برروی',
    subText: 'متن آزمایشی'
  },
  {
    img: '../../../assets/imgs/safe.PNG',
    titleText: 'امن',
    subText: 'متن آزمایشی متن آزمایشی'
  },
  {
    img: '../../../assets/imgs/installable.PNG',
    titleText: 'قابل اجرا',
    subText:
      'متن آزمایشی متن آزمایشی'
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

  constructor() {}

  ngOnInit() {}
}
