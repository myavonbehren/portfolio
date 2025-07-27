# Mya's Portfolio

A modern, fullstack portfolio website showcasing frontend development and UI/UX design skills through a complete design-to-development workflow.

## Design Process

### Research & Inspiration

- Analyzed portfolio designs on **Dribbble** and critiqued portfolios on YouTube for inspiration
- Used a reference board to organize my favorite designs

### Design System Creation

- **Figma** for complete desktop and mobile designs
- Established design system with Figma variables for Typography and Color Palettes (following [this guide](https://uxdesign.cc/set-up-typography-variables-in-figma-359cfea88b68#9f48))
- Created reusable components including burger menu and segmented control
- Learned component animation techniques, specifically for segmented control transitions

### Visual Assets

- **Color Palette**: Generated using [Coolors](https://coolors.co/623cea-e7dfc6-e9f1f7-54426b)
- **Components**: Referenced [Liquid Glass buttons](https://www.figma.com/community/file/15141143983668320850) from Figma Community (before Figma released their own version)
- **Icons**: Custom SVG icons created in **Adobe Illustrator**
- **[Component Gallery](https://component.gallery/)** for design reference and consistency

## Development Process

### Framework Learning

Before development, completed the [Next.js tutorial](https://nextjs.org/learn) to understand:

- Project structure and best practices
- Font importing, CSS modules, and Tailwind integration
- Industry-standard patterns

### Implementation Approach

- **Navbar Development**: Built using Vercel template repositories as reference for best practices
- **Design Translation**: Used Figma Developer Mode to extract exact gradient values and specifications
- **Component Architecture**: Implemented segmented control using Framer Motion library following industry articles

### Database Integration

- Set up **PostgreSQL** database with **Docker** (first-time implementation)
- Created dynamic content system instead of hardcoding to enable easy future updates
- Initialized with seed data using **Prisma**

## Tech Stack

- **Frontend**: TypeScript, Next.js, Tailwind CSS, CSS
- **Backend**: Prisma, PostgreSQL
- **Animation**: Framer Motion
- **Theming**: Next Themes (light/dark mode)
- **Icons**: React Icons, custom SVG icons
- **Design**: Figma, Adobe Illustrator
- **Tools**: Docker

## Future Enhancements

- **Design Improvements**: Enhanced segmented control visibility in dark mode
- **Content Management**: Private admin interface for updating skills, projects, and experience
- **Visual Effects**: Animated gradient background and liquid glass effects across all components
- **Content Expansion**: Dedicated creative showcase page instead of external YouTube links
- **User Experience**: In-app PDF reader and smooth hero section animations
