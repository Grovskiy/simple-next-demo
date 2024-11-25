# Project Documentation

## Overview

This project is a **Next.js 14** application built with **TypeScript** and styled using **Tailwind CSS**. The setup ensures best practices, high performance, and scalability. Below are the features and tools integrated into the project to deliver a clean and maintainable codebase.

---

## Key Features

### 1. **Dynamic Content Management**
- The project handles **dynamic content** using JSON files and server-side rendering (SSR) or static site generation (SSG).
- Example:
    - A **home page** dynamically renders a hero section and features based on a JSON file (`public/data/pagesContent.json`).
    - A **features page** displays a list of features fetched at build time.

### 2. **Random Dad Jokes Page**
- Integrated with the `icanhazdadjoke` API to display a random dad joke.
- Each joke is fetched on the server, ensuring quick delivery and full SEO benefits.

### 3. **Reusable Components**
- A clean component structure for shared UI elements such as headers and footers.
- Components are built with **TypeScript** for type safety and scalability.

### 4. **Tailwind CSS Integration**
- Tailwind is used for styling, ensuring a modern and efficient design workflow.
- **Prettier Plugin for Tailwind CSS** is included to auto-sort class names for better readability.

### 5. **Prettier Formatting**
- Prettier is configured to:
    - Format only **components** and **Tailwind classes**.
    - Maintain a consistent code style across JSX/TSX files.
- A `format` script is provided for quick formatting of specific directories.

### 6. **Best Practices**
- Following Next.js best practices for routing, SSR, and SSG.
- Clean separation of concerns with dedicated files for content, layout, and components.
- SEO-friendly metadata for all pages.

---

## File Structure

```plaintext
/app
  /(pages)
    /features      # Features page
    /jokes         # Jokes page
  /components      # Reusable header, footer, and other UI components
  /data            # Files 
  /layout.tsx      # Global layout for the app
  /page.tsx        # Home page
/public
  /data            # JSON files for dynamic content
  /images          # Static assets (e.g., hero images)
/tailwind.config.ts # Tailwind configuration
/.prettierrc.js     # Prettier configuration
```

## Installation & Usage

### 1. Install dependencies:
```bash
npm install
```
### 2. Run the development server:
```bash
npm dev
```
### 3. Open http://localhost:3000 to view it in the browser.

## Formatting
```bash
npm run format
```
Formats all JSX and TSX files inside the app/components directory.
