import { Component, OnInit, Injectable } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    selectedCountry: any;

    states = {};

  countries = [{
    id: 1, name: 'INDIA', states: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
   'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Tamil Nadu', 'Telangana' ]
  },
  {
    id: 2, name: 'USA', states: ['Alabama', 'Alaska', 'Arizona', 'California', 'Colorado', 'Delaware', 'Florida', 'Georgia', 'Kansas', 'Missouri',
  'New York', 'New Jersey', 'New Mexico', 'South Carolina', 'Pennsylvania', 'Texas', 'Washington' ]
  },
  ];

  ngOnInit() {
    this.states = this.countries.filter(x => x.id == 1)[0].states;
  }

  onChange(deviceValue) {
    this.states = this.countries.filter(x => x.id == deviceValue)[0].states;
  }
}

