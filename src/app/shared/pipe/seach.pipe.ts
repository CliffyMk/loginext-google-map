import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchPipe'

})
export class SearchPipe implements PipeTransform {
    transform(value: any, key: any, key2: any) {
        if (key.length > 0) {
            return value.filter((data: any) => {
                if (data[key2].toLowerCase().indexOf(key) !== -1) {
                    return true;
                }
            });
        } else { return value; }
    }
}
