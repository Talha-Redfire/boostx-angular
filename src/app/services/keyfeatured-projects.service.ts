import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyfeaturedProjectsService {
  constructor() {}

  keyFeatureProjList() {
    return [
      {
        img: '../../assets/Svgs/SeesawProtocol.svg',
        name: 'Seesaw Protocol',
        date: 'Sale ended on April 08',
        category: 'SSW',
        desc: 'Seesaw Protocol has successfully launched on the Binance Chain',
        swap: true,
        preSale: false,
        currency: '1 CFT',
        dollars: '$0.004762',
      },

      {
        img: '../../assets/Svgs/Firepin.svg',
        name: 'Seesaw Protocol',
        date: 'Sale ended on April 08',
        category: 'SSW',
        desc: 'Seesaw Protocol has successfully launched on the Binance Chain',
        swap: true,
        preSale: false,
        currency: '1 CFT',
        dollars: '$0.004762',
      },
      {
        img: '../../assets/Svgs/CuratedTokens.svg',
        name: 'Seesaw Protocol',
        date: 'Sale ended on April 08',
        category: 'SSW',
        desc: 'Seesaw Protocol has successfully launched on the Binance Chain',
        swap: true,
        preSale: true,
        currency: '1 CFT',
        dollars: '$0.004762',
      },
      {
        img: '../../assets/Svgs/AUTOMETATOKEN.svg',
        name: 'Seesaw Protocol',
        date: 'Sale ended on April 08',
        category: 'SSW',
        desc: 'Seesaw Protocol has successfully launched on the Binance Chain',
        swap: true,
        preSale: true,
        currency: '1 CFT',
        dollars: '$0.004762',
      },
    ];
  }

  LaodMoreProjectService() {
    return {
      img: '../../assets/Svgs/SeesawProtocol.svg',
      name: 'Seesaw Protocol',
      date: 'Sale ended on April 08',
      category: 'SSW',
      desc: 'Seesaw Protocol has successfully launched on the Binance Chain',
      swap: true,
      preSale: true,
      currency: '1 CFT',
      dollars: '$0.004762',
    };
  }
}
