'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDispatchToProps = exports.mapStateToProps = exports.Meta = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _preact = require('preact');

var _i18nJs = require('i18n-js');

var _i18nJs2 = _interopRequireDefault(_i18nJs);

var _redux = require('redux');

var _preactRedux = require('preact-redux');

var _metaActions = require('./metaActions');

var _metaSelectors = require('./metaSelectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                  { translate: 'yes' },
                  'Current status'
                ),
                (0, _preact.h)(
                  'span',
                  { translate: 'yes' },
                  'Conected Host'
                ),
                ': ',
                this.props.selectedHost,
                (0, _preact.h)('br', null),
                (0, _preact.h)(
                  'span',
                  { translate: 'yes' },
                  'Base Host'
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
                  { 'for': 'exampleRecipientInput', translate: 'yes' },
                  'Select new base station'
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
            { 'class': 'button green block', type: 'submit', translate: 'yes' },
            'Change'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhUGFnZS5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiZSIsInNldFN0YXRlIiwic3RhdGlvbiIsInRhcmdldCIsInZhbHVlIiwic3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiY2hhbmdlQmFzZSIsInBhZGRpbmdUb3AiLCJuZXh0U3RhdGlvbiIsImJpbmQiLCJzZWxlY3RlZEhvc3QiLCJiYXNlIiwiaGFuZGxlQ2hhbmdlIiwic3RhdGlvbnMiLCJtYXAiLCJ4IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7SUFFYUEsSSxXQUFBQSxJOzs7Ozs7Ozs7OztpQ0FFRUMsQyxFQUFHO0FBQ2QsV0FBS0MsUUFBTCxDQUFjLEVBQUNDLFNBQVNGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBbkIsRUFBZDtBQUNBLGFBQU8sS0FBS0MsS0FBTCxDQUFXSCxPQUFsQjtBQUNEOzs7Z0NBRVdGLEMsRUFBRztBQUNiQSxRQUFFTSxjQUFGO0FBQ0EsVUFBSSxPQUFPLEtBQUtELEtBQUwsQ0FBV0gsT0FBbEIsS0FBOEIsV0FBbEMsRUFBK0M7QUFDN0MsZUFBTyxLQUFLSyxLQUFMLENBQVdDLFVBQVgsQ0FBc0IsS0FBS0gsS0FBTCxDQUFXSCxPQUFqQyxDQUFQO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxTQUFNLFdBQVgsRUFBdUIsT0FBTyxFQUFDTyxZQUFXLE9BQVosRUFBOUI7QUFDRTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQWhCO0FBQ0k7QUFBQTtBQUFBLGNBQUssU0FBTSxLQUFYO0FBQ0k7QUFBQTtBQUFBLGdCQUFLLFNBQU0sYUFBWDtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxvQkFBTyxXQUFVLEtBQWpCO0FBQUE7QUFBQSxpQkFERjtBQUVFO0FBQUE7QUFBQSxvQkFBTyxXQUFVLEtBQWpCO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBRWdELHFCQUFLSixLQUFMLENBQVdLLFlBRjNEO0FBRXdFLDBDQUZ4RTtBQUdFO0FBQUE7QUFBQSxvQkFBTyxXQUFVLEtBQWpCO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBRzRDLHFCQUFLTCxLQUFMLENBQVdNO0FBSHZEO0FBREYsYUFESjtBQVFJO0FBQUE7QUFBQSxnQkFBSyxTQUFNLGFBQVg7QUFDQztBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUEsb0JBQU8sT0FBSSx1QkFBWCxFQUFtQyxXQUFVLEtBQTdDO0FBQUE7QUFBQSxpQkFESDtBQUVHO0FBQUE7QUFBQSxvQkFBUSxTQUFNLGNBQWQsRUFBNkIsVUFBVSxLQUFLQyxZQUFMLENBQWtCSCxJQUFsQixDQUF1QixJQUF2QixDQUF2QztBQUNJO0FBQUE7QUFBQSxzQkFBUSxjQUFSLEVBQWlCLE9BQU8sS0FBS0osS0FBTCxDQUFXSyxZQUFuQztBQUFrRCx5QkFBS0wsS0FBTCxDQUFXSztBQUE3RCxtQkFESjtBQUVLLHVCQUFLTCxLQUFMLENBQVdRLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCO0FBQUEsMkJBQU07QUFBQTtBQUFBLHdCQUFRLE9BQU9DLENBQWY7QUFBbUJBO0FBQW5CLHFCQUFOO0FBQUEsbUJBQXhCO0FBRkw7QUFGSDtBQUREO0FBUkosV0FESjtBQW9CSTtBQUFBO0FBQUEsY0FBUSxTQUFNLG9CQUFkLEVBQW1DLE1BQUssUUFBeEMsRUFBaUQsV0FBVSxLQUEzRDtBQUFBO0FBQUE7QUFwQko7QUFERixPQURGO0FBMEJEOzs7Ozs7QUFJSSxJQUFNQyw0Q0FBa0IsU0FBbEJBLGVBQWtCLENBQUNiLEtBQUQsRUFBVztBQUN4QyxTQUFPO0FBQ0xVLGNBQVUsZ0NBQVlWLEtBQVosQ0FETDtBQUVMUSxVQUFNLDRCQUFRUixLQUFSLENBRkQ7QUFHTE8sa0JBQWMsb0NBQWdCUCxLQUFoQjtBQUhULEdBQVA7QUFLRCxDQU5NOztBQVFBLElBQU1jLGtEQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQsRUFBYztBQUM5QyxTQUFPO0FBQ0xaLGdCQUFZLHdEQUE4QlksUUFBOUI7QUFEUCxHQUFQO0FBR0QsQ0FKTTs7a0JBTVEsMEJBQVFGLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3BCLElBQTdDLEMiLCJmaWxlIjoibWV0YVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBDb21wb25lbnQgfSBmcm9tICdwcmVhY3QnO1xuXG5pbXBvcnQgSTE4biBmcm9tICdpMThuLWpzJztcblxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3ByZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNoYW5nZUJhc2UgfSBmcm9tICcuL21ldGFBY3Rpb25zJztcbmltcG9ydCB7IGdldEJhc2UsIGdldFN0YXRpb25zLCBnZXRTZWxlY3RlZEhvc3QgfSBmcm9tICcuL21ldGFTZWxlY3RvcnMnO1xuXG5leHBvcnQgY2xhc3MgTWV0YSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGF0aW9uOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnN0YXRpb247XG4gIH1cblxuICBuZXh0U3RhdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZS5zdGF0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hhbmdlQmFzZSh0aGlzLnN0YXRlLnN0YXRpb24pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonMTAwcHgnfX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLm5leHRTdGF0aW9uLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXggY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0cmFuc2xhdGU9J3llcyc+Q3VycmVudCBzdGF0dXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAgdHJhbnNsYXRlPSd5ZXMnPkNvbmVjdGVkIEhvc3Q8L3NwYW4+OiB7dGhpcy5wcm9wcy5zZWxlY3RlZEhvc3R9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICB0cmFuc2xhdGU9J3llcyc+QmFzZSBIb3N0PC9zcGFuPjoge3RoaXMucHJvcHMuYmFzZX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l4IGNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlUmVjaXBpZW50SW5wdXRcIiB0cmFuc2xhdGU9J3llcyc+U2VsZWN0IG5ldyBiYXNlIHN0YXRpb248L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidS1mdWxsLXdpZHRoXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9e3RoaXMucHJvcHMuc2VsZWN0ZWRIb3N0fT57dGhpcy5wcm9wcy5zZWxlY3RlZEhvc3R9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0aW9ucy5tYXAoeCA9PiAoPG9wdGlvbiB2YWx1ZT17eH0+e3h9PC9vcHRpb24+KSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gZ3JlZW4gYmxvY2tcIiB0eXBlPVwic3VibWl0XCIgdHJhbnNsYXRlPSd5ZXMnPkNoYW5nZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0aW9uczogZ2V0U3RhdGlvbnMoc3RhdGUpLFxuICAgIGJhc2U6IGdldEJhc2Uoc3RhdGUpLFxuICAgIHNlbGVjdGVkSG9zdDogZ2V0U2VsZWN0ZWRIb3N0KHN0YXRlKVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNoYW5nZUJhc2U6IGJpbmRBY3Rpb25DcmVhdG9ycyhjaGFuZ2VCYXNlLGRpc3BhdGNoKVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTWV0YSk7XG4iXX0=