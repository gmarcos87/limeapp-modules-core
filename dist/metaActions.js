'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeBase = undefined;

var _metaConstants = require('./metaConstants');

var changeBase = exports.changeBase = function changeBase(hostname) {
  return function (dispatch, getState) {
    dispatch({
      type: _metaConstants.CONECTION_CHANGE_URL,
      payload: 'ws://' + hostname + '/websocket/'
    });
    dispatch({
      type: _metaConstants.CONECTION_CHANGE_CURRENT_BASE,
      payload: hostname
    });
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJjaGFuZ2VCYXNlIiwiaG9zdG5hbWUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFLTyxJQUFNQSxrQ0FBYSxTQUFiQSxVQUFhLENBQUVDLFFBQUY7QUFBQSxTQUFnQixVQUFDQyxRQUFELEVBQVdDLFFBQVgsRUFBd0I7QUFDaEVELGFBQVM7QUFDUEUsK0NBRE87QUFFUEMsZUFBUyxVQUFTSixRQUFULEdBQW1CO0FBRnJCLEtBQVQ7QUFJQUMsYUFBUztBQUNQRSx3REFETztBQUVQQyxlQUFTSjtBQUZGLEtBQVQ7QUFJRCxHQVR5QjtBQUFBLENBQW5CIiwiZmlsZSI6Im1ldGFBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDT05FQ1RJT05fQ0hBTkdFX1VSTCxcbiAgICBDT05FQ1RJT05fQ0hBTkdFX0NVUlJFTlRfQkFTRVxufSBmcm9tICcuL21ldGFDb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQmFzZSA9ICggaG9zdG5hbWUgKSA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBDT05FQ1RJT05fQ0hBTkdFX1VSTCxcbiAgICBwYXlsb2FkOiAnd3M6Ly8nKyBob3N0bmFtZSArJy93ZWJzb2NrZXQvJ1xuICB9KTtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IENPTkVDVElPTl9DSEFOR0VfQ1VSUkVOVF9CQVNFLFxuICAgIHBheWxvYWQ6IGhvc3RuYW1lXG4gIH0pO1xufTsiXX0=