import React from 'react';
import { Typography, Button } from '@material-ui/core';
const SearchResults = (props) => {

    return (
        
        <Typography variant = 'body2' id = 'searchItem' onClick = {(e) => {props.handleProductClick(e,props.axe.productId,props.axe.tag)}}>
        <Button fullWidth>{props.axe.name}</Button></Typography>
        
    )
}

export default SearchResults