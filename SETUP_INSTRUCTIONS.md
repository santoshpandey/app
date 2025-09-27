# Santosh Pandey - Professional Portfolio Website

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (version 16 or higher)
- **Yarn** (recommended) or npm
- **Git** (optional, for version control)

### Installation & Setup

1. **Extract the zip file** to your desired directory
2. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

3. **Install dependencies:**
   ```bash
   yarn install
   # or if you prefer npm:
   # npm install
   ```

4. **Start the development server:**
   ```bash
   yarn start
   # or with npm:
   # npm start
   ```

5. **Open your browser** and go to:
   ```
   http://localhost:3000
   ```

## 🎨 Features

### ✨ **Modern Portfolio Website with:**
- **Elegant Design**: Grey backgrounds with navy blue accents
- **Fully Responsive**: Works perfectly on all devices
- **WCAG Accessible**: High contrast ratios for optimal readability
- **Smooth Animations**: Professional hover effects and transitions
- **Complete Sections**: Hero, About, Skills, Experience, Projects, Testimonials, Contact

### 📱 **Sections Included:**
1. **Hero Section**: Eye-catching introduction with floating icons and stats
2. **About**: Professional summary and key highlights
3. **Skills**: Technical skills, leadership abilities, and tools
4. **Experience**: Work timeline with achievements
5. **Projects**: Showcase of sample projects
6. **Testimonials**: Real LinkedIn recommendations
7. **Contact**: Professional contact form and information

### 🎓 **Education & Certifications:**
- Professional Certificate in Gen AI from IIIT Patna
- Diploma in Network Centered Computing from NIIT
- Bachelor of Science in Computer Science

## 🛠 Development

### Project Structure
```
frontend/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section with animations
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills showcase
│   │   ├── Experience.jsx  # Work experience timeline
│   │   ├── Projects.jsx    # Projects portfolio
│   │   ├── Testimonials.jsx # Testimonials grid
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer section
│   │   └── ui/            # Shadcn UI components
│   ├── data/
│   │   └── mock.js        # Portfolio content data
│   ├── App.js             # Main app component
│   ├── App.css            # Custom styles and animations
│   └── index.css          # Tailwind CSS imports
├── package.json           # Dependencies and scripts
└── tailwind.config.js     # Tailwind configuration
```

### 🎨 **Customization**

#### **Update Content:**
Edit `/src/data/mock.js` to modify:
- Personal information
- Professional experience
- Skills and certifications
- Project details
- Testimonials

#### **Design Changes:**
- **Colors**: Modify navy color variables in `/src/App.css`
- **Animations**: Adjust animations in the same CSS file
- **Layout**: Edit individual component files in `/src/components/`

#### **Add New Sections:**
1. Create new component in `/src/components/`
2. Import and add to `/src/App.js`
3. Add navigation link in `/src/components/Header.jsx`

## 📦 **Technologies Used**

- **React 19.0.0** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icons
- **Custom CSS Animations** - Smooth, professional animations

## 🌟 **Key Features**

### **Performance:**
- Optimized React components
- Efficient CSS with Tailwind
- Smooth animations with CSS transitions
- Mobile-first responsive design

### **Accessibility:**
- WCAG compliant color contrasts
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support

### **Professional Design:**
- Clean, modern aesthetic
- Consistent typography
- Professional color scheme
- Glassmorphism effects

## 🚀 **Deployment**

### **Build for Production:**
```bash
yarn build
# or with npm:
# npm run build
```

### **Deploy to Popular Platforms:**
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build folder to S3 bucket

## 📝 **License**

This portfolio template is free to use and modify for personal and commercial projects.

## 💬 **Support**

If you need help with setup or customization:
1. Check the console for any error messages
2. Ensure all dependencies are installed correctly
3. Make sure you're using Node.js version 16+

---

**Built with ❤️ using React and modern web technologies**