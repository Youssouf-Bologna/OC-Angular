import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Créez une application de type blog';

  posts: Post[] = [
    new Post('Angular' ,
      'Angular est une plateforme de développement qui permet de créer des applications web dynamiques et immersives.  Dans ce cours, ' +
      'vous apprendrez rapidement à créer les composantes de base d\'une application Angular, ' +
      'avant d\'enrichir vos applications en approfondissant vos connaissances de ce framework. ' +
      'Vous apprendrez également à faire communiquer votre application avec un backend afin de créer une application web complète.'),
    new Post('Symfony',
      'Symfony est un puissant framework qui va vous permettre de réaliser des sites complexes rapidement, ' +
      'mais de façon structurée et avec un code clair et maintenable. En un mot : le paradis du développeur !'),
    new Post('Ruby on Rails',
      'Rails est du code Ruby déjà écrit par d’autres, sur lequel vous ajoutez votre code, celui qui rend votre ' +
      'site unique. Rails prémâche votre travail, beaucoup. Moi-même, sans Rails, il y a des choses que je ne saurais pas faire. ' +
      'Je suis bien heureux que d’autres aient écrit ce code à ma place !'
    )
  ];
}
