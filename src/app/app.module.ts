import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ListComponent } from './list/list.component';
import { GridComponent } from './grid/grid.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import {
  CustomSnackBarComponent,
  SnackbarComponent,
} from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogexampleComponent } from './dialogexample/dialogexample.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingComponent } from './scrolling/scrolling.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ButtonComponent,
    TypographyComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    AutocompleteComponent,
    ListComponent,
    GridComponent,
    ExpansionpanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    CustomSnackBarComponent,
    DialogComponent,
    DialogexampleComponent,
    ScrollingComponent,
  ],
  entryComponents: [CustomSnackBarComponent, DialogexampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
