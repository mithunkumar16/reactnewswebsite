import React, { Component } from 'react'

export class NewItems extends Component {
 
  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/07/19/600x338/ANI_1689780200567_1689780205017.jpg":imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewItems
