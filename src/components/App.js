import '../App.css';
import React from 'react'
import axios from 'axios'
import Search from './search'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      location: "sheffield",
      covidData: {
        newCases: undefined,
        cumCases: undefined,
        newDeaths: undefined,
        cumDeaths: undefined
      },
      errorMessage: ""
    }
  }

  componentDidMount() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    this.setState({
      date: today
    })
  }

  fetchCovidData = (input) => {
    let location = input.toLowerCase();
    let url =  `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=ltla;areaName=${location}&structure={"date":"date","areaName": "areaName", "newCasesByPublishDate":"newCasesByPublishDate", "cumCasesByPublishDate":"cumCasesByPublishDate", "newDeathsByDeathDate":"newDeathsByDeathDate","cumDeathsByDeathDate":"cumDeathsByDeathDate","hospitalCases": "hospitalCases"}`
    axios.get(url)
    .then(json => {
      console.log(json.data.data)
      let [today, yesterday] = json.data.data
    })
    .catch(err => {
      console.log(err)
    })
  }


  render() {
    return (
      <div className="App">
        <h1>COVID-19 Data Tracker</h1>
        <Search fetchdata={this.fetchCovidData}/>
      </div>
    )
  }
}
export default App;
