import { Component, OnInit } from '@angular/core';
import { PublicService } from './service/public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  estatisticasCovid;
  totalCases = 0;
  totalSuspects = 0;
  totalRefuses = 0;
  totalDeaths = 0;

  dataAtual = new Date().toLocaleString('pt-BR');

  constructor(private publicService: PublicService) {
  }

  ngOnInit(): void {
    this.recuperarDados();
  }

  recuperarDados() {
    try {
      this.publicService.recuperarDados().subscribe(response => {
        this.estatisticasCovid = response.data;
        response.data.forEach(covid => {
          this.totalCases += parseInt(covid.cases);
          this.totalDeaths += parseInt(covid.deaths);
          this.totalRefuses += parseInt(covid.refuses);
          this.totalSuspects += parseInt(covid.suspects);
        });
      });
    } catch {
      alert('Serviço indisponível, favor, verificar se o backend está rodando.');
    }
  }

}
