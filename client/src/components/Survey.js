import React from 'react';
import { Link } from 'react-router-dom'

const App = (props) => {
  const { surveys, isFetchingSurveys } = props;
  if (isFetchingSurveys) return null;
  return (
    <div>
      <table>
        <tbody>
          {surveys.map(survey => (
            <tr key={survey.id}>
              <td>{survey.quality}</td>
              <td>{survey.expertise}</td>
              <td>{survey.culture}</td>
            </tr>
            ))}
        </tbody>
      </table>
      <Link to='/addSurvey'>Add Survey</Link>
    </div>
  )
}

export default App;
