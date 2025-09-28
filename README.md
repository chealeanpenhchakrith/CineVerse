# 🎬 CineVerse - The First Unified Streaming Movie Search Engine

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-brightgreen)](https://your-vercel-deployment-url.vercel.app)
> **Note**: Replace `https://your-vercel-deployment-url.vercel.app` with your actual Vercel deployment URL
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 🌟 Overview

**CineVerse** (branded as **CINE'POP.COM**) is a modern, unified movie search engine that solves the problem of endless browsing across multiple streaming platforms. Tired of wasting time hunting for what to watch? CineVerse provides instant access to comprehensive movie information from The Movie Database (TMDb) API, allowing you to discover films by release year, ratings, reviews, and more.

🔗 **[Live Demo on Vercel](https://your-vercel-deployment-url.vercel.app)**
> **Note**: Replace the URL above with your actual Vercel deployment URL

![CineVerse Homepage](https://github.com/user-attachments/assets/1f7b3484-6768-4389-8844-b218f3aae7da)

## ✨ Features

### 🔍 **Unified Search**
- Search across a vast database of movies instantly
- Real-time search results as you type
- Comprehensive movie information at your fingertips

### 🎥 **Movie Discovery**
- **Popular Movies**: Discover trending and popular films
- **Detailed Views**: Get in-depth information about any movie
- **Visual Experience**: High-quality movie posters and backdrops

### 📱 **Modern UI/UX**
- **Responsive Design**: Perfect experience on desktop, tablet, and mobile
- **Dark Theme**: Easy on the eyes with a sleek dark interface
- **Smooth Animations**: Hover effects and transitions for enhanced interaction
- **Rating System**: Visual star ratings and TMDb scores

### 🎬 **Movie Details**
- **Overview & Synopsis**: Comprehensive plot descriptions
- **Cast & Crew Information**: (Coming Soon)
- **Release Dates**: Year-based filtering and information
- **Genres**: Easy categorization and filtering
- **Ratings**: TMDb community ratings and scores
- **Production Details**: Budget, revenue, and production countries
- **Multi-language Support**: View available languages

## 🛠️ Technologies Used

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7.x for fast development and building
- **Styling**: Tailwind CSS 4.x for modern, responsive design
- **State Management**: Zustand for lightweight state management
- **Routing**: React Router DOM for navigation
- **HTTP Client**: Axios for API requests
- **API**: The Movie Database (TMDb) API
- **Deployment**: Vercel for fast, global deployment

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- TMDb API key (free registration at [themoviedb.org](https://www.themoviedb.org/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chealeanpenhchakrith/CineVerse.git
   cd CineVerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your TMDb API key
   VITE_API_KEY=your_tmdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 🎯 How It Works

### 1. **Home Page**
- Features a striking hero section with the tagline "THE FIRST UNIFIED STREAMING MOVIE SEARCH ENGINE"
- Displays popular movies in an attractive grid layout
- Provides a prominent search bar for movie discovery

### 2. **Search Functionality**
- Type any movie title in the search bar
- Results appear with poster images, ratings, and basic information
- Click on any movie to view detailed information

### 3. **Movie Details Page**
- Comprehensive movie information including plot, genres, ratings
- High-quality movie posters and backdrop images
- Production details, release dates, and available languages
- Easy navigation back to search results

### 4. **Responsive Experience**
- Seamless experience across all device sizes
- Touch-friendly interface for mobile users
- Optimized loading and smooth transitions

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── AppName.tsx      # App branding component
│   ├── HeroSection.tsx  # Main hero banner
│   ├── SubHeroSection.tsx # Supporting hero content
│   ├── SearchButton.tsx # Search functionality
│   ├── PopularMovies.tsx # Popular movies grid
│   ├── MovieCard.tsx    # Individual movie cards
│   └── MovieDetail.tsx  # Detailed movie view
├── store.tsx            # Zustand state management
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── App.css              # Global styles
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_tmdb_api_key_here
```

### Getting TMDb API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Request an API key
5. Copy your API key to the `.env` file

## 🚀 Deployment

This project is deployed on **Vercel** for optimal performance and global CDN distribution.

**Live Application**: [https://your-vercel-deployment-url.vercel.app](https://your-vercel-deployment-url.vercel.app)
> **Note**: Replace with your actual Vercel deployment URL

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/chealeanpenhchakrith/CineVerse)

1. Fork this repository
2. Connect your GitHub account to Vercel
3. Import the project
4. Add your `VITE_API_KEY` environment variable
5. Deploy!

### After Deployment

Once you've deployed your application:

1. Copy your Vercel deployment URL (e.g., `https://cineverse-abc123.vercel.app`)
2. Replace all instances of `https://your-vercel-deployment-url.vercel.app` in this README with your actual URL
3. Update the badge links at the top of this README
4. Commit and push these changes to update your repository documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ❓ FAQ

### **Q: Where do I get a TMDb API key?**
A: Visit [The Movie Database](https://www.themoviedb.org/), create a free account, go to Settings → API, and request an API key.

### **Q: Why am I seeing "Loading popular movies..." forever?**
A: Make sure you've added your TMDb API key to the `.env` file as `VITE_API_KEY=your_api_key_here`.

### **Q: Can I customize the movie search results?**
A: Yes! The search functionality uses TMDb's API. You can modify the API calls in `SearchButton.tsx` and `PopularMovies.tsx` to include different parameters or filters.

### **Q: How do I deploy to platforms other than Vercel?**
A: This React app can be deployed to any static hosting service (Netlify, GitHub Pages, AWS S3, etc.). Just run `npm run build` and deploy the `dist` folder.

### **Q: Is this application mobile-friendly?**
A: Absolutely! The application is built with responsive design using Tailwind CSS and works seamlessly on all device sizes.

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the comprehensive movie API
- [Vercel](https://vercel.com/) for seamless deployment and hosting
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful styling system
- [React](https://reactjs.org/) team for the amazing framework

## 📞 Contact

**Developer**: Chealean Penh Chakrith
**Project Link**: [https://github.com/chealeanpenhchakrith/CineVerse](https://github.com/chealeanpenhchakrith/CineVerse)

---

⭐ **Star this repository if you found it helpful!**
