import React, { Component } from "react";
import "./menu-item.css";
export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.parent = React.createRef();
    this.height = 0;
    this.count = 0;
    this.menu = React.createRef();
  }

  clickHandler() {
    this.setState({visible:!this.state.visible});
  }

  componentDidMount() {
    if (this.parent.current) {
      const parent = this.parent.current;
      this.height = parent.clientHeight;
      this.getMenuHeight(parent);
      this.menuHeight = this.height * this.count;
    }
  }

  /**
   * @param {HTMLElement} node
   */
  getMenuHeight(node) {
    if (node) {
      if (node.childElementCount > 0) {
        const lastChild = node.children[node.childElementCount - 1];
        this.count += node.childElementCount;// -1是 自身的文字节点
        this.getMenuHeight(lastChild);
      }
    }
  }

  render() {
    const item = this.props.item;
    const visible = this.state.visible;
    const style = {
      maxHeight:visible?this.menuHeight:0,
      //display:visible?'block':'none'
    };
    if (item.children) {
      return (
        <div className="parent" ref={this.parent}>
          <div onClick={this.clickHandler.bind(this)}>
            {item.name}
            <div className={this.state.visible ? "drop open" : "drop close"} />
          </div>
          <div className="menu" style={style}>
            {item.children.map((child, index) => (
              <MenuItem item={child} key={index} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className={item.parentId === -1 ? "parent" : "child"} id={item.id}>
          {item.name}
        </div>
      );
    }
  }
}
