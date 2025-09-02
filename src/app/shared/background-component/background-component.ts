import { Component } from '@angular/core';

@Component({
  selector: 'app-space-background',
  standalone: true,
  template: `
    <div class="space">
      @for (i of starLayers; track i) {
        <div class="stars stars-{{i}}"></div>
      }
    </div>
  `,
  styles: [`
    .space {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(to bottom, #000000 0%, #000022 100%);
    }

    .stars {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(0.5px 0.5px at 25px 5px, white, rgba(255, 255, 255, 0)),
        radial-gradient(0.5px 0.5px at 50px 25px, #ffff99, rgba(255, 255, 255, 0)),
        radial-gradient(0.75px 0.75px at 125px 20px, white, rgba(255, 255, 255, 0)),
        radial-gradient(1px 1px at 50px 75px, white, rgba(255, 255, 255, 0)),
        radial-gradient(1.5px 1.5px at 15px 125px, #fff4e6, rgba(255, 255, 255, 0)),
        radial-gradient(2px 2px at 110px 80px, white, rgba(255, 255, 255, 0)),
        radial-gradient(2.5px 2.5px at 200px 150px, #ffcccc, rgba(255, 255, 255, 0)),
        radial-gradient(3px 3px at 300px 250px, white, rgba(255, 255, 255, 0)),
        radial-gradient(3.5px 3.5px at 400px 350px, #ffe6cc, rgba(255, 255, 255, 0));
      background-repeat: repeat;
      background-size: 400px 400px;
      opacity: 0.3;
      animation: shine 3s forwards infinite;
    }

    .stars-1 {
      animation: space 240s ease-in-out infinite;
      opacity: 0.4;
    }

    .stars-2 {
      animation: space 300s ease-in-out infinite;
      background-position: 100px 100px;
      opacity: 0.3;
      background-size: 350px 350px;
    }

    .stars-3 {
      animation: space 360s ease-in-out infinite;
      background-position: -150px -150px;
      opacity: 0.2;
      background-size: 300px 300px;
    }

    @keyframes space {
      40% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.4;
      }
      60% {
        opacity: 0.3;
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes shine {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 0.3;
      }
      100% {
        opacity: 0.2;
      }
    }
  `]
})
export class SpaceBackgroundComponent {
  starLayers = [1, 2, 3];
}
