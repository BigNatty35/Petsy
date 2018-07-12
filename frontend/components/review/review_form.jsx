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

  handleRating(e) {
    this.setState({ rating: e.currentTarget.value });
  }

  render() {
    console.log(this.state.body);
    return (
      <div className="review-form-box">
        <form onSubmit={this.handleSubmit} id="reviewform">
        <label htmlFor="">Rate this product:
             <br/>
            5<input type="radio" name="rating" onClick={this.handleRating.bind(this)} value="5"/>
            <br/>
            
            4<input type="radio" name="rating" onClick={this.handleRating.bind(this)} value="4"/>
            <br/>
            
            3<input type="radio" name="rating" onClick={this.handleRating.bind(this)} value="3"/>
            <br/>
            
            2<input type="radio" name="rating" onClick={this.handleRating.bind(this)} value="2"/>
            <br/>
            
            1<input type="radio" name="rating" onClick={this.handleRating.bind(this)} value="1"/>
            <br/>
        <h2>Leave a review:</h2>
        </label>
        <br/>
        </form>
        <textarea className="textarea" rows="4" cols="50" onChange={this.handleText()} 
        name="comment" placeholder="Enter Review Here" form="reviewform" autofocus>
          
          </textarea>
        <input className="review-submit" type="submit" onClick={this.handleSubmit} value="submit"/>
      </div>
    );
  }

}

export default ReviewForm;