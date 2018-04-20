import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '54c9652acba7ffc14be90f916d42b95c';

class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    descripton: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city && country) {
      this.setState( {
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: 'Please enter City and Country'
      });
    }
  }


  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title />
              </div>
              <div className="col-xs-7 form-container">
                <div>
                  <Form getWeather = {this.getWeather}/>
                  <Weather temperature = {this.state.temperature}
                           city = {this.state.city}
                           country = {this.state.country}
                           humidity = {this.state.humidity}
                           description = {this.state.description}
                           error = {this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
