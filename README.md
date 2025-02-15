# Flow Chart Dashboard Documentation

## Overview
The Flow Chart Dashboard is a React-based application designed to manage a hierarchical gifting system with multiple levels of progression. Users can track gifts, manage participants, and visualize the flow of gifts between different stages.

## Core Features

### 1. Level Hierarchy
The system consists of five progressive levels:
- BEGINER
- APPRENTICE
- ADVANCED
- TEACHER
- MASTER

### 2. Dashboard Components

#### Gifters Pool
- Located at the top of the dashboard
- Displays up to 12 available gifters
- Each gifter is represented by a red card showing:
  - First name
  - Last name
  - Gift progress (x/8)

#### Main Flow Chart
Each level contains three main sections:

1. **RECEIVER**
  - Shows the current receiver for that level
  - Displayed in an orange box
  - Contains receiver's name and gift progress

2. **FUNDERS/STAGING AREA**
  - Displays 8 funders in blue boxes
  - Each funder shows:
    - Name
    - Gift progress (x/8)
  - Connected to the next level with an arrow (except MASTER level)

3. **GIFTERS**
  - Shows a comma-separated list of gifters assigned to that level
  - Each entry includes the gifter's name and gift progress

### 3. Interactive Features

#### Gift Selection Process
1. **Select a Gifter**
   - Click on a gifter from the Gifters Pool
   - The selected gifter will be highlighted
   - A selection notification appears at the bottom right

2. **Select a Receiver**
   - Click on either a receiver or a funder
   - The selected person will be highlighted

3. **Complete Gift**
   - When both gifter and receiver are selected:
     - The gift is processed
     - The receiver's gift count increases
     - If the receiver was in the same level, the gifter is added to that level's gifters list

#### Cancel Selection
- A cancel button appears when a selection is active
- Clicking it clears all selections and highlights

### 4. Progress Tracking

- Each person has a gift counter (x/8)
- When someone receives 8 gifts, they become eligible for progression
- Progress is tracked and displayed in real-time

### 5. Visual Indicators

- **Active Selection**: Highlighted with a blue ring
- **Level Colors**:
  - Receivers: Orange
  - Funders: Blue
  - Gifters Pool: Red
- **Flow Direction**: Arrows indicate progression between levels

## Technical Implementation

### State Management
- Uses React's useState for managing:
  - Stages data
  - Selected gifter
  - Selected receiver
  - Active states

### Data Structure
- Each stage contains:
  - Level identifier
  - Single receiver
  - Array of 8 funders
  - Array of gifters
- Each person object includes:
  - Unique ID
  - Name
  - Level
  - Gifts received count
  - Active state

### Layout
- Responsive grid system using Tailwind CSS
- 12-column layout with proportional spacing:
  - Receiver: 2 columns
  - Funders: 7 columns
  - Gifters: 3 columns

## Best Practices
1. Always complete the gift process before starting a new one
2. Monitor gift progress to identify candidates for level progression
3. Use the cancel button to clear any unwanted selections
4. Keep track of gifter distribution across levels for balanced progression#   p r o j e c t 1 - g i f t s  
 