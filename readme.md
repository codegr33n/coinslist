# Crypto Currencies Aggregator Site

Welcome to the Crypto Currencies Aggregator Site project! This project aims to provide users with real-time information about various cryptocurrencies using the CoinGecko API. The site is built using React and utilizes the React Router DOM library for seamless navigation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time data: Fetches and displays up-to-date information about cryptocurrencies.
- Cryptocurrency listing: Provides a comprehensive list of available cryptocurrencies.
- Detailed cryptocurrency information: Displays detailed information about each cryptocurrency, including market data, price charts, and more.
- Search functionality: Allows users to search for specific cryptocurrencies.
- Responsive design: Ensures a seamless experience across different devices and screen sizes.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (version 14 or above)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/codegr33n/coinslist.git
```

2. Navigate to the project directory:

```bash
cd crypto-aggregator
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

To configure the project, you need to obtain an API key from CoinGecko. Follow these steps:

1. Visit the [CoinGecko API](https://www.coingecko.com/api/documentation) documentation.
2. Create an account or log in if you already have one.
3. Generate an API key for your project.
4. Copy the API key.

Next, create a `.env` file in the root directory of the project and add the following line, replacing `<YOUR_API_KEY>` with your actual API key:

```bash
REACT_APP_COINGECKO_API_KEY=<YOUR_API_KEY>
```

## Usage

To start the development server, run the following command:

```bash
npm start
```

This will start the application on [http://localhost:3000](http://localhost:5173). Open this URL in your web browser to access the site.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's repository.

When contributing, please ensure to follow the existing code style and include detailed information about the changes made.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and distribute this code as needed.
