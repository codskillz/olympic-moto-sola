import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OLYMPIC MOTO Šola';

  video = {
    src: 'assets/media/cover-video.mp4',
    type: 'video/mp4'
  }
}
