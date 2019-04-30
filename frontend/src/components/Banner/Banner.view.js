import React from 'react';
import './Banner.css'

class Banner extends React.Component {

    render() {

        let color = "";
        switch (this.props.color) {
            case "success":
                color = "success-color";
                break;
            case "warning":
                color = "warning-color";
                break;
            default:
                color = "default-color";
        }
        const banner = this.props.show ? (<div id="banner" className={color}>{this.props.msg}</div>) : null;
        
        return (banner);
    }
}

export default Banner;

