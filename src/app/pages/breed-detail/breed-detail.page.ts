import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatService } from 'src/app/services/cat.service';
import { CatBreed } from 'src/app/models/cat-breed.model';

@Component({
  selector: 'app-breed-detail',
  standalone: false,
  templateUrl: './breed-detail.page.html',
  styleUrls: ['./breed-detail.page.scss'],
})
export class BreedDetailPage implements OnInit {

  breedId!: string;
  breed?: CatBreed;

  constructor(
    private route: ActivatedRoute,
    private catBreedsService: CatService
  ) {}

  ngOnInit() {
    this.breedId = this.route.snapshot.paramMap.get('id')!;
    this.catBreedsService.getBreeds().subscribe(breeds => {
      this.breed = breeds.find(b => b.id === this.breedId);
    });
  }
}