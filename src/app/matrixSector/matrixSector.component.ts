import { Component } from '@angular/core'; 
import { environment, myNewConstant } from '../../environments/environments';
import ratios from "./sectorRatios.json";

@Component({ // Add the @Component decorator.
  selector: 'matrix-sector', 
  templateUrl: './matrixSector.component.html',
  styleUrls: ['./matrixSector.component.css']
})


export class SectorComponent { 

  sektorinimi: any;
  ratioData: any;
  sektorArray: any = [];
  oigeKirjeSektor: any;

  constructor() { 
    this.sektorinimi = environment.sektorNimi;
    localStorage.setItem("sektorinimi", this.sektorinimi);
    this.ratioData = ratios;
    
  }

  ReadMore:boolean = true
    visible:boolean = false
    onclick()
    {
      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    }

    ReadMore2:boolean = true
    visible2:boolean = false
    onclick2()
    {
      this.ReadMore2 = !this.ReadMore2;
      this.visible2 = !this.visible2
    }

    ReadMore3:boolean = true
    visible3:boolean = false
    onclick3()
    {
      this.ReadMore3 = !this.ReadMore3;
      this.visible3 = !this.visible3;
    }

    ReadMore4:boolean = true
    visible4:boolean = false
    onclick4()
    {
      this.ReadMore4 = !this.ReadMore4;
      this.visible4 = !this.visible4;
    }

    ngOnInit() {

      for (let key in ratios.ratiosSektor) {
        if (ratios.ratiosSektor.hasOwnProperty(key)) {
          this.sektorArray.push(ratios.ratiosSektor[key]);
        }
      }
      //console.log("sektoriArray", this.sektorArray);  // Sisaldab kogu faili...
      this.filterSektorKirjet();
  
    }  

    filterSektorKirjet(){
      this.oigeKirjeSektor = this.sektorArray.filter(e=>{
        return e.Sektor === this.sektorinimi
      })  
    }


}