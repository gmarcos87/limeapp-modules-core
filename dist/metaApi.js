'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHostname = exports.getCloudNodes = exports.changeUrl = exports.login = undefined;

var _jssha = require('jssha');

var _jssha2 = _interopRequireDefault(_jssha);

require('rxjs/add/operator/map');

require('rxjs/add/operator/switchMap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getChallenge = function getChallenge(api) {
  return api.call('', '', [], 'challenge');
};

var shaToken = function shaToken(password, token) {
  var shaPassword = new _jssha2.default("SHA-1", "TEXT");
  var shaToken = new _jssha2.default("SHA-1", "TEXT");
  shaPassword.update(password);
  shaToken.update(token);
  shaToken.update(shaPassword.getHash('HEX'));
  return shaToken.getHash('HEX');
};

var login = exports.login = function login(api, auth) {
  return getChallenge(api).map(function (x) {
    return x.token;
  }).switchMap(function (token) {
    var shaPassword = shaToken(auth.password, token);
    return api.call('', '', [auth.user, shaPassword], 'login').map(function (data) {
      return data.success;
    });
  });
};

var changeUrl = exports.changeUrl = function changeUrl(api, url) {
  api._wss.url = url;
  return api.call('', '', [], 'reconect');
};

var getCloudNodes = exports.getCloudNodes = function getCloudNodes(api, sid) {
  return api.call(sid, 'get_cloud_nodes', {}).map(function (x) {
    return x.nodes;
  }).map(function (data) {
    return Object.keys(data).map(function (key) {
      return data[key];
    }).reduce(function (x, y) {
      return x.concat(y);
    }, []);
  });
};

var getHostname = exports.getHostname = function getHostname(api, sid) {
  return api.call(sid, 'get_hostname', {});
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhQXBpLmpzIl0sIm5hbWVzIjpbImdldENoYWxsZW5nZSIsImFwaSIsImNhbGwiLCJzaGFUb2tlbiIsInBhc3N3b3JkIiwidG9rZW4iLCJzaGFQYXNzd29yZCIsInVwZGF0ZSIsImdldEhhc2giLCJsb2dpbiIsImF1dGgiLCJtYXAiLCJ4Iiwic3dpdGNoTWFwIiwidXNlciIsImRhdGEiLCJzdWNjZXNzIiwiY2hhbmdlVXJsIiwidXJsIiwiX3dzcyIsImdldENsb3VkTm9kZXMiLCJzaWQiLCJub2RlcyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJyZWR1Y2UiLCJ5IiwiY29uY2F0IiwiZ2V0SG9zdG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQUNDLEdBQUQsRUFBUztBQUM1QixTQUFPQSxJQUFJQyxJQUFKLENBQVMsRUFBVCxFQUFZLEVBQVosRUFBZSxFQUFmLEVBQWtCLFdBQWxCLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQU1DLFdBQVcsa0JBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFxQjtBQUNwQyxNQUFJQyxjQUFjLG9CQUFVLE9BQVYsRUFBbUIsTUFBbkIsQ0FBbEI7QUFDQSxNQUFJSCxXQUFXLG9CQUFVLE9BQVYsRUFBbUIsTUFBbkIsQ0FBZjtBQUNBRyxjQUFZQyxNQUFaLENBQW1CSCxRQUFuQjtBQUNBRCxXQUFTSSxNQUFULENBQWdCRixLQUFoQjtBQUNBRixXQUFTSSxNQUFULENBQWdCRCxZQUFZRSxPQUFaLENBQW9CLEtBQXBCLENBQWhCO0FBQ0EsU0FBT0wsU0FBU0ssT0FBVCxDQUFpQixLQUFqQixDQUFQO0FBQ0QsQ0FQRDs7QUFTTyxJQUFNQyx3QkFBUSxTQUFSQSxLQUFRLENBQUNSLEdBQUQsRUFBTVMsSUFBTixFQUFlO0FBQ2xDLFNBQU9WLGFBQWFDLEdBQWIsRUFDSlUsR0FESSxDQUNBO0FBQUEsV0FBS0MsRUFBRVAsS0FBUDtBQUFBLEdBREEsRUFFSlEsU0FGSSxDQUVNLFVBQUNSLEtBQUQsRUFBVztBQUNwQixRQUFJQyxjQUFjSCxTQUFTTyxLQUFLTixRQUFkLEVBQXdCQyxLQUF4QixDQUFsQjtBQUNBLFdBQU9KLElBQUlDLElBQUosQ0FBUyxFQUFULEVBQVksRUFBWixFQUFnQixDQUFDUSxLQUFLSSxJQUFOLEVBQVlSLFdBQVosQ0FBaEIsRUFBeUMsT0FBekMsRUFBa0RLLEdBQWxELENBQXNEO0FBQUEsYUFBUUksS0FBS0MsT0FBYjtBQUFBLEtBQXRELENBQVA7QUFDRCxHQUxJLENBQVA7QUFNRCxDQVBNOztBQVNBLElBQU1DLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ2hCLEdBQUQsRUFBTWlCLEdBQU4sRUFBYztBQUNyQ2pCLE1BQUlrQixJQUFKLENBQVNELEdBQVQsR0FBZUEsR0FBZjtBQUNBLFNBQU9qQixJQUFJQyxJQUFKLENBQVMsRUFBVCxFQUFZLEVBQVosRUFBZSxFQUFmLEVBQWtCLFVBQWxCLENBQVA7QUFDRCxDQUhNOztBQUtBLElBQU1rQix3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNuQixHQUFELEVBQU1vQixHQUFOLEVBQWM7QUFDekMsU0FBT3BCLElBQUlDLElBQUosQ0FBU21CLEdBQVQsRUFBYyxpQkFBZCxFQUFpQyxFQUFqQyxFQUNMVixHQURLLENBQ0Q7QUFBQSxXQUFLQyxFQUFFVSxLQUFQO0FBQUEsR0FEQyxFQUVMWCxHQUZLLENBRUQ7QUFBQSxXQUFRWSxPQUFPQyxJQUFQLENBQVlULElBQVosRUFBa0JKLEdBQWxCLENBQXNCLFVBQUNjLEdBQUQ7QUFBQSxhQUFPVixLQUFLVSxHQUFMLENBQVA7QUFBQSxLQUF0QixFQUF3Q0MsTUFBeEMsQ0FBK0MsVUFBQ2QsQ0FBRCxFQUFHZSxDQUFIO0FBQUEsYUFBU2YsRUFBRWdCLE1BQUYsQ0FBU0QsQ0FBVCxDQUFUO0FBQUEsS0FBL0MsRUFBcUUsRUFBckUsQ0FBUjtBQUFBLEdBRkMsQ0FBUDtBQUdELENBSk07O0FBTUEsSUFBTUUsb0NBQWMsU0FBZEEsV0FBYyxDQUFDNUIsR0FBRCxFQUFNb0IsR0FBTixFQUFjO0FBQ3ZDLFNBQU9wQixJQUFJQyxJQUFKLENBQVNtQixHQUFULEVBQWMsY0FBZCxFQUE4QixFQUE5QixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiJtZXRhQXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGpzU0hBIGZyb20gXCJqc3NoYVwiO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbmNvbnN0IGdldENoYWxsZW5nZSA9IChhcGkpID0+IHtcbiAgcmV0dXJuIGFwaS5jYWxsKCcnLCcnLFtdLCdjaGFsbGVuZ2UnKTtcbn07XG5cbmNvbnN0IHNoYVRva2VuID0gKHBhc3N3b3JkLCB0b2tlbikgPT4ge1xuICBsZXQgc2hhUGFzc3dvcmQgPSBuZXcganNTSEEoXCJTSEEtMVwiLCBcIlRFWFRcIik7XG4gIGxldCBzaGFUb2tlbiA9IG5ldyBqc1NIQShcIlNIQS0xXCIsIFwiVEVYVFwiKTtcbiAgc2hhUGFzc3dvcmQudXBkYXRlKHBhc3N3b3JkKTtcbiAgc2hhVG9rZW4udXBkYXRlKHRva2VuKTtcbiAgc2hhVG9rZW4udXBkYXRlKHNoYVBhc3N3b3JkLmdldEhhc2goJ0hFWCcpKTtcbiAgcmV0dXJuIHNoYVRva2VuLmdldEhhc2goJ0hFWCcpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGFwaSwgYXV0aCkgPT4ge1xuICByZXR1cm4gZ2V0Q2hhbGxlbmdlKGFwaSlcbiAgICAubWFwKHggPT4geC50b2tlbilcbiAgICAuc3dpdGNoTWFwKCh0b2tlbikgPT4ge1xuICAgICAgbGV0IHNoYVBhc3N3b3JkID0gc2hhVG9rZW4oYXV0aC5wYXNzd29yZCwgdG9rZW4pO1xuICAgICAgcmV0dXJuIGFwaS5jYWxsKCcnLCcnLCBbYXV0aC51c2VyLCBzaGFQYXNzd29yZF0sJ2xvZ2luJykubWFwKGRhdGEgPT4gZGF0YS5zdWNjZXNzKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VVcmwgPSAoYXBpLCB1cmwpID0+IHtcbiAgYXBpLl93c3MudXJsID0gdXJsO1xuICByZXR1cm4gYXBpLmNhbGwoJycsJycsW10sJ3JlY29uZWN0Jyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2xvdWROb2RlcyA9IChhcGksIHNpZCkgPT4ge1xuICByZXR1cm4gYXBpLmNhbGwoc2lkLCAnZ2V0X2Nsb3VkX25vZGVzJywge30pXG4gICAubWFwKHggPT4geC5ub2RlcylcbiAgIC5tYXAoZGF0YSA9PiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoKGtleSk9PmRhdGFba2V5XSkucmVkdWNlKCh4LHkpID0+IHguY29uY2F0KHkpLCBbXSkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEhvc3RuYW1lID0gKGFwaSwgc2lkKSA9PiB7XG4gIHJldHVybiBhcGkuY2FsbChzaWQsICdnZXRfaG9zdG5hbWUnLCB7fSk7XG59OyJdfQ==