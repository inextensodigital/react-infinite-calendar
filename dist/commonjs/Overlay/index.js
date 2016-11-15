'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	'root': 'Cal__Overlay__root'
};

var Overlay = function Overlay(_ref) {
	var data = _ref.data,
	    CustomOverlay = _ref.CustomOverlay;
	return _react2.default.createElement(
		'div',
		{ className: style.root },
		CustomOverlay && _react2.default.createElement(CustomOverlay, { data: data })
	);
};

Overlay.propTypes = {
	data: _react.PropTypes.shape({}),
	CustomOverlay: _react.PropTypes.func
};

exports.default = Overlay;