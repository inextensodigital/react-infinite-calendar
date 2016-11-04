import React, {PropTypes} from 'react';
const style = require('./Overlay.scss');

const Overlay = ({data, CustomOverlay}) => (
	<div className={style.root}>
		{CustomOverlay && <CustomOverlay data={data}/>}
	</div>
)

Overlay.propTypes = {
  data: PropTypes.shape({}),
	CustomOverlay: PropTypes.func
}

export default Overlay
