import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessagetoguardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MessagetoguardSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MessagetoguardSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MessagetoguardSharedModule {
  static forRoot() {
    return {
      ngModule: MessagetoguardSharedModule
    };
  }
}
