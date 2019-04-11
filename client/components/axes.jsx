import React from 'react';
import Typography from '@material-ui/core/Typography';
import './styles.css';


export default function Axe(props) {

    return (
        <Typography variant = 'body2' onClick = {(e) => {props.handleProductClick(e,props.axe.productId, props.axe.tag)}}>{props.axe.name}</Typography>
    )
}