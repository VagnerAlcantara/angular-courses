import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.dadosService.obterDados().subscribe(
      dados=>{
        this.dados = dados;
        this.init();
      }
    )
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o que permite a integração da API com o Angular
   * 
   * @returns void
   */
  init(): void{
    if(typeof(google)!== 'undefined'){
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(()=> {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000)
    }
  }

  exibirGraficos(): void{
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();

  }

  /**
   * Exibe o gráfico pie chart
   * 
   * @return void
   */
  exibirPieChart(): void{
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

   /**
   * Exibe o gráfico pie chart em 3D
   * 
   * @return void
   */
  exibir3dPieChart(): void{
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);

    const opcoes = this.ObterOpcoes();
    opcoes['is3D'] = true;

    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut Chart
   * 
   * @return void
   */
  exibirDonutChart(): void{
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.ObterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart
   * 
   * @return void
   */
  exibirBarChart(): void{
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

 /**
   * Exibe o gráfico Line Chart
   * 
   * @return void
   */
  exibirLineChart(): void{
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

  /**
   * Exibe o gráfico Colunm Chart
   * 
   * @return void
   */
  exibirColumnChart(): void{
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obterDataTable(), this.ObterOpcoes());
  }

  /**
   * Cria e retorna um DataTable da API de gráficos responsável por definir os dados do gráfico
   * 
   * @return any
   */
  obterDataTable(): any{
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título e tamanho do gráfico
   * 
   * @return any
   */
  ObterOpcoes(): any{
    return{
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    }
  }
}
