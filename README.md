# Stage 1B: Profile Card

A responsive and accessible profile card built with semantic HTML, modern CSS, and vanilla JavaScript.

## Features
- Dynamic epoch time display in milliseconds.
- Responsive layout (stacked on mobile, side-by-side on desktop).
- Accessible navigation with focus indicators and ARIA roles.
- Fully testable with standardized `data-testid` attributes.

## Deployment
- Live URL: [Insert Vercel/Netlify Link Here]

## How to Run Locally

### Prerequisites
- A modern web browser.
- A code editor (like VS Code).

### Steps
1. **Clone the repository:**
   git clone https://github.com/eyimofeoshin/profile-card.git

2. **Navigate to the directory:**
   cd profile-card

3. **Open the project:**
   - Open `index.html` directly in your browser.
   - Or, if using VS Code, right-click `index.html` and select **"Open with Live Server"**.

## Design Decisions
- Used CSS Flexbox for the primary layout to ensure content scales safely.
- Implemented `aria-live` on the time display to ensure accessibility for screen readers.
- Used a 768px breakpoint to transition from mobile to desktop layouts.