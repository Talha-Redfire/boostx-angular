import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyfeatureServiceService {
  constructor() {}

  keyFeatures() {
    return [
      {
        icon: '../../assets/Svgs/CuratedTokens.svg',
        title1: ' Curated',
        title2: 'Tokens',
      },
      {
        icon: '../../assets/Svgs/UniquePresales.svg',
        title1: 'Unique',
        title2: 'Presales',
      },
      {
        icon: '../../assets/Svgs/DynamicDashboards.svg',
        title1: 'Dynamic',
        title2: 'Dashboards',
      },
      {
        icon: '../../assets/Svgs/HighQualityProjects.svg',
        title1: 'High Quality',
        title2: 'Projects',
      },
    ];
  }
}
