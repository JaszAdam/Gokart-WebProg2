# Gokart Webapp

## Project Description
This is a gokart themed web application where users can:
- View gokart types and their details.
- Submit and view customer reviews.
- See live weather updates for track conditions.
- Check the ranking leaderboard.
- Book time slots for karting sessions.

The app provides a dynamic and interactive user experience.

---

## Technology Used
- **Framework**: SvelteKit (^2.16.0)
- **Language**: TypeScript (^5.0.0)
- **Package Manager**: npm (v10+)
- **Build Tool**: Vite (^6.2.5)
- **Styling**: Custom CSS

---

## Data Sources
- **Local Files**:
  - `static/gokart.txt` — Information about gokarts.
  - `static/ranglist.txt` — Ranking data (names, times, dates).
  - `static/ratings.txt` — Customer reviews.

- **External API**:
  - [OpenWeatherMap One Call API 3.0](https://openweathermap.org/api/one-call-3)

---

## API Endpoints

### Internal
| Endpoint          | Method | Description                       |
|-------------------|--------|-----------------------------------|
| `/api/ratings`    | GET/POST | Manage customer reviews.         |
| `/api/weather`    | GET    | Fetches weather data from OpenWeather. |
| `/api/booking`    | GET/POST | Manage gokart booking times.       |

### External
| Service           | Endpoint |
|-------------------|----------|
| OpenWeatherMap    | `https://api.openweathermap.org/data/3.0/onecall` |

---

## Packages Used
- `@sveltejs/kit`
- `@sveltejs/enhanced-img` (Used it as an external package to display the main page background)
- `dotenv` 

---

## Usage

### 1. Clone the repository
```bash
git clone https://github.com/JaszAdam/Gokart-WebProg2.git
cd Gokart-WebProg2
cd Gokart-WebApp
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the .env file
```bash
OPENWEATHER_API_KEY=api_key
```

### 4. Run the dev server
```bash
npm run dev
```

## Codebase layout
- `src/routes/`
Contains all pages (like Home, About, Rankings, Reviews, Bookings). Each page corresponds to a route in the application.

- `src/lib/components/`
Stores reusable UI components, such as custom input fields, gokart display components, the booking form, and the review input.

- `static/`
Holds public static files, such as images and text files (gokart.txt, ranglist.txt, ratings.txt) that are directly accessible by the browser.

- `src/routes/api/`
Contains internal and external API routes.

- `vite.config.ts`
Configuration file for Vite bundler. It defines settings like plugins (@sveltejs/kit, optional image plugins) for the build process.

- `.env`
The API key for the OpenWeather API is stored here.