import React from 'react';
import {Paper, TextField, Button } from '@material-ui/core';
import SearchResults from './searchResults.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: '',
            subsectionList: [],
            hovered: true
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
                    tempArray.push(this.props.axesArray[i])
                }
            }
            this.setState({
                subsectionList: tempArray,
                hovered: true
            })
        })
    }

    handleMouseLeave() {

        this.setState({
            hovered: false
        })

    }

    render() {
        let searchResults;
        if (this.state.hovered) {
            searchResults = <Paper id = 'searchResults' onMouseLeave = {() => {this.handleMouseLeave()}}>
            {
                this.state.subsectionList.map((val, index) => {
                    return <SearchResults axe = {val} key = {index} handleProductClick = {this.props.handleProductClick}/>
                })
            }
        </Paper>
        } else {
            searchResults = <div></div>
        }

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
                {searchResults}

            </div>
        )
    }
}

export default Search;