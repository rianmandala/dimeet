<div align="center">
  <br />
      <img src="https://res.cloudinary.com/dg6ymnwfn/image/upload/v1721423176/portofolio/projects/hnhm0h0aybr7zuxah500.png" alt="Dimeet Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Dimeet</h3>

   <div align="center">
     Dimeet is a seamless online meeting platform built with Next.js, TypeScript, Clerk, getstream, shadcn, and Tailwind CSS. It offers a range of features to facilitate secure and efficient online meetings.
    </div>
</div>

## ✨ Features

- **🔒 Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.
- **🆕 New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.
- **🎛️ Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).
- **🚪 Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.
- **📅 Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.
- **📜 Past Meetings List**: Access a list of previously held meetings, including details and metadata.
- **📼 View Recorded Meetings**: Access recordings of past meetings for review or reference.
- **🏠 Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.
- **🔗 Join Meetings via Link**: Easily join meetings created by others by providing a link.
- **🔐 Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.
- **📱 Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

## 🛠️ Technologies Used

- **Next.js**: A React framework for server-rendered applications.
- **TypeScript**: A statically typed superset of JavaScript.
- **Clerk**: Authentication and user management.
- **getstream**: Real-time messaging and activity feeds.
- **shadcn**: A component library for building consistent and reusable UI elements.
- **Tailwind CSS**: A utility-first CSS framework.

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rianmandala/dimeet.git
    ```

2. Navigate to the project directory:

    ```bash
    cd dimeet
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

4. Set Up Environment Variables

    Create a new file named `.env` in the root of your project and add the following content:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    
    NEXT_PUBLIC_STREAM_API_KEY=
    STREAM_SECRET_KEY=
    ```

### Running the Development Server

```bash
npm run dev
