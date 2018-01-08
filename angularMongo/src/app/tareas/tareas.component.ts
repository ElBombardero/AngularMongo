import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  tareas: Array<object>;
  texto: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.tareas = [];
    this.peticionExterna();
  }
  actualizar() {
    this.peticionExterna();
  }
  peticionExterna() {
    this.http.request('http://nodejs.njs.jelastic.vps-host.net/api/lista')
    .subscribe((respuesta: Response) => {
      const leng = Object.values(this.tareas);
      this.tareas = respuesta.json();
      /*console.log(respuesta.json());
      http://localhost:9090/api/lista
      const key = Object.keys(respuesta.json());
      for ( let i = 0; i < key.length; i ++) {
        console.log(respuesta.json()[i].texto);
      }*/
    });
  }

  crearTarea() {
    const items = {texto: this.texto };
    this.http.post('http://nodejs.njs.jelastic.vps-host.net/api/lista', items)
    .subscribe((respuesta: Response) => {
      console.log('guardado');
      this.peticionExterna();
    });
  }
}
