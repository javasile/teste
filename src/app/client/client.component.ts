import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: any;

  constructor(private service: ClientService) {
  }

  ngOnInit(): void {
    this.service.getClients().subscribe(data => this.clients = data);
  }

}
