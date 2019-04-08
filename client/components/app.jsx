import React from 'react';
import Tag from './Tag.jsx';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const axeTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#595959'
        },
        textPrimary: {
            main: '#c9c9c9'
        },
        secondary: {
            main: '#a00000'
        }
    },
    typography: {
        useNextVariants: true,
      },
})


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            value: false,
            anchorEl: 16,
            currentId: 0,
            currentTag: '',
            axes: [
                {
                    name: 'fighty axe',
                    tag: 'battle',
                    image: `https://s3.us-east-2.amazonaws.com/axes/battle+axe/1.+battle-axe.jpg`,
                    id: 1
                }
            ]
        }
        this.handleTabChange = this.handleTabChange.bind(this);
    };

    componentDidMount() {

        axios.get('/api/products')
        .then(results => {
            const tagArr = [];
            const tagObj = {};
            for (let obj of results.data) {
                if (tagObj[obj.tag] === undefined) {
                    tagArr.push(obj.tag);
                    tagObj[obj.tag] = 1;
                }
            }
            this.setState({
                tags: tagArr,
                axes: results.data
            });
        })
        .catch(err => {
            console.error(err);
        })
    };


    handleProductClick(e, id, tag) {
        e.preventDefault();
        
        this.setState({
            currentId: id,
            currentTag: tag,
            carouselBegin: 0,
            carouselEnd: 5
        })
    }

    findallAxesFromTag(tag) {
        const axes = this.state.axes
        const taggedAxes = [];
        for (let i =0 ; i < axes.length; i++) {
            if (axes[i].tag === tag) {
                taggedAxes.push(axes[i]);
            }
        }

        return taggedAxes
    };

    handleTabChange(e,evalue) {
        e.preventDefault();
        let val = 11.5;
        if (evalue === 'two') {
            val = val*0;
        } else if (evalue === 'three') {
            val = val*1;
        } else if (evalue === 'four') {
            val = val*2;
        } else if (evalue === 'five') {
            val = val*3;
        }

        this.setState({
            value: evalue,
            anchorEl: val
        })
    }

    handleTabLeave(e) {
        e.preventDefault();
        this.setState({
            value: false
        })
    }

    

    render() {
        const {value} = this.state;

        let tab = <div></div>

        if (value === false) {
        } else if (value === 'two') {
            tab = <div id = 'tabContainer' style = {{marginLeft: `${this.state.anchorEl}vw`}}>
                        {this.state.tags.map((tag, index) => {
                            return <Tag tag = {tag} length = {this.state.tags.length} axes = {this.findallAxesFromTag(tag)} key = {index} handleProductClick = {this.handleProductClick.bind(this)}/> 
                        })}
        </div>
        } else {
            tab = <div id = 'tabContainer' style = {{marginLeft: `${this.state.anchorEl}vw`}}>WIP</div>
        }

        return (
        <MuiThemeProvider theme = {axeTheme}>
            <AppBar position = 'static' style = {{height:'10vh'}}>
                <Typography variant="h6" color="textPrimary">Axe-Center</Typography>
            </AppBar>
            <div onMouseLeave = {this.handleTabLeave.bind(this)}>
            <Tabs  value = {value} onChange = {this.handleTabChange.bind(this)} >
                
                <Tab value = 'two' icon = {<MenuIcon/>} onMouseEnter = {(e) => this.handleTabChange(e,'two')} />
                <Tab value = 'three' label = 'Contact us' onMouseEnter = {(e) => this.handleTabChange(e,'three')}/>
                <Tab value = 'four' label = 'About us' onMouseEnter = {(e) => this.handleTabChange(e,'four')}/>
                <Tab value = 'five' label = 'Philanthropy' onMouseEnter = {(e) => this.handleTabChange(e,'five')}/>
            </Tabs>
            {tab}
            </div>
        </MuiThemeProvider>
        )
    }
}

export default App;