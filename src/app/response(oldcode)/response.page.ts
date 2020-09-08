import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

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

  check() {
    const { phoneNum } = this;
    const div = document.getElementById('display');
    const div2 = document.getElementById('display2');
    const accesskey = 'c99d5c13c959af223ec11c6beb9409e8';
    const listNum = document.querySelector('#list');
    const listNumb = document.querySelector('#expenses-list');


    this.http.get('http://apilayer.net/api/validate?access_key=' +
      accesskey + '&number=' + phoneNum + '&country_code=' + this.country + '&format=1').subscribe(data => {
        // process the json data
        console.log(data);
        this.phoneList = [data];


        this.list = data['valid'];
        console.log(this.list);
        console.log(this.phoneList);
        if (this.list === false || this.list == null) {
          div2.style.display = 'block';
          div.style.display = 'none';
          this.showAlert('Error!', 'Your Phone Num Does not valid');
        }else{

          div.style.display = 'block';
          div2.style.display = 'none';
          const newItem = document.createElement('ion-item');
          const newItem2 = document.createElement('ion-item');
          const newItem3 = document.createElement('ion-item');
          const newItem4 = document.createElement('ion-item');
          const newItem5 = document.createElement('ion-item');
          const newItem6 = document.createElement('ion-item');
          const newItem7 = document.createElement('ion-item');
          const newItem8 = document.createElement('ion-item');
          const newItem9 = document.createElement('ion-item');

          newItem.textContent = 'Valid: ' + data['valid'];
          newItem2.textContent = 'Number: ' + data['number'];
          newItem3.textContent = 'Local_format: ' + data['local_format'];
          newItem4.textContent = 'International_format: ' + data['international_format'];
          newItem5.textContent = 'Country_code: ' + data['country_code'];
          newItem6.textContent = 'Country_name: ' + data['country_name'];
          newItem7.textContent = 'Location: ' + data['location'];
          newItem8.textContent = 'Carrier: ' + data['carrier'];
          newItem9.textContent = 'Line_typ: ' + data['line_type'];
          listNumb.appendChild(newItem);
          listNumb.appendChild(newItem2);
          listNumb.appendChild(newItem3);
          listNumb.appendChild(newItem4);
          listNumb.appendChild(newItem5);
          listNumb.appendChild(newItem6);
          listNumb.appendChild(newItem7);
          listNumb.appendChild(newItem8);
          listNumb.appendChild(newItem9).innerHTML = "<br> <br>---------------------------";
        }
        // listNum.appendChild(data);
      });

  }
  checkAgian() {
    const num = document.querySelector('#num');
    num.value = '';

    const div2 = document.getElementById('display2');
    const div = document.getElementById('display');
    div2.style.display = 'block';
    div.style.display = 'none';

  }
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ['ok']
    });
    await (await alert).present();
  }


}
