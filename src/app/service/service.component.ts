import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryItems } from '../appModals/gallery';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  // @Input() display:boolean | undefined;
  
  
  constructor(private gallery:GalleryItems) { }

  
  galleryItems:any ;
  ngOnInit() {
    this.galleryItems = this.gallery.galleryImages
    console.log("abgs", this.galleryItems)
  }
  // viewDetail(){
  //   this.router.navigate(['productinfo'])
  // }
  

}
