import React from 'react';

export default function Axe(props) {

    return (
        <p onClick = {(e) => {props.handleProductClick(e,props.axe.productId, props.axe.tag)}}>{props.axe.name}</p>
    )
}