import React from 'react';
import {Paper, TextField, Button } from '@material-ui/core';
import SearchResults from './searchResults.jsx';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: '',
            subsectionList: [],
            hovered: true,
            currentAxe: {}
        }
    }


    handleChange(e) {
        e.preventDefault();

        this.setState({
            searchValue: e.target.value
        }, () => {
            let tempArray = [];
            let newAxe;
            for (let i = 0; i < this.props.axesArray.length; i++) {
                if (tempArray.length === 5) {
                    break;
                } else if (this.props.axesArray[i].name.toLowerCase().indexOf(this.state.searchValue) !== -1) {
                    tempArray.push(this.props.axesArray[i])
                }
            }

            if (!tempArray[0]) {
                newAxe = {};
            } else {
                newAxe = tempArray[0]
            }
            this.setState({
                subsectionList: tempArray,
                hovered: true,
                currentAxe: newAxe
            })
        })
    }

    handleMouseLeave() {

        this.setState({
            hovered: false
        })

    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            searchValue: '',
            hovered: false
        })
    }



    render() {
        let searchResults;
        if (this.state.hovered) {
            searchResults = <Paper id = 'searchResults' >
            {
                this.state.subsectionList.map((val, index) => {
                    return <SearchResults axe = {val} key = {index} 
                    handleProductClick = {this.props.handleProductClick} 
                    handleSearchClick = {this.handleClick.bind(this)}/>
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
                        value = {this.state.searchValue}
                        // label="Search"
                        style={{ margin: 8 }}
                        placeholder=""
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange = {(e) => {this.handleChange(e)}}
                        >
                    </TextField>
                    <Button id = 'searchButton'
                    onClick = {(e) => {this.props.handleProductClick(e,this.state.currentAxe.productId, this.state.currentAxe.tag); this.handleClick(e)}}
                    >
                        Search
                    </Button>
                </Paper>
                {searchResults}

            </div>
        )
    }
}

export default Search;