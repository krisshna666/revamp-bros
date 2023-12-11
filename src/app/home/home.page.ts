import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public clients = [
    {
      name: 'Bang Upin',
      role: 'Pedagang Asongan',
      review:
        '“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“',
      image: '../../assets/images/person1.png',
    },
    {
      name: 'Ibuk Sukijan',
      role: 'Lorim Ipsum',
      review:
        '“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“',
      image: '../../assets/images/person2.png',
    },
    {
      name: 'Mpok Ina',
      role: 'Lorim Ipsum',
      review:
        '“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak“',
      image: '../../assets/images/person3.png',
    },
  ];
  constructor() {}
}
