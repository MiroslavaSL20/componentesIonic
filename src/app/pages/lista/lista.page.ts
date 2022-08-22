import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

usuarios: Observable<any>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
this.usuarios =  this.dataService.getusuarios();
  }

  favorite(user: any){console.log('favorite',user);

  }

  share(user: any){console.log('share',user)}

  

}
