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
            Nav = <div className = 'NavBar' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                        <div className = 'navHover' >
                                {this.props.tag}
                        </div>
                        <div className = 'products'>
                            {this.props.axes.map((axe, index) => {
                                return <Axe axe = {axe} key = {index} handleProductClick = {this.props.handleProductClick}/>
                            })}
                        </div>
                    </div>
        } else {
            Nav = <div className = 'NavBar' onMouseEnter = {(e) => {this.handleHover(e)}} onMouseLeave = {(e) => {this.handleHover(e)}}>
                <div className = 'navHover' >
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