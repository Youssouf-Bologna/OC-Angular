import { Component } from '@angular/core';
import { Post } from './models/post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Implémentez l\'ajout des posts dans votre blog';

  constructor() {
    var config = {
        apiKey: "AIzaSyCSlH2bMRX6HuPK7U9bdBKi3mv4a6IjxAY",
        authDomain: "activite-angular.firebaseapp.com",
        databaseURL: "https://activite-angular.firebaseio.com",
        projectId: "activite-angular",
        storageBucket: "activite-angular.appspot.com",
        messagingSenderId: "750803008077"
    };
    firebase.initializeApp(config);
  }
  
}
