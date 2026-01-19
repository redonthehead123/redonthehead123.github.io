// Dark mode toggle functionality
(function() {
  // Default to dark if no preference stored
  const theme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    const button = document.querySelector('.theme-toggle');
    if (button) {
      button.textContent = newTheme === 'dark' ? '☀️' : '🌙';
      button.setAttribute('aria-label', `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} mode`);
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeThemeToggle);
  } else {
    initializeThemeToggle();
  }

  function initializeThemeToggle() {
    const button = document.querySelector('.theme-toggle');
    if (button) {
      // Set initial icon
      const currentTheme = document.documentElement.getAttribute('data-theme');
      button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
      button.setAttribute('aria-label', `Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`);
      
      // Add click event
      button.addEventListener('click', toggleTheme);
    }
  }
})();
