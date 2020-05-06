import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name = ''
  welcomeMessageFromBackEnd = ""

  constructor(
    private route: ActivatedRoute, 
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
   // this.route.snapshot.params['name']
  }

  getWelcomeMessage(){

    //console.log(this.welcomeDataService.executeHelloWorldBeanService());

    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccesfulResponse(response)
    );
    //console.log(this.welcomeDataService.executeHelloWorldBeanService());

  }

  handleSuccesfulResponse(response ){

    this.welcomeMessageFromBackEnd = response.message;
  }

}
