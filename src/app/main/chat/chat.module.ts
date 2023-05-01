import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

const routes = [
  {
    path: 'chat',
    component: ChatComponent
  }
]

@NgModule({
  declarations: [
    ChatComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
    ]
})
export class ChatModule { }
