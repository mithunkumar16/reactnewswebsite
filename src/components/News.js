import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
 

  constructor() {
    super();
    console.log("hello i am a constructor from apna news componet");
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults:parsedData.totalResults })

  }
 
   handlePreviousClick=async()=>{
      console.log("Previous")

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    

    this.setState({
      page:this.state.page-1,
      articles: parsedData.articles
    })
  }
  handleNextClick = async ()=>{
    console.log("Next");
    if(this.state.page+1>Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    

    this.setState({
      page:this.state.page+1,
      articles: parsedData.articles
    })}
  }

  render() {
    console.log("render")
    return (
      
      <div className="container my-3">
        <h1>Apna News - Top Letest Headline</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4">
              <NewItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
