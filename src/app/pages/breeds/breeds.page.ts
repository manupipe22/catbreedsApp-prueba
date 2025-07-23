import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { CatBreed } from 'src/app/models/cat-breed.model';

@Component({
  selector: 'app-breeds',
  standalone: false,
  templateUrl: './breeds.page.html',
  styleUrls: ['./breeds.page.scss'],
})
export class BreedsPage implements OnInit {
  breeds: CatBreed[] = [];
  loading = true;
  error: string | null = null;

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.getBreeds().subscribe({
      next: (data) => {
        this.breeds = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Ocurrió un error al cargar las razas.';
        this.loading = false;
      }
    });
  }
}
