import React from 'react';
import { connect } from 'react-redux';
import { addSurvey } from '../api/surveys';
import { surveyAdded } from '../actions/surveys';
import escape from 'validator/lib/escape';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #e0e0e0;
  box-shadow: 0 0 8px 2px rgba(0,0,0,.2);
  border-radius: 10px;
  margin: 3rem auto;
  max-width: 600px;
  padding: 30px;

  h1 {
    margin: 0 0 2em 0;
    font-size: 1.5rem;
    text-align: center;
  }

  .actions {
    text-align: center;
    margin-top: 2rem;

    input[type="submit"] {
      background-color: #00449e;
      border-radius: 6px;
      color: white;
      padding: 6px 12px;
      opacity: 1;
      transition: opacity .2s ease-in;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

const StyledRadioGroup = styled.div`
  margin: 0.8em 30px;

  > span {
    display: inline-block;
    min-width: 80px;
    text-align: right;
  }

  label {
    margin: 0 1rem;

    span {
      margin-left: 10px;
    }
  }
`;

const StyledComments = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;

  span {
    display: inline-block;
    min-width: 110px;
    text-align: right;
    margin-right: 20px;
  }

  textarea {
    width: 300px;
    min-height: 80px;
  }
`;

class AddSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quality: 1,
      expertise: 1,
      culture: 1,
      comments: '',
    };

    this.updateNumber = this.updateNumber.bind(this);
    this.updateString = this.updateString.bind(this);
    this.processForm = this.processForm.bind(this);
  }

  updateNumber(event) {
    const field = event.target.name;
    const newValue = parseInt(event.target.value, 10);
    this.setState({ [field]: newValue });
  }

  updateString(event) {
    const field = event.target.name;
    const newValue = event.target.value;
    this.setState({ [field]: newValue });
  }

  processForm(e) {
    e.preventDefault();
    const form = Object.assign({}, this.state);
    form.comments = escape(form.comments);

    addSurvey(form)
      .then(() => {
        this.props.surveyAdded(form);
        this.props.history.push('/');
      })
      .catch(err => console.log('Ooops! Something went wrong'));
  }

  render() {
    return (
      <StyledForm onSubmit={this.processForm}>
        <h1>How would you rate us?</h1>
        <StyledRadioGroup>
          <span>Quality</span>
          <label>
            <input
              type="radio"
              name="quality"
              value="1"
              checked={this.state.quality === 1}
              onChange={this.updateNumber}
            />
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="quality"
              value="2"
              checked={this.state.quality === 2}
              onChange={this.updateNumber}
            />
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="quality"
              value="3"
              checked={this.state.quality === 3}
              onChange={this.updateNumber}
            />
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="quality"
              value="4"
              checked={this.state.quality === 4}
              onChange={this.updateNumber}
            />
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="quality"
              value="5"
              checked={this.state.quality === 5}
              onChange={this.updateNumber}
            />
            <span>5</span>
          </label>
        </StyledRadioGroup>
        <StyledRadioGroup>
          <span>Expertise</span>
          <label>
            <input
              type="radio"
              name="expertise"
              value="1"
              checked={this.state.expertise === 1}
              onChange={this.updateNumber}
            />
            <span>1</span>
          </label>
          <label>
            <input
              type="radio"
              name="expertise"
              value="2"
              checked={this.state.expertise === 2}
              onChange={this.updateNumber}
            />
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="expertise"
              value="3"
              checked={this.state.expertise === 3}
              onChange={this.updateNumber}
            />
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="expertise"
              value="4"
              checked={this.state.expertise === 4}
              onChange={this.updateNumber}
            />
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="expertise"
              value="5"
              checked={this.state.expertise === 5}
              onChange={this.updateNumber}
            />
            <span>5</span>
          </label>
        </StyledRadioGroup>
        <StyledRadioGroup>
          <span>Culture</span>
            <label>
              <input
                type="radio"
                name="culture"
                value="1"
                checked={this.state.culture === 1}
                onChange={this.updateNumber}
              />
              <span>1</span>
            </label>
          <label>
            <input
              type="radio"
              name="culture"
              value="2"
              checked={this.state.culture === 2}
              onChange={this.updateNumber}
            />
            <span>2</span>
          </label>
          <label>
            <input
              type="radio"
              name="culture"
              value="3"
              checked={this.state.culture === 3}
              onChange={this.updateNumber}
            />
            <span>3</span>
          </label>
          <label>
            <input
              type="radio"
              name="culture"
              value="4"
              checked={this.state.culture === 4}
              onChange={this.updateNumber}
            />
            <span>4</span>
          </label>
          <label>
            <input
              type="radio"
              name="culture"
              value="5"
              checked={this.state.culture === 5}
              onChange={this.updateNumber}
            />
            <span>5</span>
          </label>
        </StyledRadioGroup>
        <StyledComments>
          <span>Comments</span>
          <textarea
            name="comments"
            value={this.state.comments}
            onChange={this.updateString}
          />
        </StyledComments>
        <div className="actions">
          <input type="submit" value="Send!" />
        </div>
      </StyledForm>
    );
  }
}

AddSurvey = connect(undefined, { surveyAdded })(AddSurvey);
export default AddSurvey;
