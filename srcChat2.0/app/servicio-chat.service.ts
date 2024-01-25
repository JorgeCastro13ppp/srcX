import { Inject, inject, Injectable, LOCALE_ID } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { Chat } from './chat';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioChatService {

  constructor(private httpCliente:HttpClient, @Inject(LOCALE_ID)public locale:string) {   }
  altaCliente(user: Usuario){
   return this.httpCliente.post<Usuario>("http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php",user);
  }

  obtenerMensajes():Observable<Chat[]>{
   return this.httpCliente.get<Chat[]>("http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php");
  }
  altaMensaje(msg: Chat){
    let fecha = new Date;
    msg.fecha=formatDate(fecha,"HH:mm:ss",this.locale);
   return this.httpCliente.post<Chat>("http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php",msg);
  }

  seleccionarUsuario(user: Usuario):Observable<Usuario>{
   return this.httpCliente.get<Usuario>("http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email="+user.email+"&pwd="+user.pwd);
  }
}
