import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-reorder',
  templateUrl: './lista-reorder.page.html',
  styleUrls: ['./lista-reorder.page.scss'],
})
export class ListaReorderPage implements OnInit {

  personajes: string[] = ['Aquaman','Superman','Batman','Flash','Wonder Woman']
  constructor() { }

  ngOnInit() {
  }
  doReorder(event:any) {
    console.log(event);

    const itemMover =  this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to,0,itemMover);

 event.detail.complete();
 console.log(this.personajes);
}
}