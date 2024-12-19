import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  title = 'angular_2025';
//   userList:any[]=[
//     {
//       "id": 1,
//       "name": "Glenda Harris",
//       "company": "Marquardt - Schmitt",
//       "username": "Kenneth27",
//       "email": "Jarrell.Wisoky6@gmail.com",
//       "address": "295 Dante Trafficway",
//       "zip": "45210",
//       "state": "Utah",
//       "country": "Lao People&#x27;s Democratic Republic",
//       "phone": "(933) 723-9617",
//       "photo": "https://json-server.dev/ai-profiles/33.png"
//     }, 
//     {
//       "id": 2,
//       "name": "Schuyler Faker Attribute Error: person.astName is not supported",
//       "company": "Ankunding - Fadel",
//       "username": "Clotilde.Collins",
//       "email": "Oliver_Stiedemann94@yahoo.com",
//       "address": "29989 Rickie Rue",
//       "zip": "50040-4071",
//       "state": "New Hampshire",
//       "country": "Lithuania",
//       "phone": "281-796-5542 x8408",
//       "photo": "https://json-server.dev/ai-profiles/46.png"
//     }, 
//     {
//       "id": 3,
//       "name": "Pink Abshire",
//       "company": "Kessler - Jenkins",
//       "username": "Jewell51",
//       "email": "Sonny_Hartmann@yahoo.com",
//       "address": "110 Church Walk",
//       "zip": "60014-9261",
//       "state": "Florida",
//       "country": "Djibouti",
//       "phone": "807.684.6298 x8820",
//       "photo": "https://json-server.dev/ai-profiles/73.png"
//     }
// ]
userList=signal<any>([
  {
    "id": 1,
    "name": "Glenda Harris",
    "company": "Marquardt - Schmitt",
    "username": "Kenneth27",
    "email": "Jarrell.Wisoky6@gmail.com",
    "address": "295 Dante Trafficway",
    "zip": "45210",
    "state": "Utah",
    "country": "Lao People&#x27;s Democratic Republic",
    "phone": "(933) 723-9617",
    "photo": "https://json-server.dev/ai-profiles/33.png"
  }, 
  {
    "id": 2,
    "name": "Schuyler Faker Attribute Error: person.astName is not supported",
    "company": "Ankunding - Fadel",
    "username": "Clotilde.Collins",
    "email": "Oliver_Stiedemann94@yahoo.com",
    "address": "29989 Rickie Rue",
    "zip": "50040-4071",
    "state": "New Hampshire",
    "country": "Lithuania",
    "phone": "281-796-5542 x8408",
    "photo": "https://json-server.dev/ai-profiles/46.png"
  }
]
)
constructor(private http:HttpClient,private cdr:ChangeDetectorRef){

}
ngOnInit(){
  this.http.get("https://fake-json-api.mock.beeceptor.com/users").subscribe((res:any)=>{
    console.log(res);
    this.userList.set(res);
    this.title="Angular 19 arrives";
    //this.cdr.detectChanges();
  })
}
}
