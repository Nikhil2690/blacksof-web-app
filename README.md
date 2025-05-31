This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

DEPLOYED LINK of the Project :- https://blacksof-web-app.vercel.app/home 

GitHub Repository Link:- https://github.com/Nikhil2690/blacksof-web-app


## 📦 Project Setup

### 🛠 Tech Stack
- React + Vite
- Framer Motion
- Tailwind CSS
- Custom Hooks
- Deployed on Vercel

🧱 Component Architecture
The project follows a modular component structure for reusability and maintainability.

HeroSection: Heading + Video + Scroll Line

ScrollProgressLine: Animated scroll indicator using framer-motion

FadeInVideo, FadeInVideo2: Reusable components with useInView

Navbar, Footer, etc.

📌 Why modular?
This allows easy scaling, testing, and debugging of individual components.

🎨 Design Adherence
Fully matches the provided Figma with pixel-perfect spacing, colors, and typography.

Used Tailwind for consistent design tokens.


✅ Tested on:

Desktop (1024px and 1440px)

📌 Used flex, grid, and vh/vw units to ensure fluid layouts.

⚡ Performance Optimization

✅ Optimized image formats (SVG)

✅ Code-splitting via Vite

✅ Minimal bundle size (checked via Lighthouse)

♿ Accessibility Considerations
Used semantic HTML (<section>, <h1>, <video>, etc.)

Added alt, aria-labels, and keyboard-navigable elements

Follows WCAG 2.1 guidelines

Motion is respectful and not overwhelming

✨ Animations
Used Framer Motion for scroll progress lines and fade-in effects

Thoughtfully placed to enhance UX without distraction

Smooth, performant, and optimized for low-power devices

🧪 Testing
Not implemented due to time constraints. However, Jest and React Testing Library would be used for unit testing in a future iteration.

📘 Third-Party Libraries
Library	Purpose
Framer Motion	Animations & scroll effects
React-Intersection-Observer	Triggering fade-ins on scroll
Tailwind CSS	Utility-first styling

🧠 Assumptions & Decisions
Scroll line visually maps to combined HeroSection + HeroSecond

Videos autoplay on view with muted audio

One section = one concept/brand impression

All assets used were assumed to be hosted locally

🚧 Challenges Faced :-
⚠ SVG not loading on deployment → fixed with public/ folder

⚠ Scroll progress overlapping absolute elements → fixed with layout restructure

💡 Animation jitter → solved by limiting useInView to 0.2 threshold

🔮 Future Improvements :- 
Add unit & integration tests

Improved accessibility for screen readers

Better state management if app scales



