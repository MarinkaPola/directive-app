import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyColorDirective } from './directives/my-color.directive';
import { EventDirective } from './directives/event.directive';
import { MyColorChangeDirective } from './directives/my-color-change.directive';
import { MyRepeatDirective } from './directives/my-repeat.directive';
import { CompComponent } from './comp/comp.component';
import { PassingFewParamsComponent } from './passing-few-params/passing-few-params.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { MousemoveComponent } from './mousemove/mousemove.component';
import { CoordsDirective } from './directives/coords.directive';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { ClickableDirective } from './directives/clickable.directive';
import { MyifComponent } from './myif/myif.component';
import { MyIfDirective } from './directives/my-if.directive';
import { DelayComponent } from './delay/delay.component';
import { DelayDirective } from './directives/delay.directive';
import { ContextComponent } from './context/context.component';
import { ContextDirective } from './directives/context.directive';
import { BuiltComponent } from './built/built.component';
import { MyPipeComponent } from './my-pipe/my-pipe.component';
import { MyCustomPipe } from './pipes/my-custom.pipe';
import {FormsModule} from '@angular/forms';
import { MyPipe2Component } from './my-pipe2/my-pipe2.component';
import { Pipe2Pipe } from './pipes/pipe2.pipe';
import { PureCompComponent } from './pure-comp/pure-comp.component';
import { PurePipe } from './pipes/pure.pipe';
import {ImpurePipe} from './pipes/impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyColorDirective,
    EventDirective,
    MyColorChangeDirective,
    MyRepeatDirective,
    CompComponent,
    PassingFewParamsComponent,
    ConfirmComponent,
    ConfirmDirective,
    MousemoveComponent,
    CoordsDirective,
    HostBindingComponent,
    ClickableDirective,
    MyifComponent,
    MyIfDirective,
    DelayComponent,
    DelayDirective,
    ContextComponent,
    ContextDirective,
    BuiltComponent,
    MyPipeComponent,
    MyCustomPipe,
    MyPipe2Component,
    Pipe2Pipe,
    PureCompComponent,
    PurePipe,
    ImpurePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
