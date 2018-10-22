import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {

  @Input('appActive') isActive: boolean;

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor() { }

  ngOnChanges() {
    console.log("un chagement a ete detecte dans la directice appActive. isActive:" + this.isActive);
    if (this.isActive) {
      this.backgroundColor = "blue";
      this.color = "white";
    } else {
      this.backgroundColor = "transparent";
      this.color = "black";
    }
  }

}
