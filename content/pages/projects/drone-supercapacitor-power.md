---
title: Drone Supercapacitor Power System
slug: drone-supercapacitor-power
summary: Research on Crazyflie brushless drones powered by supercapacitors to explore
  fast-charging fleets where charge time may be shorter than flight time.
category: Research
tags:
- Robotics
- Power Systems
- Embedded Systems
- Optimization
role: Hardware testing, PCB integration support, motor/propeller testing, supercapacitor
  configuration, localization setup, data collection
timeline: Research project
collaborators:
- Dr. Andrew Wilhelm
- Professor Nils Napp
featured: true
order: 2
type: ProjectLayout
stats:
- label: Platform
  value: Crazyflie BL
  note: Custom PCB + supercapacitors
---

## Overview

This research project investigates drone designs powered by supercapacitors instead of traditional batteries. Supercapacitors can charge much faster than batteries, but they have lower energy capacity.

## Motivation / Problem

Batteries charge slowly relative to desired operational tempo. Supercapacitors offer extremely fast charging, but their lower energy density creates major trade-offs in flight time, mass, and power delivery.

## My Role

I contributed to hardware testing, PCB integration support, motor and propeller testing, supercapacitor configuration, localization setup, and data collection.

## System Design

Using Crazyflie brushless drones as an initial platform, we test different supercapacitor configurations, custom PCB integration, propeller choices, motor behavior, weight trade-offs, and localization methods. Because supercapacitors occupy space normally used by Lighthouse localization hardware, the project also explores alternative localization using OptiTrack and LiDAR.

## Future Work

Improved PCB design, optimized frame, better supercapacitor selection, automated drone swapping, and improved localization integration.