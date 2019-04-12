import React from 'react';
import Axe from './axes.jsx';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'
import './styles.css';

class Tag extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: false,
        }
    }


    handleHover(e) {
        e.preventDefault();
        this.setState({
            hovered: !this.state.hovered
        })
    }


    render() {
        let Nav;

        if (this.state.hovered) {
            Nav = <div className = 'NavBar' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                        <Typography variant = 'body1' className = 'navHover' >
                                {this.props.tag} 
                                <KeyboardArrowDown className = 'navHoverRight'/>
                        </Typography>
                        <div className = 'products'>
                            {this.props.axes.map((axe, index) => {
                                return <Axe axe = {axe} key = {index} handleProductClick = {this.props.handleProductClick}/>
                            })}
                        </div>
                    </div>
        } else {
            Nav = <div className = 'NavBar' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                    <Typography variant = 'body1' className = 'navHover' >
                            {this.props.tag}
                        <KeyboardArrowRight className = 'navHoverRight'/>
                    </Typography>
            </div>
        }
        
        return (
            Nav
        )
    }

}

export default Tag;