const base_url = "https://api.openweathermap.org/data/2.5";
const appid = "358a934745c7a4d6e49b3d019a661d69";

export let getWeather = async (city) => {
  try {
    let res = await fetch(
      `${base_url}/weather?q=${city}&appid=${appid}&units=metric`
    );
    res = res.json();
    return res;
  } catch (error) {
    return error;
  }
};

export let getForecast = async (city) => {
  try {
    let res = await fetch(
      `${base_url}/forecast?q=${city}&cnt=7&appid=${appid}&units=metric`
    );
    res = res.json();
    return res;
  } catch (error) {
    return error;
  }
};
