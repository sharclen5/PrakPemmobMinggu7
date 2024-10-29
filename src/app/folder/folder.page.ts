import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  isModalOpen = {
    ruler: false,
    avenger: false,
    archer: false,
    berserker: false
  };

  setOpen(modal: 'ruler' | 'avenger' | 'archer' | 'berserker' | boolean) {
    if (typeof modal === 'string') {
      this.isModalOpen[modal] = true;
    } else {
      for (let key in this.isModalOpen) {
        this.isModalOpen[key as 'ruler' | 'avenger' | 'archer' | 'berserker'] = false;
      }
    }
  }
}
