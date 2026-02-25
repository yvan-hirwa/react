const WEATHER_CODES = {
  0:  { name: "clear", label: "Clear sky" },
  1:  { name: "mainly-clear", label: "Mainly clear" },
  2:  { name: "partly-cloudy", label: "Partly cloudy" },
  3:  { name: "cloudy", label: "Overcast" },

  45: { name: "fog", label: "Fog" },
  48: { name: "fog", label: "Depositing rime fog" },

  51: { name: "drizzle", label: "Light drizzle" },
  53: { name: "drizzle", label: "Moderate drizzle" },
  55: { name: "drizzle", label: "Dense drizzle" },

  61: { name: "rain", label: "Slight rain" },
  63: { name: "rain", label: "Moderate rain" },
  65: { name: "rain", label: "Heavy rain" },
  66: { name: "rain", label: "Freezing rain" },
  67: { name: "rain", label: "Heavy freezing rain" },

  71: { name: "snow", label: "Slight snow" },
  73: { name: "snow", label: "Moderate snow" },
  75: { name: "snow", label: "Heavy snow" },
  77: { name: "snow", label: "Snow grains" },

  80: { name: "showers", label: "Rain showers" },
  81: { name: "showers", label: "Heavy rain showers" },
  82: { name: "showers", label: "Violent rain showers" },

  95: { name: "thunderstorm", label: "Thunderstorm" },
  96: { name: "thunderstorm", label: "Thunderstorm with hail" },
  99: { name: "thunderstorm", label: "Thunderstorm with heavy hail" },
}

export default WEATHER_CODES