# Meetora

Meetora is a modern video conferencing and interview platform built with Next.js, TypeScript, and Prisma. It provides a seamless experience for recruiters, candidates, and administrators.

## Features

- **User Roles:** Separate dashboards and functionalities for recruiters, candidates, and administrators.
- **Real-time Video/Audio:** Powered by Stream's Video & Audio SDK for high-quality, low-latency communication.
- **Authentication:** Secure authentication with Clerk.
- **Database:** Uses Prisma ORM with a PostgreSQL database.
- **UI Components:** A rich set of UI components built with Radix UI and styled with Tailwind CSS.
- **Theming:** Light and dark mode support.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database:** [Prisma](https://www.prisma.io/) ORM with PostgreSQL
- **Real-time Communication:** [Stream](https://getstream.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Linting:** [ESLint](https://eslint.org/)
- **Code Formatting:** [Prettier](https://prettier.io/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm or yarn
- A running PostgreSQL instance

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/Meetora.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Set up your environment variables by copying `.env.example` to `.env` and filling in the required values.
    ```sh
    cp .env.example .env
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
