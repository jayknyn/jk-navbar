import React from 'react';
import { Typography, Button } from '@material-ui/core';
export default class SearchResults extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            beBold: 'normal'
        }
    }

    handleMouseOver(e) {
        e.preventDefault();
        let newBold;
        if (this.state.beBold === 'bold') {
            newBold = 'normal'
        } else {
            newBold = 'bold'
        }
        this.setState({
            beBold: newBold
        })
    }

    render() {
        return (
            
            <Typography  variant = 'body2' id = 'searchItem' 
            >
                <Button  variant = 'text' fullWidth 
                style = {{fontWeight: this.state.beBold}}
                onMouseEnter = {(e) => {this.handleMouseOver(e)}}
                onMouseLeave = {(e) => {this.handleMouseOver(e)}}
                onClick = {(e) => {this.props.handleProductClick(e,this.props.axe.productId,this.props.axe.tag); this.props.handleSearchClick(e)}} 
                >
                {this.props.axe.name}
                </Button>
            </Typography>
            
        )
    }

}

