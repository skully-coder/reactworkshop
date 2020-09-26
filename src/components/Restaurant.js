import React from "react";

class Restaurant extends React.Component {
  render() {
    const button = (
      <div className="like">
        <span className="likes"> 👍 {this.props.likes} liked </span>
      </div>
    );
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg";
    const img = this.props.image === "" ? url : this.props.image;
    return (
      <div className="card">
        <img src={img} className="cardimg" alt="ImageforRes" />

        <div className="details">
          <h3>{this.props.title}</h3>
          <h4> {this.props.cuisine}</h4>
          <p className="ratings"> {this.props.rating} </p>
          <p className="avgcost">
            {" "}
            Average Cost for two {this.props.avgcost} /5
          </p>
        </div>
        {button}
      </div>
    );
  }
}

export default Restaurant;
