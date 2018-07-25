import React,{Component} from 'react';
import {Menu} from './Menu/Menu';
import json from '../data/tree.json';
import { hot } from 'react-hot-loader';
class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <Menu data={json}/>
        </div>)
    }
}

export default hot(module)(App);