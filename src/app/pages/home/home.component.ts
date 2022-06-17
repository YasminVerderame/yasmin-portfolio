import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modalProject1: boolean = false;
  public modalProject2: boolean = false;

  @Output() closeModalEmit = new EventEmitter();

  constructor(

  ) { }

  closeModal(){
    this.modalProject1 = false;
    this.modalProject2 = false;
  }

  openModalProject1(){
    this.modalProject1 = true;
  }

  openModalProject2(){
    this.modalProject2 = true;
  }

  ngOnInit(): void {
  }

}
