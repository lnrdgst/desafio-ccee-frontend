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

  carregarArquivos(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadService.uploadArquivoXML(file).subscribe(
        response => {
          console.log('Upload realizado com sucesso.', response);
        },
        error => {
          console.error('Falha no upload do arquivo.', error);
        }
      );
    }
  }

  getDadosConsolidadosPorRegiao() {
    this.uploadService.getDadosConsolRegiao().subscribe(
      dado => {
        console.log('Dados consolidados por região:', dado);
      },
      error => {
        console.error('Falha ao recuperar dados consolidados por região.', error);
      }
    );
  }

  carregando(): Observable<boolean> {
    return this.uploadService.isUploading();
  }
}
