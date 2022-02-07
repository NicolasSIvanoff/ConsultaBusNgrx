import { HttpErrorResponse } from '@angular/common/http';

export class ErrorBuilder {
  static genericError(error: HttpErrorResponse): string {
    const errorMessage2 = error?.message;
    if (!!errorMessage2) {
      return 'Erro! Tente novamente.';
    }
    return 'Tivemos um problema, entre em contato com o administrador do sistema.';
  }
}
