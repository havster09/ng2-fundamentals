import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';

@Component({
    selector: 'junk',
    template: `
        <code>Junk Component</code>
        <button class="btn btn-default" (click)="onLogStuff()">log stuff</button>
        <pre>{{stuff|json}}</pre>
    `
})
export class JunkComponent implements OnInit{
    @Input() stuff:any;
    @Output() logStuff = new EventEmitter();
    private smNum:number = Math.floor(Math.random()*10);
    constructor(){}

    ngOnInit():void {
        this.stuff = Object.assign({}, this.stuff, {
           numStuff: this.smNum
        });
    }

    onLogStuff() {
        this.logStuff.emit(this.smNum);
    }

    onTestLog() {
        console.log('...');
    }

    getSmNum() {
        return this.smNum;
    }
}