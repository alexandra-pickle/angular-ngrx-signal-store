import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ShellStore } from '../shell.store';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [ShellStore],
})
export class SpinnerComponent {
  shellStore = inject(ShellStore);
}
