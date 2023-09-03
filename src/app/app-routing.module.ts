import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadDeArquivosComponent } from './upload-de-arquivos/upload-de-arquivos.component';

const routes: Routes = [
  { path: '', component: UploadDeArquivosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
