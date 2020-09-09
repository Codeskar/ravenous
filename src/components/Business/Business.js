import React from 'react';
import './Business.css';

class Business extends React.Component {

  getLocation() {
    const query = `${this.props.business.name}%2C${this.props.business.address}%2C${this.props.business.city}`;
    const mapQuery = `https://www.google.com/maps/search/?api=1&query=${query}`;
    return mapQuery;
  }

  render(){
    return (
      <div className="Business">
        <a style={{display: "table-cell"}} href={this.props.business.url} target="_blank">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        </a>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <a style={{display: "table-cell"}} href={this.getLocation()} target="_blank">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          </a>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Business;
