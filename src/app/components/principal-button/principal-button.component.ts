import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.scss']
})
export class PrincipalButtonComponent implements OnInit {

  constructor() {
  }

  @Input() label: string = '';

  ngOnInit(): void {
  }

}
