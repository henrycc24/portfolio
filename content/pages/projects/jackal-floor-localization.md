---
title: Jackal Floor Localization Robot
slug: jackal-floor-localization
summary: Ground texture localization for mobile robots using a downward-facing camera
  on a Clearpath Jackal, combining floor images with RTK-GPS to build and match floor
  texture maps.
category: Research
tags:
- Robotics
- Localization
- Computer Vision
- SLAM
role: Robot setup, camera/lens mounting, data collection, integration/testing, hardware
  support, documentation
timeline: Research project
collaborators:
- Dr. Aaron Wilhelm
- Professor Nils Napp
featured: true
order: 1
type: ProjectLayout
stats:
- label: Sensor approach
  value: Downward camera
  note: Floor texture + RTK-GPS
---

## Overview

This project explores ground texture localization for mobile robots using a downward-facing camera mounted on a Clearpath Jackal robot. Instead of relying only on LiDAR or outward-facing cameras, the system captures high-resolution images of floor surfaces such as carpet, concrete, and sidewalks.

## Motivation / Problem

Reliable simultaneous localization and mapping is essential for safe autonomous navigation, but traditional localization systems can struggle in dynamic environments where people, furniture, lighting variation, and occlusions interfere with sensors.

## My Role

I supported robot setup, camera and lens mounting, data collection runs, integration and testing, hardware support, and project documentation.

## Approach

Images are collected every few centimeters and associated with RTK-GPS position estimates. These images are combined with localization data to reconstruct floor maps. Using the algorithm developed by Aaron Wilhelm, the robot can later localize itself and navigate between points on the floor using the captured texture.

## Hardware

Clearpath Jackal, FLIR Blackfly camera, lens system, RTK-GPS, and custom mounting hardware.

## Future Work

Improve robustness to lighting variation, accelerate image matching, add better lighting control, and scale mapping to larger environments.