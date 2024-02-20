import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent {
  hero = {
    name: '',
    description: '',
  };

  image: any;

  selectImage(e: any) {
    this.image = e.target.files[0];
    console.log(this.image);
  }

  ajout() {
    let formData = new FormData();
    formData.append('name', this.hero.name);
    formData.append('description', this.hero.description);
    formData.append('image', this.image);

    this.ser_shared.createNewHero(formData).subscribe(
      (res) => {
        //rendre hero vide
        this.hero = {
          name: '',
          description: '',
        };
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['/list']); // Redirige vers la liste après l'ajout

 
  }

  constructor(public ser_shared: SharedService, private router: Router) {}
}
