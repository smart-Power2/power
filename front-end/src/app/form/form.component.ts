import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Car } from '../car';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  carForm: any;
  car: Car[] = [];

  constructor(private postService: PostService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.carForm = this.fb.group({
      brand: [''],
      model: [''],
      engine: [''],
      price: [0],
      seats: [0],
      doors: [0],
      suitcases: [0],
      airconditioner: [''],
      transmission: [''],
      file: [''],
    });
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.carForm.get('file')?.setValue(file);
  }
  registerCar(): void {
    const formData: FormData = new FormData();
    formData.append('brand', this.carForm.value.brand);
    formData.append('model', this.carForm.value.model);
    formData.append('engine', this.carForm.value.engine);
    formData.append('price', this.carForm.value.price);
    formData.append('seats', this.carForm.value.seats);
    formData.append('doors', this.carForm.value.doors);
    formData.append('suitcases', this.carForm.value.suitcases);
    formData.append('airconditioner', this.carForm.value.airconditioner);
    formData.append('transmission', this.carForm.value.transmission);
    formData.append('file', this.carForm.get('file').value);

    this.postService.addCar(formData).subscribe((res) => {
      console.log(res);
    });
  }
}
