import { Component } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {
  randomImageUrl: string = '';
  private imageUrls: string[] = [
    'https://tutorialehtml.com/assets_tutorials/img/image.jpg',
    'https://media.istockphoto.com/id/473426392/es/foto/meta-tag-c%C3%B3digo-html-en-pantalla-de-ordenador.webp?s=1024x1024&w=is&k=20&c=UDHBvIIG3fKsRJXIGIAT0VFN8CuT3AOcSq7FkYjNBlc=',
    'https://www.moto125.cc/images/stories/motos/m375/f109.jpg',
    'https://unpocodeoxido.com/1807-thickbox_default/effecto-px-5-sport-nogal.jpg',
    'https://c7.alamy.com/compes/hf28b1/una-marina-con-el-1er-batallon-2-regimiento-de-la-infanteria-de-marina-cuenta-su-dinero-para-pagar-unos-pocos-elementos-de-confort-en-un-puesto-movil-exchange-o-px-durante-un-guerrero-express-servicios-equipo-mision-en-el-norte-de-la-provincia-de-helmand-julio-16-30-un-equipo-se-compone-de-una-wes-disburser-y-un-equipo-de-especialistas-en-servicios-a-la-comunidad-del-cuerpo-de-infanteria-de-marina-viajan-alrededor-de-puestos-de-combate-y-bases-de-operaciones-de-avanzada-en-el-norte-de-la-provincia-de-helmand-para-proporcionar-servicios-a-los-marines-dentro-de-la-zona-de-operaciones-el-desembolso-de-marine-permite-a-los-miembros-del-servicio-para-sacar-algun-dinero-en-efectivo-mientras-el-equipo-mccs-configura-un-movil-px-y-la-moral-satelite-hf28b1.jpg'

  ];

  generateRandomImage(): void {
    const randomIndex = Math.floor(Math.random() * this.imageUrls.length);
    const randomImageUrl = this.imageUrls[randomIndex];


    const imgElement: HTMLImageElement | null = document.querySelector('#randomImage');

    if (imgElement) {
      imgElement.src = randomImageUrl;
    }
  }
}
