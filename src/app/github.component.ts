import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  selector: 'my-github',
  templateUrl: './src/app/views/github.component.html',
  providers: [GithubService],
})
export class GithubComponent  {

    github: {
        username: string
    } = {
        username: ""
    }
    repos: any;

    constructor(private githubService: GithubService) {
    }

    onSubmit() {
        this.githubService.fetchRepoByUsername(this.github.username)
                          .then(data => this.repos = data);

    }
}