import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos';
  image1 = '../assets/Images/Glacier_National_Park_Many_Glacier.jpg';
  image2 = '../assets/Images/Glacier_National_Park_Wild_Goose_lsland.JPG';
  image3 = '../assets/Images/Glacier_National_Park_Bighorn_Sheep.JPG';

  constructor() { }

  ngOnInit() {
  }

}