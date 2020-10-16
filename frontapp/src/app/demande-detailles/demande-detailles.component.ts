import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from '../demande.service';

@Component({
  selector: 'app-demande-detailles',
  templateUrl: './demande-detailles.component.html',
  styleUrls: ['./demande-detailles.component.css']
})
export class DemandeDetaillesComponent implements OnInit {
  id: number;
 demande: Demande;

  constructor(private route: ActivatedRoute,private router: Router,
    private demandeService: DemandeService) { }

  ngOnInit() {
    this.demande = new Demande();

    this.id = this.route.snapshot.params['id'];
    
    this.demandeService.getDemande(this.id)
      .subscribe(data => {
        console.log(data)
         this.demande = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['demandes']);
  }
}
