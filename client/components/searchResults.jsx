import React from 'react';
import { Typography, Button } from '@material-ui/core';
const SearchResults = (props) => {

    return (
        
        <Typography variant = 'body2' id = 'searchItem'><Button fullWidth>{props.axe}</Button></Typography>
        
    )
}

export default SearchResults