import { Component, OnInit } from '@angular/core';
import { KeyfeatureServiceService } from 'src/app/services/keyfeature-service.service';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.scss'],
})
export class KeyFeaturesComponent implements OnInit {
  constructor(private keyFeatures: KeyfeatureServiceService) {}

  AllFeatures: any = [];
  ngOnInit(): void {
    this.AllFeatures = this.keyFeatures.keyFeatures();
  }
}
