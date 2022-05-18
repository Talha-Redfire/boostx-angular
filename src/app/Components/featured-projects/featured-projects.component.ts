import { Component, OnInit } from '@angular/core';
import { KeyfeaturedProjectsService } from 'src/app/services/keyfeatured-projects.service';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
})
export class FeaturedProjectsComponent implements OnInit {
  constructor(private keyFeatureProjects: KeyfeaturedProjectsService) {}
  projects: any = [];
  ngOnInit(): void {
    this.projects = this.keyFeatureProjects.keyFeatureProjList();
  }

  LoadMoreProjects() {
    this.projects.push(this.keyFeatureProjects.LaodMoreProjectService());
  }
}
