import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import * as AOS from 'aos';
// import '../../../node_modules/aos/dist/aos.css';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  /* animations: [
    trigger('changeDivSize', [
      state(
        'initial',
        style({
          transition: 'width 2s, height 4s',
          fontSize: '12px',
          height: '100vh',
          width: '100%',
        })
      ),
      state(
        'final',
        style({
          height: '100vh',
          width: '100%',
          fontSize: '24px',
        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),
  ], */
})
export class NavbarComponent implements OnInit {
  currentState = 'initial';
  @ViewChild('stackList')
  stackListRef!: ElementRef;
  @ViewChild('myAudio') audioRef!: ElementRef;

  ngOnInit(): void {
    AOS.init();
    const listItems =
      this.stackListRef.nativeElement.querySelectorAll('.stack-list li');
    const delay = 100;

    for (let i = 0; i < listItems.length; i++) {
      listItems[i].setAttribute('data-aos', 'zoom-in');
      listItems[i].setAttribute('data-aos-delay', (i * delay).toString());
      listItems[i].setAttribute('data-aos-duration', '2000');
    }
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

  formData = {
    name: '',
    email: '',
    message: '',
  };

  submitForm() {
    // Perform form submission logic here (e.g., sending data to a server)
    console.log('Form submitted:', this.formData);

    // Reset the form after submission
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }

  getRandomColor(): string {
    const colors = [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#00FFFF',
      '#FF00FF',
      '#C0C0C0',
      '#808080',
      '#800000',
      '#008080',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  playPauseIcon: boolean = true;
  playPause(){
    this.playPauseIcon = !this.playPauseIcon;
    
  }

}
