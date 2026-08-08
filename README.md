# Two Minds Two Passions

A front-end web project built for a school UX Design assignment. This project showcases a unique dual-theme design, exploring two distinct passions: **Volleyball** and **Chess**. 

## Concept

"Two Minds Two Passions" is a single website with two entirely different visual identities and themes. By clicking the toggle switch in the footer or using the navigation links, users can flip the site between two modes:
- 🏐 **Volleyball Mode**: A vibrant, high-energy light theme focusing on the power and athleticism of volleyball.
- ♟️ **Chess Mode**: A sleek, focused dark theme centered around the calculated strategy and intellect of chess.

The project demonstrates how UX, UI, and styling can drastically change the mood and messaging of a digital interface while maintaining the same underlying HTML structure.

## Features

- **Dynamic Theme Switching:** Custom JavaScript that instantly updates CSS variables (`var(--primary)`, `var(--surface)`, etc.) to shift between light and dark modes.
- **Responsive Layout:** Built with Bootstrap 5 to ensure a seamless experience across desktop and laptop screens.
- **Clean UI:** A modern, minimalist aesthetic featuring Apple HIG-inspired typography and smooth CSS transitions.
- **Vanilla Stack:** Developed entirely with vanilla HTML, CSS, and JavaScript—no heavy frameworks or build tools required.

## Project Structure

- `index.html` - The main landing page featuring hero sections, athlete profiles, and dynamic content.
- `about.html` - Details the mission and purpose of the website.
- `chess_matches.html` - A dedicated page for viewing chess match schedules and results.
- `join_us.html` - A contact/signup page for joining the community.
- `css/styles.css` - Contains all custom CSS tokens, mode-switching logic, and overrides.
- `js/main.js` - Handles the state management (localStorage) and event listeners for the mode toggle.

## How to Run

Because this is a vanilla front-end project, no build steps are required. 
Simply open `index.html` in any modern web browser to view the site, or run a local development server (e.g. `python -m http.server` or VS Code Live Server) to view it locally.
