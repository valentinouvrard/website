import React from 'react'
import PhoneHeader from './PhoneHeader'
import DesktopHeader from './DesktopHeader'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
  
    render() {
        const { width } = this.state
        console.log(width)
        if (width > 768) {
            return <DesktopHeader/>
        }
        return <PhoneHeader/>
    }
}

export default Header;