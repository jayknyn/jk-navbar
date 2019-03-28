import React from 'react';
import Tag from './Tag.jsx';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            carouselBegin: 0,
            carouselEnd: 5,
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
    };

    componentDidMount() {
        axios.get('http://localhost:3005/api/products')
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

    

    render() {
        return (
        <div id = 'Container'>
             {this.state.currentId}
             <div id= 'NavBarParent'>
                 {this.state.tags.map((tag, index) => {
                    return <Tag tag = {tag} length = {this.state.tags.length} axes = {this.findallAxesFromTag(tag)} key = {index} handleProductClick = {this.handleProductClick.bind(this)}/> 
                })}
            </div>
        </div>
        )
    }
}

export default App;


//homemade carousel
/*
<div>
                        <input id = 'leftCarouselButton' onClick = {(e) => {this.handleLeftCarouselClick(e)}} type = 'submit' name ='lbutton' value = 'lbutton'/>
                    </div>
                    <div id = 'carousel'>
                        {this.findallAxesFromTag(this.state.currentTag).map((axe, index) => {
                            if (index >= this.state.carouselBegin && index < this.state.carouselEnd && this.state.currentId !== axe.id) {
                                return <Carousel axe = {axe} key = {index} handleProductClick = {this.handleProductClick.bind(this)}/>
                            }   
                        })}
                    </div>
                    <div>
                        <input onClick = {(e) => {this.handleRightCarouselClick(e)}} type = 'submit' name ='rbutton' value = 'rbutton'/>
                    </div>
*/