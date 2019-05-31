import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-debug-form',
  templateUrl: './debug-form.component.html',
  styleUrls: ['./debug-form.component.css']
})
export class DebugFormComponent implements OnInit, OnChanges {

  @Input() formulario;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changes.formulario: ', changes.formulario.currentValue);
  }

}
