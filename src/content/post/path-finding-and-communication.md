---
publishDate: 2023-11-10T00:00:00Z
title: Path Finding and Communication
excerpt: Using algorithms for pathfinding and optimzing efficiency before displaying communication links on visualized paths.
image: https://i.imgur.com/Le1Iizd.png
tags:
  - path-finding
  - communication
  - features
category: Development
metadata:
  canonical: https://dvexplorers.vercel.app/path-finding-and-communication
---

## Path Finding

Our app provides the paths to the four largest Permanently Shadowed Regions (PSRs) situated on Faustini Rim A.

Initially, for pathfinding we used Djikstra's algorithm which uses a greedy method to find the shortest path between nodes in a graph, but it became inefficient with the entire dataset. After Dr. Marlin Strub's walkthrough at an LVC event, we switched to the A-star algorithm, optimizing it with Bidirectional A-Star. This approach uses a heuristic function to find the Euclidean distance between 2 nodes and explores from both the source and destination simultaneously, meeting in the middle.

To further enhance efficiency, we sliced the graph array and focused on the left half of the region, where the landing site and target destinations are located. The algorithm also incorporates the Least Hill Climbing method to select paths with minimal slope changes. The app displays distance in meters and summation of slope changes on the path from source to destination.

We added a feature to modify the slope to 20 degrees. While the paths for the initial three destinations remain unaltered, the fourth destination displays both paths simultaneously for comparison purposes. The blue path adheres to a maximum 15-degree slope, while the black path represents a maximum 20-degree slope.

## Communication Links

Path visualization has the option to display communication links. Each path displays 10 communication link checkpoints in orange color. These links are created to allow maximum distance between checkpoints. We used the locations where the elevation is higher and azimuth angle is lower to create these checkpoints.

After getting inspired by Kate Manning from the SCaN team we read about the power of Quantum Communications and their future use to optimize and secure the networks.

## Quantum Communication

Quantum communication utilizes the principles of quantum physics to safeguard data during transmission. Unlike traditional encryption methods using classical bits, which are vulnerable to hacking, quantum communication employs quantum bits (qubits). Qubits, often represented by photons, can exist in a superposition of states, allowing them to represent multiple combinations of 1 and 0 simultaneously. If a hacker attempts to observe these qubits, their delicate quantum state collapses, leaving a trace and preventing tampering without detection. This quantum feature enhances cybersecurity by providing a more secure means of transmitting sensitive information.
