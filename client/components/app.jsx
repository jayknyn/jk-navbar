import React from 'react';
import Tag from './Tag.jsx';
import axios from 'axios';
import { AppBar, Typography, Tabs, Tab } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Search from './search.jsx';
import './styles.css';

const ec2address = 'http://ec2-18-224-153-75.us-east-2.compute.amazonaws.com'

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
      }
})

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            value: false,
            anchorEl: 16,
            currentId: 1,
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
        axios.get(`${ec2address}/api/navbar/products`)
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


        window.addEventListener('productId', (e) => {
            this.setState({
                currentId: e.detail
            })
        })
    };


    handleProductClick(e, id, tag) {
        // e.preventDefault();
        this.setState({
            currentId: id,
            currentTag: tag,
            value: false
        }, () => {
            window.dispatchEvent(new CustomEvent('productId', {"detail": this.state.currentId}))
        });

        this.handleBackClick();
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
        let val = 10;
        if (evalue === 'two') {
            val = 10 + 0;
        } else if (evalue === 'three') {
            val = val + 11.5;
        } else if (evalue === 'four') {
            val = val + 23;
        } else if (evalue === 'five') {
            val = val + 34.5;
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

    handleContactClick(e) {
        e.preventDefault();

        let about = document.getElementById('aboutInfo');
        let phil = document.getElementById('philInfo');
        if (about) {
            about.remove();
        }
        if (phil) {
            phil.remove();
        }
        if (!document.getElementById('contactInfo')) {
            let body = document.getElementsByTagName('body');
            let contactDiv = document.createElement('div');
            let products = document.getElementById('products');
    
            contactDiv.innerHTML = `<div class = 'contactInfo contactInfoDiv'>
                <h1>Hello, please use the below information to contact us</h1> 
                <p class = 'contactInfo' >Phone: 555-123-4567</p>
                <p class = 'contactInfo'>Email: axesssss@axesRus.org</p>
                <p class = 'contactInfo' >pigeon: over yonder</p>
            </div>`
    
            contactDiv.id = 'contactInfo'
            body[0].insertBefore(contactDiv,products);
        }
        document.getElementById('carousel').style.visibility = 'hidden' 
        document.getElementById('reviews').style.visibility = 'hidden' 
        document.getElementById('graph').style.visibility = 'hidden' 
        document.getElementById('products').style.visibility = 'hidden' 
        

    }

    handleAboutClick(e) {
        e.preventDefault();

        let contact = document.getElementById('contactInfo');
        let phil = document.getElementById('philInfo');
        if (contact) {
            contact.remove();
        }
        if (phil) {
            phil.remove();
        }

        if (!document.getElementById('aboutInfo')) {
            let body = document.getElementsByTagName('body');
            let contactDiv = document.createElement('div');
            let products = document.getElementById('products');
    
            contactDiv.innerHTML = `<div class = 'contactInfo contactInfoDiv'>
                <h1>Hello, we sell axes</h1> 
            </div>`
    
            contactDiv.id = 'aboutInfo'
            body[0].insertBefore(contactDiv,products);
        }
        document.getElementById('carousel').style.visibility = 'hidden' 
        document.getElementById('reviews').style.visibility = 'hidden' 
        document.getElementById('graph').style.visibility = 'hidden' 
        document.getElementById('products').style.visibility = 'hidden' 

    }

    handlePhilClick(e) {
        e.preventDefault();

        let contact = document.getElementById('contactInfo');
        let about = document.getElementById('aboutInfo');
        if (contact) {
            contact.remove();
        }
        if (about) {
            about.remove();
        }

        if (!document.getElementById('philInfo')) {
            let body = document.getElementsByTagName('body');
            let contactDiv = document.createElement('div');
            let products = document.getElementById('products');
    
            contactDiv.innerHTML = `<div class = 'contactInfo contactInfoDiv'>
                <h1>Hello, we are the prime donators to LIN, or Larpers In Need</h1> 
            </div>`
    
            contactDiv.id = 'philInfo'
            body[0].insertBefore(contactDiv,products);
        }
        document.getElementById('carousel').style.visibility = 'hidden' 
        document.getElementById('reviews').style.visibility = 'hidden' 
        document.getElementById('graph').style.visibility = 'hidden' 
        document.getElementById('products').style.visibility = 'hidden' 

    }

    handleBackClick() {
        // e.preventDefault();
        let contact = document.getElementById('contactInfo');
        let about = document.getElementById('aboutInfo');
        let phil = document.getElementById('philInfo');
        if (contact) {
            contact.remove();
        }
        if (about) {
            about.remove();
        }
        if (phil) {
            phil.remove();
        }
        document.getElementById('carousel').style.visibility = 'visible' 
        document.getElementById('reviews').style.visibility = 'visible' 
        document.getElementById('graph').style.visibility = 'visible' 
        document.getElementById('products').style.visibility = 'visible' 
    }


    render() {
        

        let tab = <div></div>

        if (this.state.value === false) {
            tab = <div></div>
        } else if (this.state.value === 'two') {
            tab = <div id = 'tabContainer' style = {{marginLeft: `${this.state.anchorEl}vw`}} onClick = {(e) => {this.handleBackClick(e)}}>
                        {this.state.tags.map((tag, index) => {
                            return <Tag tag = {tag} length = {this.state.tags.length} axes = {this.findallAxesFromTag(tag)} 
                            key = {index} handleProductClick = {this.handleProductClick.bind(this)}/> 
                        })}
                </div>
        } 

        return (
        <MuiThemeProvider theme = {axeTheme}>
            <AppBar position = 'static' style = {{height:'10vh',display: 'flex', flexDirection: 'row'}}>
                
                <Typography variant="h6" color="textPrimary" 
                style = {{color: '#c9c9c9', marginLeft: '10vw'}} 
                onClick = {(e) => {this.handleBackClick(e)}}><div id = 'Logo'></div></Typography>
                <Search axesArray = {this.state.axes} handleProductClick = {this.handleProductClick.bind(this)} 
                handleBackClick = {this.handleBackClick.bind(this)}/>
            </AppBar>
            <div onMouseLeave = {this.handleTabLeave.bind(this)}>
            <Tabs style = {{backgroundColor: '#c9c9c9'}} value = {this.state.value} onChange = {this.handleTabChange.bind(this)} >
                
                <Tab value = 'two' icon = {<MenuIcon/>} onMouseEnter = {(e) => this.handleTabChange(e,'two')} style = {{width: '11.5vw', marginLeft: '10vw', color: '#a00000'}}/>
                <Tab value = 'three' label = 'Contact us' onMouseEnter = {(e) => this.handleTabChange(e,'three')} style = {{width: '11.5vw'}} onClick = {(e) => {this.handleContactClick(e)}}/>
                <Tab value = 'four' label = 'About us' onMouseEnter = {(e) => this.handleTabChange(e,'four')} style = {{width: '11.5vw'}} onClick = {(e) => {this.handleAboutClick(e)}}/>
                <Tab value = 'five' label = 'Philanthropy' onMouseEnter = {(e) => this.handleTabChange(e,'five')} style = {{width: '11.5vw'}} onClick = {(e) => {this.handlePhilClick(e)}}/>
            </Tabs>
            {tab}
            </div>
        </MuiThemeProvider>
        )
    }
}

export default App;