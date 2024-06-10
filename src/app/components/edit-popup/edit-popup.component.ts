import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { Product } from '../../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule, RatingModule],
  templateUrl: './edit-popup.component.html',
  styleUrl: './edit-popup.component.scss',
})
export class EditPopupComponent {
  @Input() display: boolean = false;
  @Input() header!: string;
  @Input() product: Product = {
    name: '',
    image: '',
    price: '',
    rating: 0,
  };
  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit(this.product);
  }

  onCancel() {
    this.display = false;
  }
}
