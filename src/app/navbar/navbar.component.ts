import { Component, OnInit, ElementRef, ViewChild , AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import * as AOS from 'aos';
//import '../../../node_modules/aos/dist/aos.css';
import 'slick-carousel';
import { interval, Subscription } from 'rxjs';
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
   // carousel
  // @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;

  // private currentImageIndex: number = 0;
  // private intervalSubscription: Subscription;

  // constructor(private renderer: Renderer2) {
  //   this.intervalSubscription = new Subscription();
  // }
 // carousel
 images = [
  {path: '../../assets/Wallpaper/c-img (1).jpg'},
  {path: '../../assets/Wallpaper/c-img (2).jpg'},
  {path: '../../assets/Wallpaper/c-img (3).jpg'},
];

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
    // this.startCarousel(); // carousel
  }
 // carousel
  // ngOnDestroy() {
  //   this.stopCarousel();
  // }

  // private startCarousel() {
  //   const carouselImages = this.carouselRef.nativeElement.querySelectorAll('.carousel-image');
  //   this.renderer.addClass(carouselImages[this.currentImageIndex], 'active');

  //   // Change image every 5 seconds (adjust the time as desired)
  //   this.intervalSubscription = interval(5000).subscribe(() => {
  //     this.showNextImage(carouselImages);
  //   });
  // }

  // private stopCarousel() {
  //   this.intervalSubscription.unsubscribe();
  // }

  // private showNextImage(carouselImages: NodeListOf<Element>) {
  //   this.renderer.removeClass(carouselImages[this.currentImageIndex], 'active');
  //   this.currentImageIndex = (this.currentImageIndex + 1) % carouselImages.length;
  //   this.renderer.addClass(carouselImages[this.currentImageIndex], 'active');
  // }
 // carousel


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
