'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metaEpics = require('./metaEpics');

var _metaEpics2 = _interopRequireDefault(_metaEpics);

var _metaReducer = require('./metaReducer');

var _metaSelectors = require('./metaSelectors');

var selector = _interopRequireWildcard(_metaSelectors);

var _metaConstants = require('./metaConstants');

var constants = _interopRequireWildcard(_metaConstants);

var _metaPage = require('./metaPage');

var _metaPage2 = _interopRequireDefault(_metaPage);

var _metaMenu = require('./metaMenu');

var _es = require('../i18n/translations/es.json');

var _es2 = _interopRequireDefault(_es);

var _en = require('../i18n/translations/en.json');

var _en2 = _interopRequireDefault(_en);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Config',
  page: _metaPage2.default,
  menu: _metaMenu.MetaMenu,
  store: {
    name: 'meta',
    epics: _metaEpics2.default,
    reducer: _metaReducer.reducer,
    selector: selector,
    constants: constants
  },
  translations: Object.assign(_en2.default, _es2.default)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RvciIsImNvbnN0YW50cyIsIm5hbWUiLCJwYWdlIiwibWVudSIsInN0b3JlIiwiZXBpY3MiLCJyZWR1Y2VyIiwidHJhbnNsYXRpb25zIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztJQUFZQSxROztBQUNaOztJQUFZQyxTOztBQUNaOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWU7QUFDYkMsUUFBTSxRQURPO0FBRWJDLDBCQUZhO0FBR2JDLDBCQUhhO0FBSWJDLFNBQU87QUFDTEgsVUFBTSxNQUREO0FBRUxJLDhCQUZLO0FBR0xDLGlDQUhLO0FBSUxQLHNCQUpLO0FBS0xDO0FBTEssR0FKTTtBQVdiTyxnQkFBY0MsT0FBT0MsTUFBUDtBQVhELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIGVwaWNzIGZyb20gJy4vbWV0YUVwaWNzJztcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL21ldGFSZWR1Y2VyJztcbmltcG9ydCAqIGFzIHNlbGVjdG9yIGZyb20gJy4vbWV0YVNlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9tZXRhQ29uc3RhbnRzJztcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YVBhZ2UnO1xuaW1wb3J0IHsgTWV0YU1lbnUgfSBmcm9tICcuL21ldGFNZW51JztcblxuaW1wb3J0IGkxOG5FcyBmcm9tICcuLi9pMThuL3RyYW5zbGF0aW9ucy9lcy5qc29uJztcbmltcG9ydCBpMThuRW4gZnJvbSAnLi4vaTE4bi90cmFuc2xhdGlvbnMvZW4uanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0NvbmZpZycsXG4gIHBhZ2U6IE1ldGEsXG4gIG1lbnU6IE1ldGFNZW51LFxuICBzdG9yZToge1xuICAgIG5hbWU6ICdtZXRhJyxcbiAgICBlcGljcyxcbiAgICByZWR1Y2VyLFxuICAgIHNlbGVjdG9yLFxuICAgIGNvbnN0YW50c1xuICB9LFxuICB0cmFuc2xhdGlvbnM6IE9iamVjdC5hc3NpZ24oXG4gICAgaTE4bkVuLFxuICAgIGkxOG5Fc1xuICApXG59O1xuIl19