import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AutosizeModule } from 'ngx-autosize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanCardDetailPage } from './page/kanban-card-detail/kanban-card-detail.page';
import { InMemoryKanbanCardService, IKanbanCardService } from './service/kanban-card.service';


@NgModule({
  declarations: [AppComponent, KanbanCardDetailPage],
  entryComponents: [KanbanCardDetailPage],
  imports: [
    AutosizeModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: IKanbanCardService, useClass: InMemoryKanbanCardService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
