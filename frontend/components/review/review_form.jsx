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


  render() {
    console.log(this.state.body);
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="reviewform">
        <label htmlFor="">Leave Review:
        </label>
        <br/>
        </form>
        <textarea className="textarea" rows="4" cols="50" onChange={this.handleText()} name="comment" form="reviewform">
          Enter review here...
          </textarea>
        <input className="review-submit" type="submit" onClick={this.handleSubmit} value="submit"/>
      </div>
    );
  }


}

export default ReviewForm;