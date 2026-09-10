# PCM-TelecoODS: Interactive Educational Platform

An educational website designed to increase understanding and awareness of the 17 Sustainable Development Goals (SDGs). 

Developed as a final project for the **Web Technologies (Tecnologías Web)** course, the platform is built exclusively with native front-end tools (HTML, CSS, and JavaScript). It engages users through multimedia content, interactive activities, and data-driven informative tools.

## Key Features & Front-End Technologies

*   **Data Visualization:** Integrates the `Chart.js` library to render responsive bar and doughnut charts representing specific SDG progress data.
*   **Interactive DOM Manipulation:** Features custom JavaScript logic for dynamic user engagement, including True/False quizzes, drag-and-drop mechanics (`ondragstart`, `ondrop`), and dynamic pop-ups.
*   **Responsive & Accessible UI:** Utilizes advanced CSS layouts including Flexbox (`flex-wrap`) and CSS Grid (`grid-template-columns`) for fluid responsiveness. Incorporates accessibility best practices such as semantic HTML, `alt` text for images, and appropriate color contrasts.
*   **Asynchronous Form Handling:** Implements JavaScript event listeners to handle contact form submissions dynamically, simulating data processing without requiring page reloads.

## Repository Structure
The project follows a modular and maintainable front-end architecture, separating concerns by dedicating individual CSS and JS files to each HTML view (`index`, `ods`, `interactivo`, `galería`, `estadísticas`, `contacto`).

*   `/HTML`: Sub-pages for the different thematic sections.
*   `/CSS`: Dedicated stylesheets for individualized page styling.
*   `/JavaScript`: Core logic for DOM manipulation, Chart.js rendering, and event handling.
*   `/Imágenes`: Visual assets and multimedia gallery content.
*   `/docs`: Contains the comprehensive project report detailing the development process.
*   `index.html`: The main entry point and landing page.

## Tech Stack
*   **Core:** HTML5, CSS3, JavaScript (ES6+)
*   **Libraries:** Chart.js
