import {Component, Output, Input, OnInit, EventEmitter, DoCheck} from '@angular/core';

@Component({
    selector: 'player-thumbnail',
    template: `
        <button class="btn btn-primary" (click)="onShoot(player.name,1)">{{player.name}} {{player.points}}</button>
        <button class="btn btn-default" (click)="onShoot(player.name,2)">2</button>
        <button class="btn btn-default" (click)="onShoot(player.name,3)">3</button>
        <button class="btn btn-default" (click)="onReset(player.name)">Reset</button>
        <button class="btn btn-default" (click)="onResetAll()">Reset All</button>
    `
})
export class PlayerThumbnailComponent implements OnInit, DoCheck{
    @Input() player:any;
    @Output() shoot = new EventEmitter();
    @Output() reset = new EventEmitter();
    @Output() resetAll = new EventEmitter();
    constructor() {}

    ngOnInit() {
        console.log(`PlayerThumbnailComponent ngOnInit`);
    }

    ngDoCheck() {
        console.log(this.player.points);
    }

    onShoot(name, points) {
        this.shoot.emit({name, points});
    }

    onResetAll() {
        this.resetAll.emit();
    }

    onReset(playerName) {
        this.reset.emit(playerName);
    }
}
