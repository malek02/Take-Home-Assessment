
# Campaign Management Platform

This is a multi-step form application for a campaign management platform built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**.

## Built With

- **Next.js** v15
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI** (for UI components)
- **Formik** and **Yup** (for form handling and validation)
- **Jest** (for testing)

## Getting Started

Follow these instructions to set up and run the project locally.

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/malek02/Take-Home-Assessment.git
    ```

2. Navigate into the cloned directory:

    ```sh
    cd Take-Home-Assessment
    ```

3. Install npm dependencies:

    ```sh
    npm install
    ```

### Start the Development Server

To start the development server, run the following command:

```sh
npm run dev
```

The project will now be running at [http://localhost:3000](http://localhost:3000).

### Running Tests

To run the tests for the project, use the following command:

```sh
npm run test
```

This will execute the Jest test suite for the project.

## Project Structure

The project structure is organized as follows:

```
.
├── src/
│   ├── app/
│   │   ├── favicon.ico           # Favicon for the app
│   │   ├── fonts/                # Custom fonts used in the app
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Layout component for the app
│   │   └── page.tsx              # Main page of the app
│   ├── components/               # Reusable components for the app
│   │   ├── multi-step-form/      # Components for multi-step form
│   │   │   ├── details-step.tsx  # Step 1: Campaign details form
│   │   │   ├── media-selection-step.tsx  # Step 2: Media selection
│   │   │   └── summary-step.tsx  # Step 3: Summary and final action
│   │   └── ui/                   # UI components (e.g., buttons, inputs)
│   ├── @core/
│   │   ├── enums/                # Enumerations for different steps
│   │   │   └── details-step.enum.ts
│   │   └── models/               # Types and interfaces used in the app
│   │       └── steps-data.ts
│   ├── lib/
│   │   ├── custom-hooks/         # Custom hooks like useUrlQuery
│   │   └── utils.ts              # Utility functions
│   ├── tailwind.config.ts        # Tailwind CSS configuration
│   └── tsconfig.json             # TypeScript configuration
├── public/                       # Static assets (e.g., images, icons)
├── package.json                  # Project dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
└── next.config.ts                # Next.js configuration
```


npm run test
```

This will run the Jest test suite and output the results in the terminal.
