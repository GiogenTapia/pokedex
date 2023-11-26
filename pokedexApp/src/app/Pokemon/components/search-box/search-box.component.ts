import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebouns : EventEmitter<string> = new EventEmitter();
  @Input() placeholder : string = "";

  debounce: Subject <string> = new Subject();
  termino : string = '';


  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(300)
    ).subscribe(valor =>{
      this.onDebouns.emit(valor)
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);

  }
  teclaPresionada(){
    this.debounce.next(this.termino);

  }

}
