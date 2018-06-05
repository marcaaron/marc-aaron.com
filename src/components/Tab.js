import React, { Component } from 'react';

class Tab extends Component {
  render() {
		const {values, selected, projectIsOpen, handleClick} = this.props;
		let textStyle
		let iconStyle = {color:values.color};
		let hide = {};
		let show = {};
		if(values.name===selected){
			textStyle = {fontWeight:'700',transform:'scale(1.1,1.1)'};
		}

		if(values.name===selected && projectIsOpen){
			hide.display='none';
			show.display='inline-block';
		}else{
			hide.display='inline-block';
			show.display='none';
		}

    return (
			<div
        onClick={()=>handleClick(values.name)}
        className={`tab tab-${values.name}`}
        >
					<div style={hide}>
						<i key={`icon_${values.name}`}
							className={`fas fa-lg fa-${values.icon}`}
							style={iconStyle}
						>
						</i>
					</div>
					<div style={show}>
						<i key={`icon_arrow-left`}
							className={`fas fa-lg fa-arrow-left`}
							style={iconStyle}
						>
						</i>
					</div>
				{ projectIsOpen && selected===values.name ?
						<span key={`text_go`} style={textStyle} className="tab-text">Go Back</span>

					:
						<span key={`text_${values.name}`} style={textStyle} className="tab-text">{values.text}</span>

				}
			</div>
    );
  }
}

export default Tab;
