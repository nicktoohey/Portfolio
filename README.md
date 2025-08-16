# Nicholas Toohey - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful design, smooth animations, and an interactive projects showcase.

## ✨ Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive Projects**: Click on project cards to view detailed information in modals
- **Smooth Animations**: CSS transitions and JavaScript-powered animations
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Semantic HTML structure for better search engine visibility

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A text editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website should work immediately

### Local Development
If you want to make changes:
1. Open the project folder in your code editor
2. Make your changes to the HTML, CSS, or JavaScript files
3. Refresh your browser to see the changes

## 🛠️ Customization

### Personal Information
Edit the following files to customize your portfolio:

#### `index.html`
- Change the title in the `<title>` tag
- Update your name in the hero section
- Modify the about section text
- Update contact information

#### `script.js`
- Modify the `projects` array to include your own projects
- Update project details, links, and technologies
- Change project images (currently using emojis)

### Styling
#### `styles.css`
- Update color schemes by changing CSS variables
- Modify fonts by changing the Google Fonts import
- Adjust spacing and layout as needed
- Customize animations and transitions

### Project Data Structure
Each project in the `projects` array should follow this structure:

```javascript
{
    id: 1,
    title: "Project Title",
    description: "Brief project description",
    image: "🛒", // Emoji or icon
    tags: ["React", "Node.js", "MongoDB"],
    details: {
        features: [
            "Feature 1",
            "Feature 2"
        ],
        technologies: [
            "Frontend: React, Redux",
            "Backend: Node.js, Express"
        ]
    },
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/username/project"
}
```

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile navigation menu
- Touch-friendly interactions
- Optimized typography for all screen sizes

## 🎨 Design Features

- **Color Scheme**: Modern gradients and subtle shadows
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and scroll animations
- **Icons**: Font Awesome icons for enhanced visual appeal
- **Layout**: CSS Grid and Flexbox for modern layouts

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be deployed automatically
3. Customize the domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

## 🔧 Troubleshooting

### Common Issues

**Projects not displaying**: Check the browser console for JavaScript errors
**Styling not loading**: Ensure `styles.css` is in the same directory as `index.html`
**Images not showing**: Verify that image paths are correct

### Performance Tips

- Optimize images before adding them
- Minify CSS and JavaScript for production
- Use a CDN for external resources
- Enable gzip compression on your server

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Built with ❤️ using HTML, CSS, and JavaScript** # Portfolio
