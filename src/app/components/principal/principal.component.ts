import { Component, OnInit } from '@angular/core';
import { faDog } from '@fortawesome/free-solid-svg-icons';
//Service
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  faDog = faDog;
   constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
