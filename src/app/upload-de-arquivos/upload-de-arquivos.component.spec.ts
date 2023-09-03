import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDeArquivosComponent } from './upload-de-arquivos.component';

describe('UploadDeArquivosComponent', () => {
  let component: UploadDeArquivosComponent;
  let fixture: ComponentFixture<UploadDeArquivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadDeArquivosComponent]
    });
    fixture = TestBed.createComponent(UploadDeArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
