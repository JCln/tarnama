import {Component, OnInit} from '@angular/core';

import {Cards} from './cards';

const cardsDetails: Cards[] = [
  {
    img: 'https://web.dev/multi-origin-pwas/hero.jpg',
    titleText: 'Progressive Web Apps in multi-origin sites',
    subText:
      'Challenges and workarounds for building Progressive Web Apps in multi-origin sites.'
  },
  {
    img: 'https://web.dev/ready-player-web/hero.jpg',
    titleText: 'Ready Player Web',
    subText: 'Building games for the modern web.'
  },
  {
    img: 'https://web.dev/video-basics/hero.jpg',
    titleText: 'Going beyond images with basic video for the web',
    subText: 'Learn basic video. Increase engagement.'
  }
];
const ourFacilities: Cards[] = [
  {
    img: 'https://web.dev/images/collections/fast.svg',
    titleText: 'Easily discoverable',
    subText:
      'Ensure users can find your site easily through search.'
  },
  {
    img: 'https://web.dev/images/collections/accessible.svg',
    titleText: 'Safe and secure',
    subText:
      'Ensure your site and your users\' data is secure.'
  },
  {
    img: 'https://web.dev/images/collections/reliable.svg',
    titleText: 'Network reliability',
    subText:
      '\n' +
      '        Be on users\' home screens with no need for an app store.\n' +
      '      '
  },
  {
    img: 'https://web.dev/images/collections/discoverable.svg',
    titleText: 'Easy discoverable',
    subText:
      'Challenges and workarounds for building Progressive Web Apps in multi-origin sites.'
  },
  {
    img: 'https://web.dev/images/collections/secure.svg',
    titleText: 'Safe and secure',
    subText:
      'Challenges and workarounds for building Progressive Web Apps in multi-origin sites.'
  },
  {
    img: 'https://web.dev/images/collections/installable.svg',
    titleText: 'Installable',
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
