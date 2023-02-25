# Weather Forecast Web Application

A web application that allows users to view the weather in their city after logging in with their Github user. This application is built with React, TypeScript, and Tailwind CSS, and uses Auth0 for Github authentication and the OpenWeatherMap API to retrieve weather data.

## Getting Started

To get started, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Create an Auth0 account and configure a new application. Update the `REACT_APP_AUTH0_CLIENTKEY` and `REACT_APP_AUTH0_DOMAIN` environment variables in a `.env` file with your Auth0 application information.
4. Create an OpenWeatherMap API account and generate an API key. Update the `REACT_APP_WEATHER_API_KEY` environment variable in the `.env` file with your API key.
5. Run the app using `npm start`.

## Notes

-   The `WeatherPage` component will only display the date and temperature when viewed on a mobile device.
-   The Github authentication flow is handled by Auth0.
-   The weather data is retrieved from the OpenWeatherMap API using the `axios` library.
-   The app uses React Context API to manage global state.
-   The Tailwind CSS classes are configured in the `tailwind.config.js` file.
-   The app includes basic error handling for API requests and invalid input.
-   The `@types/react-router-dom` package is used for type definitions for React Router.
-   The `react-router-hash-link` package is used to handle anchor tags with React Router.

## Acknowledgements

-   [React](https://reactjs.org/) - JavaScript library for building user interfaces
-   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
-   [Tailwind CSS](https://tailwindcss.com/) - CSS framework for rapid UI development
-   [Auth0](https://auth0.com/) - Identity and Access Management solution for developers
-   [OpenWeatherMap API](https://openweathermap.org/api) - Weather data API
