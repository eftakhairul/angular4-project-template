import { Component } from '@angular/core';

interface Github {
    username: string;
}

@Component({
    selector: 'my-github',
    template: `<h2>My Github</h2>
             <form #f="ngForm" (ngSubmit)="fetch()">
                <p>
                    <label>Github Username:</label>
                    <input type="text" [(ngModel)]="github.username" name="username">
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
             </form>`,
})
export class GithubComponent  {
    github: Github = {
        username: '',
    };

    fetch() {
        console.log(this.github.username);

    }
}
