import { FirebaseService } from './../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  redirectURL: any = undefined
  
  constructor(
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,    
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      debugger
      if ( params.has('redirectURL') ) {
        this.redirectURL = params.get('redirectURL');
      }
    })

    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  acessar() {
    this.firebaseService.login(this.form.get('email')?.value, this.form.get('password')?.value).then((result) => {
      if ( this.redirectURL ) {
        this.router.navigateByUrl(this.redirectURL)
      }
    })
  }

}
