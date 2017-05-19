import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'games',
    template: `
        <code>Games</code>
        <div *ngFor="let stuff of junkStuff;">
            <junk [stuff]="stuff" (logStuff)="handleLogStuff($event)"></junk>
        </div>
        
        <junk #templateJunk [stuff]="junkStuff[0]"></junk>
        
        <button class="btn btn-default" (click)="templateJunk.onTestLog()" (logStuff)="handleLogStuff($event)">Log it</button>
        <pre>{{templateJunk.stuff|json}}</pre>
    `
})
export class GamesComponent implements OnInit{
    junkStuff: any[];
    constructor(){}
    ngOnInit():void {
        console.log(`Games Component OnInit`);
        this.junkStuff = [
            {name: 'Test1'},
            {name: 'Test2'},
            {name: 'Test3'}
        ]
    }
    handleLogStuff(event) {
        console.log(`the stuff: ${event}`);
    }
}