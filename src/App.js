import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '54c9652acba7ffc14be90f916d42b95c';

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }


  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>

    );
  }
}

export default App;
