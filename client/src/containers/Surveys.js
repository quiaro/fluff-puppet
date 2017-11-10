import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions/surveys';
import Survey from '../components/Survey';
import * as selectors from '../reducers'

class Surveys extends React.Component {
  componentWillMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <Survey {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  surveys: selectors.getAllSurveys(state),
  isFetchingSurveys: selectors.getIsFetchingSurveys(state)
})

Surveys = connect(mapStateToProps, { fetchSurveys })(Surveys);
export default Surveys;
