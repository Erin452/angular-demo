import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ButtonComponent } from './button/button.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // 有使用 redirectTo 的話，要加入 pathMatch 設定，預設是 prefix
  { path: 'twoway', component: TwoWayBindingComponent },
  { path: 'btn', component: ButtonComponent },
  { path: 'page', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
