import { Component, OnInit } from "@angular/core";
import ratios from "./maakondRatios.json";
import { environment, myNewConstant } from '../../environments/environments';

@Component({
  selector: "matrix-maakond",
  templateUrl: "./matrixKOVMaakond.component.html",
  styleUrls: ["./matrixKOVMaakond.component.css"]
})
export class KOVMaakondComponent implements OnInit {

omvnimi: string;
ratioData: any;
kovArray: any = [];
maakonnanimi: string;
oigeKirjeMaakond: any;
//maakondArray: any = [];

  constructor() { //Siin toob sisse
    //this.omvkood = environment.kovKood;
    this.omvnimi = environment.omvNimi;
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

    this.maakonnaValik();
    
    for (let key in ratios.ratiosMaakond) {
      if (ratios.ratiosMaakond.hasOwnProperty(key)) {
        this.kovArray.push(ratios.ratiosMaakond[key]);
      }
    }
    console.log("Maakonna nimi", this.maakonnanimi);
    console.log("Array", this.kovArray);
    this.filterKirjet();

    this.filterMaakondKirjet();

  }
  
//https://www.neti.ee/cgi-bin/teema/RIIK_JA_YHISKOND/Regioonid/Vallad/
  maakonnaValik() {

    this.maakonnanimi = "Teil maakondlik alluvus puudub."

    if (this.omvnimi == "Anija vald" || this.omvnimi == "Harku vald" || this.omvnimi == "Jõelähtme vald" || this.omvnimi == "Kiili vald" || this.omvnimi == "Kose vald" || this.omvnimi == "Kuusalu vald" || this.omvnimi == "Lääne-Harju vald" || this.omvnimi == "Raasiku vald" || this.omvnimi == "Rae vald" || this.omvnimi == "Saku vald" || this.omvnimi == "Saue vald" || this.omvnimi == "Viimsi vald") {
      this.maakonnanimi = "Harju maakond";
    }
    else if (this.omvnimi == "Hiiumaa vald") {
      this.maakonnanimi = "Hiiu maakond";
    }
    else if (this.omvnimi == "Alutaguse vald" || this.omvnimi == "Jõhvi vald" || this.omvnimi == "Lüganuse vald" || this.omvnimi == "Toila vald") {
      this.maakonnanimi = "Ida-Viru maakond";
    }
    else if (this.omvnimi == "Jõgeva vald" || this.omvnimi == "Mustvee vald" || this.omvnimi == "Põltsamaa vald") {
      this.maakonnanimi = "Jõgeva maakond";
    }
    else if (this.omvnimi == "Järva vald" || this.omvnimi == "Türi vald") {
      this.maakonnanimi = "Järva maakond";
    }
    else if (this.omvnimi == "Lääne-Nigula vald" || this.omvnimi == "Vormsi vald") {
      this.maakonnanimi = "Lääne maakond";
    }
    else if (this.omvnimi == "Haljala vald" || this.omvnimi == "Kadrina vald" || this.omvnimi == "Rakvere vald" || this.omvnimi == "Tapa vald" || this.omvnimi == "Vinni vald" || this.omvnimi == "Viru-Nigula vald" || this.omvnimi == "Väike-Maarja vald") {
      this.maakonnanimi = "Lääne-Viru maakond";
    }
    else if (this.omvnimi == "Kanepi vald" || this.omvnimi == "Põlva vald" || this.omvnimi == "Räpina vald") {
      this.maakonnanimi = "Põlva maakond";
    }
    else if (this.omvnimi == "Häädemeeste vald" || this.omvnimi == "Kihnu vald" || this.omvnimi == "Lääneranna vald" || this.omvnimi == "Põhja-Pärnumaa vald" || this.omvnimi == "Saarde vald" || this.omvnimi == "Tori vald") {
      this.maakonnanimi = "Pärnu maakond";
    }
    else if (this.omvnimi == "Kehtna vald" || this.omvnimi == "Kohila vald" || this.omvnimi == "Märjamaa vald" || this.omvnimi == "Rapla vald") {
      this.maakonnanimi = "Rapla maakond";
    }
    else if (this.omvnimi == "Muhu vald" || this.omvnimi == "Ruhnu vald" || this.omvnimi == "Saaremaa vald") {
      this.maakonnanimi = "Saare maakond";
    }
    else if (this.omvnimi == "Elva vald" || this.omvnimi == "Kambja vald" || this.omvnimi == "Kastre vald" || this.omvnimi == "Luunja vald" || this.omvnimi == "Nõo vald" || this.omvnimi == "Peipsiääre vald" || this.omvnimi == "Tartu vald") {
      this.maakonnanimi = "Tartu maakond";
    }
    else if (this.omvnimi == "Otepää vald" || this.omvnimi == "Tõrva vald" || this.omvnimi == "Valga vald") {
      this.maakonnanimi = "Valga maakond";
    }
    else if (this.omvnimi == "Mulgi vald" || this.omvnimi == "Põhja-Sakala vald" || this.omvnimi == "Viljandi vald") {
      this.maakonnanimi = "Viljandi maakond";
    }
    else if (this.omvnimi == "Antsla vald" || this.omvnimi == "Rõuge vald" || this.omvnimi == "Setomaa vald" || this.omvnimi == "Võru vald") {
      this.maakonnanimi = "Võru maakond";
    }

    localStorage.setItem("maakonnanimi", this.maakonnanimi);

  }
 
  filterMaakondKirjet(){
    this.oigeKirjeMaakond= this.kovArray.filter(e=>{
      return e.MAAKOND === this.maakonnanimi
    })  
  }

  filterKirjet(){
    var oigeKirje= this.kovArray.filter(e=>{
      return e.MAAKOND === this.omvnimi
    })

    console.log("Kirje on see maakonnas: ", oigeKirje);  //Kirje tuleb ära
    
    oigeKirje.forEach(obj=> {
      console.log(obj.keskmineLVKK);
      localStorage.setItem("LVKK", obj.keskmineLVKK); //a
      var summa = parseFloat(obj.keskmineLVKK)*2;
      console.log("Korrutis maakonnas", summa);
    });

    oigeKirje.forEach(obj=> {
      console.log(obj.nimi);
      localStorage.setItem("Omavalitsus", obj.nimi); //a
      //var summa = parseFloat(obj.keskmineLVKK)*2;
      //console.log("Korrutis", summa);
    });


  }

}


