import  epics from './metaEpics';
import { reducer } from './metaReducer';
import * as selector from './metaSelectors';
import * as constants from './metaConstants';
import Meta from './metaPage';
import { MetaMenu } from './metaMenu';

import i18nEs from '../i18n/translations/es.json';
import i18nEn from '../i18n/translations/en.json';

export default {
  name: 'Config',
  page: Meta,
  menu: MetaMenu,
  store: {
    name: 'meta',
    epics,
    reducer,
    selector,
    constants
  },
  translations: Object.assign(
    i18nEn,
    i18nEs
  )
};
