import { Component, OnInit } from '@angular/core';

import { Cards } from './cards';

const cardsDetails: Cards[] = [
  {
    img: 'https://web.dev/multi-origin-pwas/hero.jpg',
    titleText: 'سامانه جامع مالی و خدمات غیرحضوری',
    subText:
      'محاسبه و پرداخت قبوض در محل'
  },
  {
    img: 'https://web.dev/ready-player-web/hero.jpg',
    titleText: 'شرکت آب و فاضلاب استان تهران',
    subText: 'اپلیکشن پرداخت قبوض مخصوص کنترخوان'
  },
  {
    img: 'https://web.dev/video-basics/hero.jpg',
    titleText: 'شرکت آب و فاضلاب استان اصفهان',
    subText: 'سامانه جامع پرداخت قبوض و اپلیکیشن پرداخت و امور خودکار تلفنی'
  }
];
const ourFacilities: Cards[] = [
  {
    img: 'https://web.dev/images/collections/fast.svg',
    titleText: 'تهیه گزارشات',
    subText:
      'اسناد مالی ،آمار داده ها و اطلاعات ، سیستم دریافت وصولی متمرکز، آمار تجمیع استانی و بودجه'
  },
  {
    img: 'https://web.dev/images/collections/accessible.svg',
    titleText: 'قابل اطمینان',
    subText:
      'سابقه نگهداری 30 ساله داده ها'
  },
  {
    img: 'https://web.dev/images/collections/reliable.svg',
    titleText: 'اپلیکشن آبفا',
    subText:
      'اپلیکشن جامع آبفا را دانلود کنید.'
  },
  {
    img: 'https://web.dev/images/collections/discoverable.svg',
    titleText: 'قابل استفاده برروی',
    subText:''
  },
  {
    img: 'https://web.dev/images/collections/secure.svg',
    titleText: 'امن',
    subText:
      ''
  },
  {
    img: 'https://web.dev/images/collections/installable.svg',
    titleText: 'قابل اجرا',
    subText:
      'Challenges and workarounds for building Progressive Web Apps in multi-origin sites.'
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

  constructor() {
  }

  ngOnInit() {
  }
}
