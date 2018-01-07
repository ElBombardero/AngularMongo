import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
declare var $: any;
@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {
  @Input()
  tareaInfo: any;
  texto: any;
  valor: any;
  nuevaCantidad: Number;

  @Output()
  actualizar: EventEmitter <number> = new EventEmitter();

  constructor(private http: Http) { }

  ngOnInit() {
  }

  Eliminar(parametro) {
    this.http.delete('http://localhost:9090/api/lista/' + parametro)
    .subscribe( (respuesta: Response) => {
      this.actualizar.emit();
    });
  }

  editar(id) {
    const items = {texto: this.texto};
    this.http.put('http://localhost:9090/api/lista/' + id, items)
    .subscribe( (respuesta: Response) => {
      this.actualizar.emit();
      console.log('editado');
      console.log('id:' + id);
      console.log('texto:' + this.texto);
    });
  }
  valorar(id , cantidad, valor) {
    switch (valor) {
      case 'positivo':
          if (cantidad === undefined) {
            this.nuevaCantidad = 1;
          }else {
            this.nuevaCantidad = cantidad + 1;
          }
        break;
      case 'negativo':
        if (cantidad === undefined) {
          this.nuevaCantidad = -1;
        }else {
          this.nuevaCantidad = cantidad - 1;
        }
        break;
      default:
        console.log('no paso na');
    }
    const items = {valor: this.nuevaCantidad };
    this.http.put('http://localhost:9090/api/lista/' + id, items)
    .subscribe( (respuesta: Response) => {
      this.actualizar.emit();
    });
  }
  visible(parametro) {
    if ( $('#' + parametro).css('visibility') === 'hidden') {
      $('#' + parametro).css('visibility', 'visible');
    } else {
      $('#' + parametro).css('visibility', 'hidden');
    }
  }
}
