import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef;

  ngAfterViewInit(): void {
    (this.title.nativeElement as HTMLElement).innerHTML = `Shop | ${Date()}`;
  }
}
