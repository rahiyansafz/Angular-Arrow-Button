import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .app-container {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      background: #222;
    }
    .app-container .controls {
      height: 20vh;
      width: 100%;
      color: #3cd0a9;
      font-size: 15pt;
      text-align: center;
    }
    .app-container .controls button {
      width: 100px;
      height: 30px;
      border-radius: 7px;
      margin: 10px 0 0 10px;
      font-size: 15px;
      background: #ce7c7f;
    }
    .app-container .controls button:focus {
      outline: none;
    }
    .app-container .btn-container {
      display: flex;
    }
  `],
  template: `
    <div class="app-container">
       <div class="controls">
        
       </div>
      <div class="btn-container">
        <animated-arrows-button (onClick)="doClick('left')"
                                direction="left">
        </animated-arrows-button>
        <animated-arrows-button (onClick)="doClick('right')"
                                direction="right">
        </animated-arrows-button>
      </div>
    </div>
  `
})
export class AppComponent  {
  doClick(btn) {
    alert(`you clicked the ${btn} button`)
  }
}
