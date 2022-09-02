import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore, collection, doc, setDoc, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  usuariosCollection: any

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    this.usuariosCollection = collection(this.firestore, 'usuarios');
  }

  doRegisterUser(email: string, senha: string) {
    return createUserWithEmailAndPassword(this.auth, email, senha)
  }

  doCreateUsuario(usuario: any, id: string) {
    return setDoc(doc(this.firestore, 'usuarios', id), usuario);
  }

  login(email: string, senha: string) {
    return signInWithEmailAndPassword(this.auth, email, senha)
  }

  listarUsuarios(){
    return collectionData(this.usuariosCollection)
  }
}
