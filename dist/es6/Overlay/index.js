import React, { PropTypes } from 'react';
var style = {
	'root': 'Cal__Overlay__root'
};

var Overlay = function Overlay(_ref) {
	var data = _ref.data,
	    CustomOverlay = _ref.CustomOverlay;
	return React.createElement(
		'div',
		{ className: style.root },
		CustomOverlay && React.createElement(CustomOverlay, { data: data })
	);
};

Overlay.propTypes = {
	data: PropTypes.shape({}),
	CustomOverlay: PropTypes.func
};

export default Overlay;