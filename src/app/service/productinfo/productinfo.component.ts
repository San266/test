import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GalleryItems } from 'src/app/appModals/gallery';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {
  selectedItem: any;

  constructor(
    private service:GalleryItems,
    private _activatedRoute:ActivatedRoute
  ) { }
  galleryImages:any;
id:any;
  ngOnInit(): void {

    this.galleryImages = this.service.galleryImages;
    // console.log("check galleryImages-->",this.galleryImages)
   

    this._activatedRoute.params.subscribe((params:Params)=>{
this.id = params['id'];
// console.log("id check---->",this.id)

this.selectedItem = this.service.galleryImages[this.id -1]
// console.log("check selectedItem-->",this.selectedItem)
    })
  }

}
