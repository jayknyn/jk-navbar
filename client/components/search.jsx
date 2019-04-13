import React from 'react';
import {Paper, TextField, Button } from '@material-ui/core';
import SearchResults from './searchResults.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: '',
            subsectionList: []
        }
    }


    handleChange(e) {
        e.preventDefault();

        this.setState({
            searchValue: e.target.value
        }, () => {
            let tempArray = [];
            for (let i = 0; i < this.props.axesArray.length; i++) {
                if (tempArray.length === 5) {
                    break;
                } else if (this.props.axesArray[i].name.indexOf(this.state.searchValue) !== -1) {
                    tempArray.push(this.props.axesArray[i].name)
                }
            }
            this.setState({
                subsectionList: tempArray
            })
        })
    }

    render() {
        return (
            <div id = 'searchBox'>
                <Paper id = 'searchContainer'>
                    <TextField
                        id="searchField"
                        // label="Search"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange = {(e) => {this.handleChange(e)}}
                        >
                    </TextField>
                    <Button id = 'searchButton'>Search</Button>
                </Paper>
                <Paper id = 'searchResults'>
                    {
                        this.state.subsectionList.map((val, index) => {
                            return <SearchResults axe = {val} key = {index}/>
                        })
                    }
                </Paper>
            </div>
        )
    }
}

export default Search;