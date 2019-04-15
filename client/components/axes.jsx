import React from 'react';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import { Tooltip, Button } from '@material-ui/core';

export default class Axe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            axeHovered: false
        }
    }

    handleAxeHover(e) {
        e.preventDefault();
 
        this.setState({
            axeHovered: !this.state.axeHovered
        })
    }

    handleAxeClick(e, id, tag) {
        e.preventDefault();
        this.setState({
            axeHovered: !this.state.axeHovered
        });
        
        this.props.handleProductClick(e,id, tag);          
        this.props.handleTagHover(e);
    }

    render() {
        let info;
        let tooltipTitle = (`Price: $${this.props.axe.price} Description: ${this.props.axe.description.slice(0,15)}...`)
        if (this.state.axeHovered) {
            info = <Tooltip title = {tooltipTitle} placement = 'right-start'>
                <Typography variant = 'body2'>
                    <Button size = 'small'
                    onClick = {(e) => {this.handleAxeClick(e,this.props.axe.productId, this.props.axe.tag)}}
                    onMouseLeave = {(e) => {this.handleAxeHover(e)}}
                    onMouseEnter = {(e) => {this.handleAxeHover(e)}}
                    >
                        {this.props.axe.name}
                    </Button>
                </Typography>
            </Tooltip>
        } else {
            info = <Typography variant = 'body2'>
            <Button size = 'small'
            onClick = {(e) => {this.handleAxeClick(e,this.props.axe.productId, this.props.axe.tag)}}
            onMouseLeave = {(e) => {this.handleAxeHover(e)}}
            onMouseEnter = {(e) => {this.handleAxeHover(e)}}
            >
                {this.props.axe.name}
            </Button>
        </Typography>
    
        }
        return (
            <div>
                {info}
            </div>
        )
    }
}



/*
export default function Axe(props) {
    let info;
    if (props.axeHovered) {
        info = <Typography variant = 'body2' onClick = {(e) => {props.handleProductClick(e,props.axe.productId, props.axe.tag)}}>
            {props.axe.name}
            hello
        </Typography>
    } else {
        info = <Typography variant = 'body2' onClick = {(e) => {props.handleProductClick(e,props.axe.productId, props.axe.tag)}} 
        onMouseEnter = {(e) => {props.handleAxeHover(e)}}
        onMouseLeave = {(e) => {props.handleAxeHover(e)}}

        >
            {props.axe.name}
        </Typography>

    }
    return (
        <div>
            {info}
        </div>
    )
}
*/