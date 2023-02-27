import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  constructor(
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  success(message: string, life?: number) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: message,
      life: life,
    });
  }
  error(message: string, sticky: boolean = true, life: number = 5000) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: message,
      sticky: sticky,
      life: life,
    });
  }

  loading() {
    this.spinner.show();
  }

  hide() {
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
