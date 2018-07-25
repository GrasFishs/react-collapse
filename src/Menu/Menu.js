import React, { Component } from 'react';
import { TreeNode } from './TreeNode';
import { MenuItem } from './MenuItem';
import './menu.css';
export class Menu extends Component {
    constructor(props) {
        super(props);
        this.tree = new TreeNode(this.props.data).buildTree();
    }
    render() {
        return (
            <div className="box">
                {this.tree.children.map((child, index) => {
                    return <MenuItem item={child} key={index} />
                })}
            </div>
        )
    }
}