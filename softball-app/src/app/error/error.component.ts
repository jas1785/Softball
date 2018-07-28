import { Component, OnInit, Input } from '@angular/core';
import { ErrorConfig } from '../common/errorConfig';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input()
  errorConfig: ErrorConfig;

  constructor() { }

  ngOnInit() {
  }

}
