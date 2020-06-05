import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  listaEstados;
  constructor() {
    this.listaEstados = this.getCardsCovid();
   }

  ngOnInit(): void {
  }


  getCardsCovid(){
    return [
      {
        estado: 'São Paulo',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Rio de Janeiro',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Paraíba',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Pará',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Rondônia',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Amazonas',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
      {
        estado: 'Amapá',
        confirmados: '10',
        suspeitas: '1000',
        recuperados: '10000',
        mortes: '10',
      },
    ]
  }

}
