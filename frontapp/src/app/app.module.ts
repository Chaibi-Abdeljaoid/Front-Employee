import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RappelDetailleComponent } from './rappel-detaille/rappel-detaille.component';
import { CreateRappelComponent } from './create-rappel/create-rappel.component';
import { RappelListComponent } from './rappel-list/rappel-list.component';

import { CreateDemandeComponent } from './create-demande/create-demande.component';

import { DemandeListComponent } from './demande-list/demande-list.component';
import { DemandeDetaillesComponent } from './demande-detailles/demande-detailles.component';





@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    RappelDetailleComponent,
    CreateRappelComponent,
    RappelListComponent,
    
    CreateDemandeComponent,
    DemandeDetaillesComponent,
    DemandeListComponent,
    DemandeDetaillesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
