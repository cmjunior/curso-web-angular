import { FirebaseService } from './../shared/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  usuarios$!: Observable<any>

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.usuarios$ = this.firebaseService.listarUsuarios()
  }

}
