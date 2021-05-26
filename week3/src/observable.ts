// Source code here

import { Observable, of } from 'rxjs';
import { map, filter, scan, retry, catchError } from 'rxjs/operators';

let cities = ["Varanasi", "Mathura", "Ayodhya"]; 
cities.map(c => "Holy "+ c)
.forEach(el => console.log(el)); 
of(cities).pipe(
    map(dataArray => dataArray.join(", "))
).subscribe(res => console.log(res)); 
