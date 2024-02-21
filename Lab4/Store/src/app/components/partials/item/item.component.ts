import { Component } from '@angular/core';


class Item {
  name: string;
  imageUrl: string;
  detail: string;
  rating: number;
  link: string;

  constructor(name: string, imageUrl: string, detail: string, rating: number, link:string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.detail = detail;
    this.rating = rating;
    this.link= link
  }
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  title = 'store';
  items: Item[] = [];

  constructor() {
    this.items.push(
      new Item('Печенье ORION Choco Pie Original 360 г', 'https://resources.cdn-kaspi.kz/img/m/p/h14/h11/64092537225246.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/pechen-e-orion-choco-pie-original-360-g-101006400/?c=750000000'),
      new Item('Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый', 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000'),
      new Item('Ноутбук HP VICTUS 16-e1038ci 6K3C8EA синий', 'https://resources.cdn-kaspi.kz/img/m/p/hcd/h30/64488765816862.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/hp-victus-16-e1038ci-6k3c8ea-sinii-106230474/?c=750000000'),
      new Item('Portable speaker BT SPEAKER ZQS-4239 black', 'https://resources.cdn-kaspi.kz/img/m/p/h06/h36/81188929404958.png?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/bt-speaker-zqs-4239-chernyi-110785723/?c=750000000'),
      new Item('Mouse LS Pro black', 'https://resources.cdn-kaspi.kz/img/m/p/h2f/h61/82393746636830.png?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/ls-pro-chernyi-107622516/?c=750000000'),
      new Item('Mizam 8902061 sofa, fabric upholstery, 70x210x75 cm, gray', 'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000'),
      new Item('Office chair 18604221_Mi-6, black', 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h0e/85022513496094.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/ofisnoe-kreslo-18604221-mi-6-chernyi-116243941/?c=750000000'),
      new Item('Case Ala case for iPhone 11 transparent', 'https://resources.cdn-kaspi.kz/img/m/p/he5/hb3/64408556175390.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/ala-case-dlja-iphone-11-prozrachnyi-103661424/?c=750000000'),
      new Item('Карина туалетная бумага 2-слойный 12 шт, вторичная целлюлоза', 'https://resources.cdn-kaspi.kz/img/m/p/h66/h78/64534893395998.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000'),
      new Item('Набор инструментов автомобильный 46 в 1 Pride tools CR-V 46', 'https://resources.cdn-kaspi.kz/img/m/p/h56/h52/64365861535774.jpg?format=gallery-medium', 'Go to the store', 4, 'https://kaspi.kz/shop/p/nabor-instrumentov-avtomobil-nyi-46-v-1-pride-tools-cr-v-46-104733089/?c=750000000'),

    );
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }


  share(item: Item) {
    if (navigator.share) {
      navigator.share({
        title: 'My Store Item',
        text: item.detail,
        url: item.link,
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      const shareUrl = `https://your-website.com/share?title=${encodeURIComponent(item.name)}&description=${encodeURIComponent(item.detail)}&url=${encodeURIComponent(item.link)}`;
      window.open(shareUrl, '_blank');
    }
  }
  

}
