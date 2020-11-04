import api from "../api";

class WeatherService {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }
  

  static getWeather(data: any, city: any): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${api.baseURL}weather?q=${city}&units=metric&APPID=${api.key}`, data)
      .then((res)=> res.json())
      .then((data)=> {
          resolve(data);
      })
      .catch((data)=>{
          reject(data)
      })
    });
  }
}

export default WeatherService;