import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'makeItShort'
})
export class MakeitShortPipe implements PipeTransform{
    transform(value: any, limit:number) {

        return value.length > limit ? value.substr(0,limit)+ '...' : value;
    }
}