import React from 'react';
import Axe from './axes.jsx';

class Tag extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: false
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
            Nav = <div className = 'NavBar' style = {{width: `${100/this.props.length-1}vw`}}>
            <div className = 'navHover' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                    {this.props.tag}
                <div>
                    {this.props.axes.map((axe, index) => {
                        return <Axe axe = {axe} key = {index} handleProductClick = {this.props.handleProductClick}/>
                    })}
                </div>
            </div>
        </div>
        } else {
            Nav = <div className = 'NavBar' style = {{width: `${100/this.props.length-1}vw`}}>
            <div className = 'navHover' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                    {this.props.tag}
            </div>
        </div>
        }
        
        return (
            Nav
        )
    }

}

export default Tag;