import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'ObjectToArray'})
export class ObjectToArray implements PipeTransform {
  transform(value) : any {
    let keys = [];
    for (let key in value) {
      keys.push(value[key]);
    }
    return keys;
  }
}