
# 🌒 [**DVExplorers**](https://dvexplorers.codes): NASA App Development Challenge 2024

### *We're the [DVExplorers](https://dvexplorers.codes).* 

*Competing in the NASA App Development Challenge 2024 while exploring technology and science through learning, community engagement, and teamwork.*

This repository is composed of all the code our application submission in the NASA App Development Challenge 2024. 

Our project utilizes the Python Ursina library as a lightweight, optimized game engine to render the moon surface. The app features an interactive GUI, as well as many other features documented below, and through comments within our code. Learn more at **https://dvexplorers.codes/**.
## Features
**App Creation and Modeling**
- App accurately visualizes the following from a first person perspective: height, slope, elevation angle from astronaut to Earth, and azimuth angle from astronaut to Earth. Data is smoothed, looking like natural terrain

**App Creation - Color & Texture**
- App displays texture and uses color to convey information to scale with corresponding color key and allows users to toggle between height, slope, elevation angle, and azimuth angle.

**App Creation - Wayfinding**
- App plots and clearly identifies a complete path from the landing site to the destination site that does not exceed 15 degrees of slope and allows user to toggle between different optimizations, e.g., shortest distance, least amount of hill climbing, or percentage of time Earth is visible.


**App Creation - Communication Link Checkpoints**
- App identifies 10 locations, along the path, for communication link checkpoints at a location where the elevation angle to Earth is greater than the elevation angle to the horizon at the same azimuth angle, with some sort of optimization, e.g., maximum distance between checkpoints

**App Creation - Lunar Site Selection**
- Landing and destination sites as well as areas of interest along the path are identified with scientific evidence/data/rationale for site selection.



## Showcase
- *Application Video*
[![YouTube Video](https://img.youtube.com/vi/-O9yX4oE3XU/0.jpg)](https://www.youtube.com/watch?v=-O9yX4oE3XU)

- We also have a website showcasing our development process and outreach events at **https://dvexplorers.codes/**.
### Run Locally

- *Cloning the project*

```bash
  git clone https://github.com/aiworld2020/nasa-adc-2023
```


## Acknowledgements

We want to thank our NASA mentor, Omar Francis, for providing valuable guidance that greatly contributed to the completion of our app. The Live Virtual Connections led by Alex from NASA were timely and covered important topics. Beth helped us stay focused by reminding us of key dates throughout the challenge. Seeking industry mentors for insights on gaming engine concepts and code organization, along with guidance from Ms. Lau, our lead teacher, was crucial in following K-12 computer science framework practices and successfully meeting the challenge. We are grateful for their support.

- Omar Francis – Team Mentor
- Ben Weno and Billy Young - Johnson Space Center
- Dr. Marlin Strub - NASA Jet Propulsion Laboratory
- Alex Gladney-Lemon – Senior Project Coordinator
- Beth Sizjarto – ADC Technical Specialist
- Ms. Lau – Lead Teacher
