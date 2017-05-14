'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = exports.Meta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _redux = require('redux');

var _preactRedux = require('preact-redux');

var _metaActions = require('./metaActions');

var _metaSelectors = require('./metaSelectors');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Meta = exports.Meta = function (_Component) {
  _inherits(Meta, _Component);

  function Meta() {
    _classCallCheck(this, Meta);

    return _possibleConstructorReturn(this, (Meta.__proto__ || Object.getPrototypeOf(Meta)).apply(this, arguments));
  }

  _createClass(Meta, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ station: e.target.value });
      return this.state.station;
    }
  }, {
    key: 'nextStation',
    value: function nextStation(e) {
      e.preventDefault();
      if (typeof this.state.station !== 'undefined') {
        return this.props.changeBase(this.state.station);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _preact.h)(
        'div',
        { 'class': 'container', style: { paddingTop: '100px' } },
        (0, _preact.h)(
          'form',
          { onSubmit: this.nextStation.bind(this) },
          (0, _preact.h)(
            'div',
            { 'class': 'row' },
            (0, _preact.h)(
              'div',
              { 'class': 'six columns' },
              (0, _preact.h)(
                'p',
                null,
                (0, _preact.h)(
                  'label',
                  null,
                  I18n.t('Current status')
                ),
                (0, _preact.h)(
                  'span',
                  null,
                  I18n.t('Conected Host')
                ),
                ': ',
                this.props.selectedHost,
                (0, _preact.h)('br', null),
                (0, _preact.h)(
                  'span',
                  null,
                  I18n.t('Base Host')
                ),
                ': ',
                this.props.base
              )
            ),
            (0, _preact.h)(
              'div',
              { 'class': 'six columns' },
              (0, _preact.h)(
                'p',
                null,
                (0, _preact.h)(
                  'label',
                  null,
                  I18n.t('Select new base station')
                ),
                (0, _preact.h)(
                  'select',
                  { 'class': 'u-full-width', onChange: this.handleChange.bind(this) },
                  (0, _preact.h)(
                    'option',
                    { selected: true, value: this.props.selectedHost },
                    this.props.selectedHost
                  ),
                  this.props.stations.map(function (x) {
                    return (0, _preact.h)(
                      'option',
                      { value: x },
                      x
                    );
                  })
                )
              )
            )
          ),
          (0, _preact.h)(
            'button',
            { 'class': 'button green block', type: 'submit' },
            I18n.t('Change')
          )
        )
      );
    }
  }]);

  return Meta;
}(_preact.Component);

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
  return {
    stations: (0, _metaSelectors.getStations)(state),
    base: (0, _metaSelectors.getBase)(state),
    selectedHost: (0, _metaSelectors.getSelectedHost)(state)
  };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeBase: (0, _redux.bindActionCreators)(_metaActions.changeBase, dispatch)
  };
};

exports.default = (0, _preactRedux.connect)(mapStateToProps, mapDispatchToProps)(Meta);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhUGFnZS5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiZSIsInNldFN0YXRlIiwic3RhdGlvbiIsInRhcmdldCIsInZhbHVlIiwic3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY2hhbmdlQmFzZSIsInBhZGRpbmdUb3AiLCJuZXh0U3RhdGlvbiIsImJpbmQiLCJJMThuIiwidCIsInNlbGVjdGVkSG9zdCIsImJhc2UiLCJoYW5kbGVDaGFuZ2UiLCJzdGF0aW9ucyIsIm1hcCIsIngiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0lBRWFBLEksV0FBQUEsSTs7Ozs7Ozs7Ozs7aUNBRUVDLEMsRUFBRztBQUNkLFdBQUtDLFFBQUwsQ0FBYyxFQUFDQyxTQUFTRixFQUFFRyxNQUFGLENBQVNDLEtBQW5CLEVBQWQ7QUFDQSxhQUFPLEtBQUtDLEtBQUwsQ0FBV0gsT0FBbEI7QUFDRDs7O2dDQUVXRixDLEVBQUc7QUFDYkEsUUFBRU0sY0FBRjtBQUNBLFVBQUksT0FBTyxLQUFLRCxLQUFMLENBQVdILE9BQWxCLEtBQThCLFdBQWxDLEVBQStDO0FBQzdDLGVBQU8sS0FBS0ssS0FBTCxDQUFXQyxVQUFYLENBQXNCLEtBQUtILEtBQUwsQ0FBV0gsT0FBakMsQ0FBUDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssU0FBTSxXQUFYLEVBQXVCLE9BQU8sRUFBQ08sWUFBVyxPQUFaLEVBQTlCO0FBQ0U7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFoQjtBQUNJO0FBQUE7QUFBQSxjQUFLLFNBQU0sS0FBWDtBQUNJO0FBQUE7QUFBQSxnQkFBSyxTQUFNLGFBQVg7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBUUMsdUJBQUtDLENBQUwsQ0FBTyxnQkFBUDtBQUFSLGlCQURGO0FBRUU7QUFBQTtBQUFBO0FBQU9ELHVCQUFLQyxDQUFMLENBQU8sZUFBUDtBQUFQLGlCQUZGO0FBQUE7QUFFMkMscUJBQUtOLEtBQUwsQ0FBV08sWUFGdEQ7QUFFbUUsMENBRm5FO0FBR0U7QUFBQTtBQUFBO0FBQU9GLHVCQUFLQyxDQUFMLENBQU8sV0FBUDtBQUFQLGlCQUhGO0FBQUE7QUFHdUMscUJBQUtOLEtBQUwsQ0FBV1E7QUFIbEQ7QUFERixhQURKO0FBUUk7QUFBQTtBQUFBLGdCQUFLLFNBQU0sYUFBWDtBQUNDO0FBQUE7QUFBQTtBQUNHO0FBQUE7QUFBQTtBQUFRSCx1QkFBS0MsQ0FBTCxDQUFPLHlCQUFQO0FBQVIsaUJBREg7QUFFRztBQUFBO0FBQUEsb0JBQVEsU0FBTSxjQUFkLEVBQTZCLFVBQVUsS0FBS0csWUFBTCxDQUFrQkwsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkM7QUFDSTtBQUFBO0FBQUEsc0JBQVEsY0FBUixFQUFpQixPQUFPLEtBQUtKLEtBQUwsQ0FBV08sWUFBbkM7QUFBa0QseUJBQUtQLEtBQUwsQ0FBV087QUFBN0QsbUJBREo7QUFFSyx1QkFBS1AsS0FBTCxDQUFXVSxRQUFYLENBQW9CQyxHQUFwQixDQUF3QjtBQUFBLDJCQUFNO0FBQUE7QUFBQSx3QkFBUSxPQUFPQyxDQUFmO0FBQW1CQTtBQUFuQixxQkFBTjtBQUFBLG1CQUF4QjtBQUZMO0FBRkg7QUFERDtBQVJKLFdBREo7QUFvQkk7QUFBQTtBQUFBLGNBQVEsU0FBTSxvQkFBZCxFQUFtQyxNQUFLLFFBQXhDO0FBQWtEUCxpQkFBS0MsQ0FBTCxDQUFPLFFBQVA7QUFBbEQ7QUFwQko7QUFERixPQURGO0FBMEJEOzs7Ozs7QUFJSSxJQUFNTyw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNmLEtBQUQsRUFBVztBQUN4QyxTQUFPO0FBQ0xZLGNBQVUsZ0NBQVlaLEtBQVosQ0FETDtBQUVMVSxVQUFNLDRCQUFRVixLQUFSLENBRkQ7QUFHTFMsa0JBQWMsb0NBQWdCVCxLQUFoQjtBQUhULEdBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1nQixrREFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFELEVBQWM7QUFDOUMsU0FBTztBQUNMZCxnQkFBWSx3REFBOEJjLFFBQTlCO0FBRFAsR0FBUDtBQUdELENBSk07O2tCQU1RLDBCQUFRRixlQUFSLEVBQXlCQyxrQkFBekIsRUFBNkN0QixJQUE3QyxDIiwiZmlsZSI6Im1ldGFQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgQ29tcG9uZW50IH0gZnJvbSAncHJlYWN0JztcblxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3ByZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNoYW5nZUJhc2UgfSBmcm9tICcuL21ldGFBY3Rpb25zJztcbmltcG9ydCB7IGdldEJhc2UsIGdldFN0YXRpb25zLCBnZXRTZWxlY3RlZEhvc3QgfSBmcm9tICcuL21ldGFTZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWV0YSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0aW9uOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXRpb247XG4gIH1cblxuICBuZXh0U3RhdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5zdGF0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hhbmdlQmFzZSh0aGlzLnN0YXRlLnN0YXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonMTAwcHgnfX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm5leHRTdGF0aW9uLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57STE4bi50KCdDdXJyZW50IHN0YXR1cycpfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntJMThuLnQoJ0NvbmVjdGVkIEhvc3QnKX08L3NwYW4+OiB7dGhpcy5wcm9wcy5zZWxlY3RlZEhvc3R9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntJMThuLnQoJ0Jhc2UgSG9zdCcpfTwvc3Bhbj46IHt0aGlzLnByb3BzLmJhc2V9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpeCBjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e0kxOG4udCgnU2VsZWN0IG5ldyBiYXNlIHN0YXRpb24nKX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidS1mdWxsLXdpZHRoXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0ZWRIb3N0fT57dGhpcy5wcm9wcy5zZWxlY3RlZEhvc3R9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0aW9ucy5tYXAoeCA9PiAoPG9wdGlvbiB2YWx1ZT17eH0+e3h9PC9vcHRpb24+KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gZ3JlZW4gYmxvY2tcIiB0eXBlPVwic3VibWl0XCI+e0kxOG4udCgnQ2hhbmdlJyl9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXRpb25zOiBnZXRTdGF0aW9ucyhzdGF0ZSksXG4gICAgYmFzZTogZ2V0QmFzZShzdGF0ZSksXG4gICAgc2VsZWN0ZWRIb3N0OiBnZXRTZWxlY3RlZEhvc3Qoc3RhdGUpXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2hhbmdlQmFzZTogYmluZEFjdGlvbkNyZWF0b3JzKGNoYW5nZUJhc2UsZGlzcGF0Y2gpXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShNZXRhKTtcbiJdfQ==