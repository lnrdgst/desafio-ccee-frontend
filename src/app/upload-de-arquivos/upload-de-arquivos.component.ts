import { Component } from '@angular/core';
import { UploadService } from '../upload.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upload-de-arquivos',
  templateUrl: './upload-de-arquivos.component.html',
  styleUrls: ['./upload-de-arquivos.component.sass']
})
export class UploadDeArquivosComponent {
  constructor(private uploadService: UploadService) { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadService.uploadXmlFile(file).subscribe(
        response => {
          console.log('Upload realizado com sucesso.', response);
          // Execute ações adicionais após o envio, se necessário
        },
        error => {
          console.error('Falha no upload do arquivo.', error);
          // Trate erros de envio aqui, se necessário
        }
      );
    }
  }

  getDadosConsolidadosPorRegiao() {
    this.uploadService.getDadosConsolidadosPorRegiao().subscribe(
      data => {
        console.log('Dados consolidados por região:', data);
        // Faça algo com os dados, como exibir no seu componente
      },
      error => {
        console.error('Erro ao recuperar dados consolidados por região.', error);
        // Trate erros de recuperação de dados aqui, se necessário
      }
    );
  }

  isUploading(): Observable<boolean> {
    return this.uploadService.isUploading();
  }
}
