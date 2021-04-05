import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['href = href = https://www.launchcode.org/', 'https://www.codecademy.com'];
  linkText = ['LaunchCode', 'Codecademy']
  constructor() { }

  ngOnInit() {
  }

}
