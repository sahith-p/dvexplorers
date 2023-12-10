---
publishDate: 2023-10-16T00:00:00Z
title: Early Challenges - Choosing Technologies and Features
excerpt: Researching programming languages and libraries to finalize technologies and features that would be optimal for the challenge.
image: https://i.imgur.com/IMLjTVt.png
tags:
  - programming
  - ursina
  - features
category: Research
metadata:
  canonical: https://dvexplorers.vercel.app/early-challenges-choosing-tech-features
---

## Previous Experience and Project Management

No one in the team had prior experience working on a project of similar complexity and scale, and in the first two weeks each member was trying to do everything. That experience made us realize that we needed to use a methodical goal oriented approach. We referred to the K-12 Computer Science Framework to collaborate around computing and identified multiple work streams led by an owner and that could run in parallel. We defined computational problems that we needed to solve - dealing with large data, creating moon texture and visualization, identifying and optimizing path finding, defining user interface and user options, identifying landing and destination sites, and choosing our coding platform. This led us to creating a storyboard that guided and organized the team to start collaborating to build the app.

## Choosing Technologies

Early on, we realized the traditional front-end/back-end approach wouldn't work for our problem. After watching the LVC from Ben Weno and Billy Young from Johnson Space Center, we opted for a gaming engine solution and explored Unity and Ursina. Despite our team's C# and Python coding experience, we lacked gaming engine knowledge. To bridge the gap, we enlisted help from an industry mentor. After 8-10 days with both engines, we chose Ursina as Unity's complexity made it challenging. Ursina, with simpler code, direct game object control, and seamless integration with Python libraries like Numpy for handling large datasets, proved to be a better fit for our project.

## Finalizing Application Features

At this point, we decided it would be a good idea to create a list of features we want to include in our app, so we decided to list them out below.

**Data Analysis**

- Data Organization
- 5 different regions
- Latitude, Longitude, Slope and Heights are provided
- Calculations for cartesian coordinates, azimuth and elevation

**Visualize**

- Terrain should be from first person
  -Terrain should be smooth
- Terrain should show height, slope, elevation angle, azimuth angle
- Use color to display scale and show color key

**Create a mini map**

- Update location on the minimap

**User toggle**

- User can toggle between height, slope, elevation angle, azimuth angle
- Ability to change slope to another value (maximum is 20 but less than 15).
- BOTH routes should be shown

**Landing and destination sites**

- Criteria for good landing site - sunlight, relatively flat
- Criteria for destination - PSRs with ice and water
- Identify areas of interest with scientific rationale
- Create a path from landing to destination site with constraints
- Shortest distance
- Least amount of hill climbing
- Percentage of time Earth is visible.
