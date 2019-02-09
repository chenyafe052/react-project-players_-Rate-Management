import React, { Component } from 'react';

export default class player extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <div className="card ui" style={{ marginLeft: "60px" }}>
        <div className="content">
          <div className="header">{item.name}</div>
          <div className="description">
            <h5>Id- {item._id}</h5>
            <h5>Name- {item.age}</h5>
            <h5>Age- {item.age}</h5>
            <h5>Rate- {item.rate}</h5>
            <h5>Team- {item.team}</h5>

          </div>
        </div>
      </div>
    );
  }
}

