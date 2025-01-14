import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0
      this.message = 'Shuttle in flight.';
    }
  }

  landing(image) {
    let result = window.confirm('Are you sure the shuttle is ready for landing?');
    if (result) {
      this.color = this.color;
      this.height = this.height;
      this.width = this.width;
      this.message = "Space shuttle ready for takeoff!";
      image.style.bottom = '0px;'
      image.style.left = '0px';
    }
  }

  abort(image) {
    let result = window.confirm('Are you sure the mission should be aborted?');
    if (result) {
      this.color = this.color;
      this.height = this.height;
      this.width = this.width;
      this.message = "Space shuttle ready for takeoff!";
      image.style.left = '0px';
      image.style.bottom = '0px;'
    }
  }
  
  moveRocket(image, direction) {
    if(direction === 'right') {
      let movement = parseInt(image.style.left) + 10 + 'px';
      image.style.left = movement;
      this.width = this.width + 10000;
    } else if(direction === 'left') {
      let movement = parseInt(image.style.left) - 10 + 'px';
      image.style.left = movement;
      this.width = this.width - 10000;
    } else if(direction === 'up') {
      let movement = parseInt(image.style.bottom) + 10 + 'px';
      image.style.bottom = movement;
      this.height = this.height + 10000;
    } else if(direction === 'down') {
      let movement = parseInt(image.style.bottom) - 10 + 'px';
      image.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

}

