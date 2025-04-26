import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import { FileUploadModule } from 'primeng/fileupload';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  imports: [
    ButtonModule,
    InputTextModule,
    IftaLabelModule,
    PasswordModule,
    ReactiveFormsModule,
    FileUploadModule
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  username: string = 'Test';

  ngOnInit(): void {
    this.username = 'Lowie Dave';
  }

  uploadForm = this.formBuilder.group({
    file: ['', Validators.required]
  });

}
