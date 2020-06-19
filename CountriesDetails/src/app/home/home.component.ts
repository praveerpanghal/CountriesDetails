import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { APIService } from '../Shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Regions: any = ['Asia', 'Europe']
  Reg:any;
  countryname: any;
  model:any ={};
  Countrieslist:any = [];
  countryDetails:any;
  Name:any;
  Capital:any;
  Population:any;
  Flag:any;
  Currencies:any=[];
  constructor(private apiService: APIService ) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      console.log(data);
    });
  
  }

  Regionchange(e)
{
  
  this.Reg=this.model.region;
  console.log(this.Reg);


  if(this.Reg == 'Asia'){
    this.FetchAsiaCountries();
  }
  else{
    this.FetchEuropeCountries();
  }
}


  onSubmit(f:NgForm) {
  
    this.Reg=this.model.region;
    console.log(this.Reg);
    
    this.countryname=this.model.country;
    console.log(this.countryname);
    this.apiService.FetchAsia().subscribe((data: any) => {

      data.forEach((element, index) => {
       
        if(this.countryname==element.name){
         
this.countryDetails=element;
this.Name=element.name;
this.Population=element.population;
this.Flag=element.flag;

this.Currencies=[];
this.Currencies.push(element.currencies[0].name);
this.Capital=element.capital;
console.log(this.countryDetails);
        }
       
        
      })
    });
   
    
  }

  FetchAsiaCountries(){
    this.apiService.FetchAsia().subscribe((data: any) => {
      this.Countrieslist=[];
  //this.Countrieslist=data['name']
  //this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
  
  data.forEach((element, index) => {
    this.Countrieslist.push(element.name);
    
    
  })
})
  }
  FetchEuropeCountries(){
    this.apiService.FetchEurope().subscribe((data: any) => {
      this.Countrieslist=[];
      //this.Countrieslist=data['name']
      console.log(data)
      data.forEach((element, index) => {
        this.Countrieslist.push(element.name);
        
        
      })
    })
      }
    


}
