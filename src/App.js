import React from "react";
import { Cards, Charts } from './components'
import style from './App.module.css';
import { fetchdata } from './Api';
class App extends React.Component {
  state = {
    data: {},
  }
  async componentDidMount() {
    const fetchData = await fetchdata();
    this.setState({ data: fetchData })
  }
  render() {
    const { data } = this.state;
    return (
      <div className={style.container} >
        <Cards data={data} />
        <Charts />
      </div>
    );
  }
}

export default App;
