import { Pipe, PipeTransform } from "@angular/core";
import { filter } from "rxjs";

@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterByPipe implements PipeTransform{
    // TODO get rid of any values
    transform(value: any, filterString:string, propName:string) {
        if(value.length===0||filterString===''){
            return value;
        }
        return value.filter((item:any) => item[propName] === filterString);
    }
}