import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ButtonComponent } from './button/button.component';
import { HtmlEventComponent } from './html-event/html-event.component';
import { NgDirectiveComponent } from './ng-directive/ng-directive.component';
import { ApiComponent } from './api-connect/api.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { LanguageComponent } from './language/language.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // 有使用 redirectTo 的話，要加入 pathMatch 設定，預設是 prefix
  { path: 'twoway', component: TwoWayBindingComponent },
  { path: 'btn', component: ButtonComponent },
  { path: 'event', component: HtmlEventComponent },
  { path: 'ng', component: NgDirectiveComponent },
  { path: 'api', component: ApiComponent },
  { path: 'form', component: ReactiveFormsComponent },
  { path: 'lang', component: LanguageComponent },
  { path: 'page', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
