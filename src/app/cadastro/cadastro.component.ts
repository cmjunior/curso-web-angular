import { CepService } from './../shared/cep.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, map, of, switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form!: FormGroup

  constructor(
    private cepService: CepService,
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      documento: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cep: [''],
      endereco: ['']
    });

    this.form.get('cep')?.valueChanges.pipe(
      debounceTime(500),
      map( (cep: string) => {
        const _cep = cep.replace(/[_\W]+/g,'');
        return _cep.length == 8 ? _cep : undefined;        
      }),
      switchMap( cep => {        
        return cep ? this.cepService.buscaCEP(cep) : of(undefined)
      })
    ).subscribe( (result: any) => {
      if ( result ) {
        this.form.get('endereco')?.setValue(result.logradouro);
      }
    })
  }

  onSalvarUsuario() {
    this.firebaseService.doRegisterUser(this.form.get('email')?.value, this.form.get('senha')?.value)
      .then( (usuario: any) => {
        this.form.get('senha')?.disable;
        this.firebaseService.doCreateUsuario(this.form.value, usuario.user.uid).then( result => {
          window.alert('Usuario cadastrado com sucesso!');
        })
      })
  }
}
