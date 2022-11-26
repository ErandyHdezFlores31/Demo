import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts = [];
    for (const inventario of value) {
      if (inventario.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(inventario);
      }else if(inventario.clave.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(inventario);
      }else if(inventario.categorias.nomcategoria.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(inventario);
      };
    };
    return resultPosts;
  }

}

