import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogoDaVelhaService.inicializar();
  }

  /**
 * Retorna se a tela de início deve ser exibida
 * @return boolean
 */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  /**
 * Retorna se o tabuleiro deve ser exibido
 * @return boolean
 */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicia os dados de um novo jogo
   * @return boolean
   */
  get iniciarJogo(): void {
    return this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar num local no tabuleiro
   * @param posX number posX
   * @param posY number posY
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordena informada
   * @param posX number posX
   * @param posY number posY
   * @returns boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
     * Retorna se a peça O deve ser exibida para a coordena informada
     * @param posX number posX
     * @param posY number posY
     * @returns boolean
     */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
     * Retorna se a marcação de vitória deve ser exibida para a coordena informada
     * @param posX number posX
     * @param posY number posY
     * @returns boolean
     */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
 * Inicia um novo jogo.
 * 
 * @return void
 */
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }
}
