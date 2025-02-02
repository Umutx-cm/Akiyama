import { DarkModeService } from 'src/app/core/services/darkMode/dark-mode.service';
import { ServersComponent } from './../servers/servers.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AnimeDetailComponent } from '../anime-detail/anime-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Anime, Episode, InfoItem, Status, Type } from 'src/app/core/models/modelst';

@Component({
  selector: 'anime-layout',
  templateUrl: './anime-layout.component.html',
  styleUrls: ['./anime-layout.component.scss']
})
export class AnimeLayoutComponent implements OnInit {
  @Input() info: InfoItem
  @Input() title: string = ""
  @Output() retry = new EventEmitter()
  Status = Status
  Type = Type

  constructor(
    private router: Router,
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private darkModeService: DarkModeService
  ) { }

  ngOnInit(): void { }

  changeToDetail(anime: Anime) {


    this.dialog.open(AnimeDetailComponent,
      {
        data: {
          anime: anime,
          animeId: anime.id
        },
        panelClass: this.darkModeService.enabled.value ? 'modal-dark' : 'modal',
      }
    )

  }

  retryClicked() {
    this.retry.emit()
  }

  openEpisodeServersBottomSheet(episode: Episode) {
    const bottom = this.bottomSheet.open(ServersComponent, {
      panelClass: this.darkModeService.enabled.value ? 'bottomSheet-dark' : '',
      data: {
        episode: episode
      }
    })
    bottom.instance.serverSelected.subscribe(e => bottom.dismiss())
  }

  scrollLeft(view: HTMLElement) {
    view.scrollLeft -= view.clientWidth - 150
  }

  scrollRight(view: HTMLElement) {
    view.scrollLeft += view.clientWidth - 150
  }

}
