import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8080/api/arquivo';

  private uploadUrl = this.baseUrl + '/upload'; // Substitua pela URL do seu backend de upload
  private uploadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  // Método para enviar arquivos XML para o backend
  enviaArquivo(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/upload`, formData);
  }

  // Método para recuperar dados consolidados por região
  getDadosConsolidadosPorRegiao(): Observable<any> {
    return this.http.get(`${this.baseUrl}/consolidado`);
  }

  uploadXmlFile(file: File): Observable<any> {
    this.uploadingSubject.next(true); // Define o estado como "em andamento" antes de iniciar o upload
  
    const formData = new FormData();
    formData.append('xmlFile', file);
  
    // Envia o arquivo para o backend
    return this.http.post(this.uploadUrl, formData).pipe(
      finalize(() => {
        this.uploadingSubject.next(false); // Define o estado como "concluído" após o upload
      })
    );
  }

  isUploading(): Observable<boolean> {
    return this.uploadingSubject.asObservable();
  }
}
