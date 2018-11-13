import React, { Component } from 'react';

import './SelectBox.scss';


class SelectBox extends Component {
  state = {
    items: this.props.items,
    showItems: false,
    selectedItem: this.props.defaultItem
  };


  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (ev) => {
    if (this.node.contains(ev.target)) {
      return;
    }

    this.handleClickOutside();
  }

  handleClickOutside = () => {
    this.setState({ showItems: false });
  }


  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }))
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item || this.props.defaultItem,
      showItems: false,
    });
    this.props.selected(item)
  }



  render() {

    return (
      <div className="select-box" ref={node => this.node = node}>
        <div className="select-box--container">
          <div className="select-box--selected-item capitalize"
            onClick={this.dropDown}
          >
            { this.state.selectedItem }
          </div>

          <div className="select-box--arrow"
            onClick={this.dropDown}
          >
            <span className={this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}></span>
          </div>

          <div style={{display: this.state.showItems ? 'block' : 'none'}}
            className="select-box--items"
          >
            <div onClick={() => this.selectItem(this.props.defaultItem)}>{this.props.defaultItem}</div>
            {
              this.state.items.map((item, index) => <div
                key={index}
                className="capitalize"
                onClick={() => this.selectItem(item)}
              >
                {item}
              </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}
export default SelectBox;
