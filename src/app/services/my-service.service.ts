import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper. Ullamcorper eget nullafacilisi etiam dignissim diam quis enim. Enim eu turpis egestas pretium aenean pharetra magna ac. Enimnunc faucibus a pellentesque sit amet porttitor eget dolor."

  constructor() { }
  getLorem(){
    return this.text
}
}