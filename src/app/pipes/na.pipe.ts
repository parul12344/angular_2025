import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na',
  standalone: true,
  pure:true
})
export class NaPipe implements PipeTransform {

  transform(value: any): any {
    console.log(">>>>>>>>>>>");
    if(value)
    return value +"*";
    else
    return "na";
  }

}
