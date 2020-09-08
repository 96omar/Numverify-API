import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  // declaring variables
  phoneNum: number;
  country: any;
  phoneList: any = [];
  list: any = [];


  constructor(
    public http: HttpClient,
    public alert: AlertController,
  ) { }

  ngOnInit() {
  }

  countryChange($event) {
    console.log($event.target.value);
    this.country = $event.target.value;

  }
  // con click check method
  check() {
    // declaring variables to prepare to put in url
    const { phoneNum } = this;
    const div = document.getElementById('display');
    const div2 = document.getElementById('display2');
    const div3 = document.getElementById('display3');
    const accesskey = 'c99d5c13c959af223ec11c6beb9409e8';
    const listNumb = document.querySelector('#expenses-list');

    // start api code
    this.http.get('http://apilayer.net/api/validate?access_key=' +
      accesskey + '&number=' + phoneNum + '&country_code=' + this.country + '&format=1').subscribe(data => {
        // process the json data
        console.log(data);
        // put data json in array to view
        this.phoneList = [data];

        // put data(valie) to check if num is valid or not
        this.list = data['valid'];
        console.log(this.list);
        console.log(this.phoneList);
        if (this.list === false || this.list == null) {
          div2.style.display = 'block';
          div.style.display = 'none';
          this.showAlert('Error!', 'Your Phone Num Does not valid');
        } else {
          // view another div
          div3.style.display = 'block';
          div2.style.display = 'none';

          // adding alljson data in list to put it to retrive
          const newItem = document.createElement('ion-item');
          const newItem2 = document.createElement('ion-item');
          const newItem3 = document.createElement('ion-item');
          const newItem4 = document.createElement('ion-item');
          const newItem5 = document.createElement('ion-item');
          const newItem6 = document.createElement('ion-item');
          const newItem7 = document.createElement('ion-item');
          const newItem8 = document.createElement('ion-item');
          const newItem9 = document.createElement('ion-item');


          newItem.textContent = '-Valid: ' + data['valid'];
          newItem2.textContent = '-Number: ' + data['number'];
          newItem3.textContent = '-Local_format: ' + data['local_format'];
          newItem4.textContent = '-International_format: ' + data['international_format'];
          newItem5.textContent = '-Country_code: ' + data['country_code'];
          newItem6.textContent = '-Country_name: ' + data['country_name'];
          newItem7.textContent = '-Location: ' + data['location'];
          newItem8.textContent = '-Carrier: ' + data['carrier'];
          newItem9.textContent = '-Line_typ: ' + data['line_type'];

          listNumb.appendChild(newItem);
          listNumb.appendChild(newItem2);
          listNumb.appendChild(newItem3);
          listNumb.appendChild(newItem4);
          listNumb.appendChild(newItem5);
          listNumb.appendChild(newItem6);
          listNumb.appendChild(newItem7);
          listNumb.appendChild(newItem8);
          listNumb.appendChild(newItem9).innerHTML = '<br> <br>---------------------------';
        }
      });

  }
  // on click check again method
  checkAgian() {
    // declare num value to remove value after checking
    const num = document.querySelector('#num');
    num.value = '';

    // view another div
    const div2 = document.getElementById('display2');
    const div3 = document.getElementById('display3');
    div2.style.display = 'block';
    div3.style.display = 'none';

  }
  checkAgianHistory() {
    // declare num value to remove value after checking
    const num = document.querySelector('#num');
    num.value = '';

    // view another div
    const div2 = document.getElementById('display2');
    const div = document.getElementById('display');
    div2.style.display = 'block';
    div.style.display = 'none';

  }
  // on click check history method
  history() {
    // view another div
    const div3 = document.getElementById('display3');
    const div = document.getElementById('display');
    div.style.display = 'block';
    div3.style.display = 'none';
  }
  // show alert method
  async showAlert(header: string, message: string) {
    // create alert
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await (await alert).present();
  }


}

