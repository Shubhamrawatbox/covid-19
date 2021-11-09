import React from "react";
import { Cards, Charts } from './components'
import style from './App.module.css';
import { fetchdata } from './Api';
import CountryPicker from "./components/CountryPicker/CountryPicker";
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchData = await fetchdata();
    this.setState({ data: fetchData })
  }
  handleCountryChange = async (country) => {
    const data = await fetchdata(country)
    this.setState({ data, country: country })
  }
  render() {
    const { data,country} = this.state;
    return (
      <div className={style.container} >
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
