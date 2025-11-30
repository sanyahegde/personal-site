#Personal Portfolio

This is the codebase for my personal portfolio website — a place to share my work, projects, and a bit about who I am. I built it to have one central home for everything I’m working on and to experiment with modern frontend tools along the way.

The site is built with Next.js, TypeScript, and Tailwind CSS, with a focus on clean UI, fast performance, and simple maintainability.

Features

Responsive layout that works across mobile and desktop

Light/dark theme with a toggle

Smooth transitions and subtle motion using Framer Motion

Sections for projects, skills, experience, and personal highlights

Easy content updates through simple component edits

Tech Stack

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

Animations: Framer Motion

Icons: Lucide React

Deployment: Vercel

Running Locally

Make sure you have Node 18+ installed.

git clone <repo-url>
cd <project-folder>
npm install
npm run dev


Then open:

http://localhost:3000

Project Structure

A high-level look at how things are organized:

app/
  ├─ components/        # Reusable UI components
  ├─ sections/          # Full-page sections (Hero, Highlights, etc.)
  ├─ styles/            # Global styles
  └─ page.tsx           # Main page

public/                 # Images and static assets

Editing Content

Most updates live inside the components or sections folders.

About Section: /sections/About.tsx

Projects: /sections/Projects.tsx

Experience: /sections/Experience.tsx

Skills: /sections/Skills.tsx

Highlights: /sections/Highlights.tsx

Social links / footer: /components/Footer.tsx

Tailwind makes it easy to adjust layout, spacing, colors, or add your own components.

Customization

Colors: update tailwind.config.js

Typography: edit global styles in /app/globals.css

Animations: located in components using Framer Motion

Images: swap out files in /public

Deployment

The site is deployed through Vercel.
Any push to main automatically triggers a new deployment.

If you want to deploy your own fork:

Create a Vercel account

Import the repo

Click Deploy

That’s it.

Scripts
npm run dev       # local development
npm run build     # production build
npm run start     # run production build
npm run lint      # lints the codebase

Troubleshooting

Tailwind classes not applying
Try restarting the dev server.

Port 3000 already in use

lsof -ti:3000 | xargs kill -9


TypeScript complaints after changing files

rm -rf .next
npm run dev

Contributing

This is a personal project, but if you want to suggest improvements, feel free to open an issue or PR.

License

MIT — feel free to use parts of this project for your own portfolio.

Contact

If you want to reach out or collaborate:

sanyahegde7@gmail.com
