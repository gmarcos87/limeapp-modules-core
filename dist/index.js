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
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RvciIsImNvbnN0YW50cyIsIm5hbWUiLCJwYWdlIiwibWVudSIsInN0b3JlIiwiZXBpY3MiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztJQUFZQSxROztBQUNaOztJQUFZQyxTOztBQUNaOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiQyxRQUFNLFFBRE87QUFFYkMsMEJBRmE7QUFHYkMsMEJBSGE7QUFJYkMsU0FBTztBQUNMSCxVQUFNLE1BREQ7QUFFTEksOEJBRks7QUFHTEMsaUNBSEs7QUFJTFAsc0JBSks7QUFLTEM7QUFMSztBQUpNLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgIGVwaWNzIGZyb20gJy4vbWV0YUVwaWNzJztcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuL21ldGFSZWR1Y2VyJztcbmltcG9ydCAqIGFzIHNlbGVjdG9yIGZyb20gJy4vbWV0YVNlbGVjdG9ycyc7XG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9tZXRhQ29uc3RhbnRzJztcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YVBhZ2UnO1xuaW1wb3J0IHsgTWV0YU1lbnUgfSBmcm9tICcuL21ldGFNZW51JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ29uZmlnJyxcbiAgcGFnZTogTWV0YSxcbiAgbWVudTogTWV0YU1lbnUsXG4gIHN0b3JlOiB7XG4gICAgbmFtZTogJ21ldGEnLFxuICAgIGVwaWNzLFxuICAgIHJlZHVjZXIsXG4gICAgc2VsZWN0b3IsXG4gICAgY29uc3RhbnRzXG4gIH1cbn07XG4iXX0=