import { Component } from '@angular/core';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  listaMensajes:Chat[]=[];
  constructor(private servicio:ServicioChatService){

  }
  msjchat: Chat={
    id:0,
    usuario:'',
    fecha:'',
    mensaje:''
  }
leerMensaje() {
  this.servicio.obtenerMensajes().subscribe((msg:Chat[])=>{this.listaMensajes=msg;})
}
insertarMensaje() {

}

}
