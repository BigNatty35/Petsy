import React from 'react';
import {withRouter} from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '', 
      author_name: this.props.username,
      author_id: this.props.userId, 
      rating: 5,
      product_id: this.props.product.id

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.resetText = this.resetText.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let review = Object.assign({}, this.state); 
    this.props.createReview(review);
  }

  handleText(e) {
    return e => this.setState({
      body: e.currentTarget.value
    });
  }
  resetText(e) {
    return e => this.setState({
      body: ''
    });
  }

  handleRating(e) {
    this.setState({ rating: e.currentTarget.value });
  }

  render() {
    console.log(this.state.body);
    let one = <span className="stars">&#9733;</span>;
    let two = <span className="stars">&#9733;&#9733;</span>;
    let three = <span className="stars">&#9733;&#9733;&#9733;</span>;
    let four = <span className="stars">&#9733;&#9733;&#9733;&#9733;</span>;
    let five = <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>;
    return (
      <div className="review-form-box">
        <form onSubmit={this.handleSubmit} id="reviewform">
        <label className="star-box">Rate this product:
             <div>
              {five}<input type="radio" name="rating" onClick={this.handleRating} value="5"/>
             </div>
        
            <div>
            {four}<input type="radio" name="rating" onClick={this.handleRating} value="4"/>
            </div>
            <div>
            {three}<input type="radio" name="rating" onClick={this.handleRating} value="3"/>
            </div>
            
            <div>
            {two}<input type="radio" name="rating" onClick={this.handleRating} value="2"/>
            </div>
            
            <div>
            {one}<input type="radio" name="rating" onClick={this.handleRating} value="1"/>
            </div> 
            <br/>
        <h2>Leave a review:</h2>
        </label>
        <br/>
        </form>
        <textarea className="textarea" rows="4" cols="50" onChange={this.handleText()} 
        name="comment" placeholder="Enter Review Here" form="reviewform" value={this.state.body}>
          
          </textarea>
      <input className="review-submit" type="submit" onClick={(e) => {this.handleSubmit(e); this.resetText(e);}} value="submit"/>
      </div>
    );
  }

}

export default ReviewForm;