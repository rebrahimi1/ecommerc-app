
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router) {

    }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}