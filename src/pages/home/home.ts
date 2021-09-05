import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DetailsFormgroup: FormGroup;
  index:any = 0;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    this.DetailsFormgroup = this.formBuilder.group({
      
      surveyourID: ['', Validators.required],
      surveyourName: ['', Validators.required],
      surveyourMono: ['', Validators.required],
      dateofVisit: ['', Validators.required],
      airIndexValue: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      taluka: [''],
      panchayat: [''],
      village: [''],
      location: ['', Validators.required],

      pm25: ['', Validators.required],
      pm10: ['', Validators.required],
      no2: ['', Validators.required],
      nh3: ['', Validators.required],
      so2: ['', Validators.required],
      co: ['', Validators.required],
      no: ['', Validators.required],
      ozone: ['', Validators.required],

      profileId: [''],
      firstName: ['', Validators.required],
      surname: [''],
      fatherName: ['', Validators.required],
      // surveyourID: ['', Validators.compose([Validators.required])],
      // surveyourName: ['', Validators.compose([Validators.required])],
      // surveyourMono: ['', Validators.compose([Validators.required])],
      // dateofVisit: ['', Validators.compose([Validators.required])],
      // airIndexValue: ['', Validators.compose([Validators.required])],
      // country: ['', Validators.compose([Validators.required])],
      // state: ['', Validators.compose([Validators.required])],
      // district: ['', Validators.compose([Validators.required])],
      // taluka: [''],
      // panchayat: [''],
      // village: [''],
      // location: ['', Validators.compose([Validators.required])],

      // pm25: ['', Validators.compose([Validators.required])],
      // pm10: ['', Validators.compose([Validators.required])],
      // no2: ['', Validators.compose([Validators.required])],
      // nh3: ['', Validators.compose([Validators.required])],
      // so2: ['', Validators.compose([Validators.required])],
      // co: ['', Validators.compose([Validators.required])],
      // no: ['', Validators.compose([Validators.required])],
      // ozone: ['', Validators.compose([Validators.required])],

      // profileId: [''],
      // firstName: ['', Validators.compose([Validators.required])],
      // surname: [''],
      // fatherName: ['', Validators.compose([Validators.required])],
    });
  }

  submitDetails() {
  }

  radioValue(value) {
    console.log(value)
  }

  toggleGroup(index) {
		console.log("index : " + index);
		if (index != this.index)
			this.index = index;
		else
			this.index = 0;
  }

}


// b changes added
// a changes added