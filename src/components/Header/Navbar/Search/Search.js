import React, { Component } from 'react';

class search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            hints: [],
            isBusy: false,
            isFocused: false
        };
        this.hints = {};
        this.keyLength = 3;
    }
    render() {
        const { value, hints, isFocused } = this.state;

        const classBase = isFocused && hints.length > 0
            ? 'search search_withHints'
            : 'search';
        const className = isFocused
            ? `${classBase} search_focused`
            : classBase
        return (
            <div
                className={className}
                tabIndex="0"
                onFocus={() => {this.onFocus();}}
                onBlur={()=>{this.onBlur}}>
            <input className="search__input"
                value={value}
                onChange={(e) => this.onChange(e.currentTarget.value)}
                placeholder="Search" />
            <button onClick={() => this.onSubmit()} className="search__button">
                

            </button>
            </div>
        );
    }
}

export default search;