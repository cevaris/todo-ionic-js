import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AutosizeModule } from 'ngx-autosize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanCardDetailPageModule } from './page/kanban-card-detail/kanban-card-detail.module';
import { IKanbanCardService, InMemoryKanbanCardService } from './service/kanban-card.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    AutosizeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    KanbanCardDetailPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: IKanbanCardService, useClass: InMemoryKanbanCardService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
