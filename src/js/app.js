// Main entry point of the application

import { initDB } from './db/indexedDB.js';
import { setupEventListeners } from './utils/helpers.js';
import { renderDashboard } from './controllers/adminController.js'; // Default to admin dashboard

// Initialize the application
function initApp() {
    initDB();
    setupEventListeners();
    renderDashboard();
}

// Start the application
document.addEventListener('DOMContentLoaded', initApp);