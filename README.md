# Country and Weather Information App

## Introduction

This application allows users to view detailed information about different countries, including weather details, by fetching data from the [REST Countries API](https://studies.cs.helsinki.fi/restcountries/) and the OpenWeather API. Users can search for a country by typing its name into the search field, and the app will display a range of information about the country along with its current weather conditions.

## Features

- Search for countries by name (common or official).
- View detailed information about countries including capital, population, languages, and more.
- Get current weather information for the country's capital.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An API key from [OpenWeather API](https://openweathermap.org/api).

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/AmjadShakhshir/countries-and-weather-app
   cd <project-name>
   npm install
   ```

2. Create a .env file in the root directory and add your OpenWeather API key. Start your env variable with VITE* to prevent accidentally leaking env variables to the client, only variables prefixed with VITE* are exposed to your Vite-processed code.:

```sh
VITE_SOME_KEY=your_api_key_here
```

3. Start the application:

```sh
npm start
```

The application will be available at http://localhost:3000.

## Usage

- Open the application in your web browser.
- Enter the name of a country into the search field.
- The application will display detailed information about the country and the current weather in its capital.

## API Endpoints Used

```sh
/api/all: Fetches information about all countries.
/api/name/{name}: Fetches information about a country by its name.
/weather/: Fetches the current weather information from OpenWeather API
```

## Contributing

Contributions to improve the application are welcome. Please follow these steps to contribute:

## Fork the repository.

1. Create a new branch (git checkout -b feature/AmazingFeature).
2. Commit your changes (git commit -m 'Add some AmazingFeature').
3. Push to the branch (git push origin feature/AmazingFeature).
   Open a Pull Request.

## License

Distributed under the MIT License. See LICENSE for more information.
