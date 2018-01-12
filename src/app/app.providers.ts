import { UserService } from './user/user.service';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './reducers/index';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
// TODO: Import custom data formater
import { ResponsiveModule } from 'ngx-responsive/dist'

export const APP_PROVIDERS = [
  { provide: RouterStateSerializer, useClass: CustomSerializer },
  UserService,

];
