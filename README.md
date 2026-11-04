
# ⚡🔋🌍 SMART GRID OPTIMIZER
### Sequential Renewable Energy Microgrid Simulation

A web-based Smart Grid Optimizer that simulates renewable energy generation, battery storage, power conversion, and electricity distribution based on real-time weather conditions and user-defined energy requirements.

The system uses solar and wind energy potential to simulate an intelligent microgrid and efficiently distribute electricity to a targeted consumer area.

---

## 🚀 Project Overview

Smart Grid Optimizer is a renewable energy microgrid simulation system designed to demonstrate how solar energy, wind energy, battery storage, and power distribution work together.

Users can enter a target location, retrieve weather information, configure battery capacity, and specify the required energy demand.

The application then simulates the sequential flow of energy from renewable energy generation to the final consumer load.

---

## 🎯 Objectives

- To simulate renewable energy generation using solar and wind power.
- To demonstrate intelligent battery charging and energy storage.
- To simulate power conversion with efficiency considerations.
- To regulate electricity distribution according to consumer demand.
- To analyze energy availability using weather conditions.
- To visualize the complete microgrid architecture.

---

## ✨ Key Features

### 1. Location Setup
- Enter a target city or area.
- Fetch live weather information.
- Display temperature, cloud cover, and wind speed.
- Estimate solar and wind energy potential.

### 2. Infrastructure Setup
- Configure battery bank capacity in Watt-hours (Wh).
- Enter the target consumer area.
- Specify required energy demand in Watts (W).

### 3. Sequential Microgrid Architecture

The system simulates the following components:

- ☀️ **Renewable Energy Generation:** Estimates solar and wind power potential.
- ⚡ **Energy Converter:** Simulates electricity conversion with 95% efficiency.
- 🔋 **Battery Bank:** Stores surplus generated electricity.
- 🎛️ **Distribution Hub:** Regulates electricity according to the required load.
- 🏙️ **Consumer Area:** Receives the required electricity.

### 4. Energy Monitoring
- Displays generation potential.
- Shows battery charging percentage.
- Displays charging or discharging power.
- Shows regulated consumer demand.
- Provides solar and wind generation breakdown.
- Displays energy flow and system logs.

---

## 🔄 Working Methodology

The project follows a sequential energy management process.

1. User enters the target city.
2. System fetches live weather information.
3. Solar and wind energy potential is estimated.
4. User configures battery capacity.
5. User specifies the required energy demand.
6. Renewable energy generation is simulated.
7. Generated energy passes through the converter.
8. Surplus energy is stored in the battery bank.
9. Distribution hub regulates the electricity.
10. Required power is supplied to the target consumer area.

---       


## 🏗️ System Architecture

The Smart Grid Optimizer follows a sequential architecture
to simulate renewable energy generation, energy conversion,
battery storage, and electricity distribution.

```text
                 USER INPUT
                     |
                     v
              LOCATION SETUP
                     |
                     v
             LIVE WEATHER DATA
                     |
                     v
          RENEWABLE ENERGY GENERATION
                 /       \
                v         v
             SOLAR       WIND
                 \       /
                     |
                     v
              ENERGY CONVERTER
                 (95% Efficiency)
                     |
                     v
                BATTERY BANK
               (Energy Storage)
                     |
                     v
              DISTRIBUTION HUB
             (Power Regulation)
                     |
                     v
               CONSUMER AREA
              (Required Load)
                     |
                     v
              ENERGY MONITORING
                     |
                     v
                FINAL OUTPUT
```

## 📁 Project Structure

```text
smart_grid_optimizer_project/
│
├── public/
│   └── index.html
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

### File Description

| File / Folder | Description |
|---|---|
| `public/` | Contains frontend files |
| `index.html` | Dashboard and user interface |
| `.env` | Stores private API keys |
| `.gitignore` | Excludes sensitive and unnecessary files |
| `package.json` | Project dependencies and configuration |
| `server.js` | Express backend, API routing, and simulation engine |

## 📊 Example Simulation

Example configuration:

| Parameter              | Value.    |
|------------------------|-----------|
| Target Location.       | Bengaluru |
| Battery Capacity.      | 50,000 Wh |
| Required Energy Demand | 200 W     |
| Converter Efficiency.  | 95%       |
| Solar Generation       | 1658 W    |
| Wind Generation        | 48 W.     |
| Total Generation       | 1706 W.   |

Example simulation output:

- Total generation: 1706 W
- Converted electricity: 1621 W
- Battery charging power: 1421 W
- Consumer load supplied: 200 W

*Note: These are example values from the project demonstration, not guaranteed real-world measurements.*

---

## 🌐 Live Demo

**Project Link:**

https://smart-grid-optimizer-project.onrender.com

## 🌱 Future Enhancements

- Integration with real-time IoT energy monitoring devices.
- Advanced AI-based energy demand prediction.
- Smart battery charging and discharging optimization.
- Integration with smart meters.
- Real-time grid monitoring and fault detection.
- Support for multiple consumer areas.
- Advanced renewable energy forecasting.

---

## 💡 Applications

- Smart cities.
- Renewable energy management.
- Solar and wind power systems.
- Smart grid research.
- Microgrid energy management.
- Educational energy simulation.

---

## ⚙️ Installation Guide

Follow these steps to download, configure, and run the Smart Grid Optimizer project locally.

### 1. Clone the Repository

Open your terminal or command prompt and execute:

```bash
git clone https://github.com/Rakesh636161/smart_grid_optimizer.git
```

Navigate to the project directory:

```bash
cd smart_grid_optimizer
```

### 2. Install Dependencies


Install all required Node.js packages:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project.

Add your OpenWeatherMap API key and server port:

```env
OPENWEATHER_API_KEY=your_openweathermap_api_key_here
PORT=3000
```

**Note:** Replace `your_openweathermap_api_key_here` with your actual OpenWeatherMap API key.

Keep your `.env` file private. Never upload it to GitHub.

###  🚀How to Run the Project

###  Start the backend Express server using:

```bash
node server.js
```

If the server starts successfully, it will run on port 3000.

###  Access the Application

Open your web browser (Google Chrome, Microsoft Edge, or Firefox) and visit:

```text
http://localhost:3000
```

The Smart Grid Optimizer dashboard will now be accessible locally.

---


