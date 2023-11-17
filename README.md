# Small Business Financials

Horizon UI is a React-based web application that serves as an admin dashboard. It features a responsive layout, Chakra UI styling, and utilizes various libraries for routing and state management.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Chakra UI Styling:** The application utilizes ChakraProvider to apply a consistent Chakra UI theme throughout the UI components.
- **Horizon UI:** Use Horizon UI for template (https://www.horizon-ui.com/).
- **React Router Navigation:** React Router is used for declarative navigation, allowing for a smooth and dynamic user experience.
- **Recoil State Management:** RecoilRoot is implemented for managing global state using Recoil, making it easy to share state between components.
- **Admin Layout:** The `AdminLayout` component provides the overall structure for the admin dashboard, including a sidebar, navbar, and main content area.
- **Dynamic Route Rendering:** Routes are dynamically rendered based on the defined routes array, enhancing maintainability.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/mkultr4/small-business-financials
```

2. Navigate to the project directory:

```bash
cd small-business-financials
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the application, run the following command:

```bash
npm start
```

This will launch the application in development mode, and you can access it in your browser at `http://localhost:3000`.

## Folder Structure

```lua
small-business-financials/
|-- src/
|   |-- components/
|   |   |-- calendar/
|   |   |-- card/
|   |   |-- ... other components
|   |
|   |-- layouts/
|   |-- routes/
|   |-- styles/
|   |-- theme/
|   |-- App.tsx
|   |-- routes.ts
|   |-- index.tsx
|
|-- public/
|-- README.md
|-- package.json
|-- ... other configuration files

```

- **components:** Contains reusable UI components.
- **hooks:** Custom hooks used throughout the application.
- **layouts:** Layout components for organizing the overall structure of the application.
- **routes:** Configuration for defining application routes.
- **theme:** Chakra UI theme configuration.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please fork the repository and create a pull request.

## Demo
[Demo app](https://mkultr4.github.io/small-business-financials)

## License

This project is licensed under the [MIT License](https://chat.openai.com/c/LICENSE).
