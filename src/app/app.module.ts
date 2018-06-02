
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SwiperModule,SWIPER_CONFIG,SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';

/** 注册语言包 **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { SlideComponent } from './slide/slide.component';
import { NavbarComponent } from './navbar/navbar.component';


registerLocaleData(zh);

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TableComponent,
    SlideComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue:DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }