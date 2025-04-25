
# Codebreakers Portfolio
A responsive team portfolio built with React and Tailwind CSS showcasing our team's skills and teamwork.

# Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Team](#team)

## Overview

This project serves as an introduction and display of both individual and shared works/projects and collectie skill. It demonstrates our collaborative and development process while featuring our capabilities as individuals.

## Demo

Check out our portfolio hosted using Vercel - [Codebreakers](https://codebreakers-portfolio.vercel.app/)

## Technologies

- React 19
- React Router v6
- Tailwind CSS
- Vite
- Git

## Project Structure

```
react-team-portfolio/
├── public/
├── src/
│   ├──assets/            # Project assets that need processing
│   │  ├── images/
│   │  └── icons/         
│   ├── components/        # Reusable UI components
│   │   ├── common/        # Shared components (Navbar, Footer, etc.)
│   │   ├── layout/        # Layout component
│   │   └── ui/            # UI elements (buttons, cards, etc.)
│   │   └── hooks/         # Custom Hooks
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── TeamMembers/
│   │   ├── Projects/
│   │   └── Contact/
│   ├── App.jsx            # Main application component
│   └── index.html         # Main CSS file
│   ├── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies and scripts
├── README.md              # This file
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js v23
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/codebreakers-portfolio.git
cd codebreakers-portfolio
```
2. Install dependencies:
```bash
git clone https://github.com/your-username/codebreakers-portfolio.git
cd codebreakers-portfolio
```
3. Start the development server:
```bash
npm run dev
```
The application will be available at http:/localhost:5173
## Development

- npm run dev - Start development server

### Adding Team Members 

To add a new team member, create a new object under TeamMembers array in src/pages/Teampage.jsx following this format:
```jsx
{
            id: 1,
            slug: "john", 
            name: "John Doe",
            role: "Designer",
            shortBio: "Brief professional bio here...", 
            skills: ["PHP", "JavaScript", "C++"],
            image: hazelPic
},
```
then create a new file containing your custom profile in src/members import and route the file in src/app.jsx in this format:
```jsx
import JohnProfile from './members/JohnProfile';

<BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/member/john" element={<JohnProfile />} />
        </Routes>
      </Layout>
</BrowserRouter>
```

### Adding Projects

To add another project, create a new object under projects array in src/pages/ProjectsPage.jsx following this format:
```jsx
{
      id: 1,
      title: "Title goes here",
      description: "A short description detailing your project",
      image: ImgFile, 
      category: "web",
      technologies: ["HTML", "CSS"],
      view: "https://imgur.com/" //Add your imgur album/post link here
},
```
If your project doesn't classify by either categories, you can add your own in the categories array:
```jsx
{
{ id: 'arduino', name: 'ARDUINO' },
},
```

## Deployment

The project is set up for continuous deployment with GitHub Actions:

1. Every pull request triggers a build to verify changes
2. Merges to main branch automatically deploy to our staging environment
3. Tagged releases deploy to production

## Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## Team
- [Hazel Anne Bautisita](https://github.com/monoclesire)
- [Daniela Gervacio](https://github.com/Ellaaaaa2001)
- [Charice Morales](https://github.com/napzoo)
- [Jasmine Pangilin](https://github.com/mazuix)
- [Joey Sangil](https://github.com/notjoess)
