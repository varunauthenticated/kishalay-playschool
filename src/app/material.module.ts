import { NgModule } from '@angular/core';
import { MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule
 } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatTableModule,
            MatMenuModule,
            MatDialogModule,
            MatExpansionModule,
            MatSelectModule,
            MatProgressSpinnerModule
          ],
  exports: [
            MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatTableModule,
            MatMenuModule,
            MatDialogModule,
            MatExpansionModule,
            MatSelectModule,
            MatProgressSpinnerModule
          ]
})

export class MaterialModule{
}
