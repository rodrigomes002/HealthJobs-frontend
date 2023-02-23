import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { BasePage } from '../../base-page';

@Component({
  selector: 'app-postar',
  templateUrl: './postar.component.html',
  styleUrls: ['./postar.component.scss'],
})
export class PostarComponent extends BasePage implements OnInit {
  constructor(usuarioService: UsuarioService) {
    super(usuarioService);
  }

  ngOnInit(): void {}
}
