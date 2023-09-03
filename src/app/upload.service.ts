import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private baseUrl = 'http://localhost:8080/api/arquivo';

  private uploadUrl = this.baseUrl + '/upload'; 
  private uploadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  
  getDadosConsolRegiao(): Observable<any> {
    return this.http.get(`${this.baseUrl}/consolidado`);
  }

  uploadArquivoXML(file: File): Observable<any> {
    this.uploadingSubject.next(true); 
  
    const formData = new FormData();
    formData.append('arquivo', file);
  
    return this.http.post(this.uploadUrl, formData).pipe(
      finalize(() => {
        this.uploadingSubject.next(false); 
      })
    );
  }

  isUploading(): Observable<boolean> {
    return this.uploadingSubject.asObservable();
  }
}
