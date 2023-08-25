import { Component, OnInit } from "@angular/core";
@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
    
})
export class ServerComponent implements OnInit {
   allowNewServer = false;
   serverCreateStatut = 'No Server create';
   serverName="Testserver";
   serverCreate= false;
constructor(){
    setTimeout(() => {
        this.allowNewServer = true;
   }, 2000);
}
//serverID=10;
//serverStatus: string='offline'
 ngOnInit(): void {
     
 }
 getServerCreateStatut(){
  this.serverCreate=true;
  this.serverCreateStatut='Server Status create';
 }

 getColor(){
  return this.serverCreateStatut ==='online' ? 'green' :'red';
}

//getServerStatut(){
   // return this.serverStatus;
//}
}