import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public modalProject1: boolean = false;

  @Output() closeModalEmit = new EventEmitter();

  constructor(

  ) { }

  closeModal(){
    this.modalProject1 = false;
  }

  openModalProject1(){
    this.modalProject1 = true;
  }

  ngOnInit(): void {
  }

}
