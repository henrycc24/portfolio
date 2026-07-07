---
title: Sisyphus Sand Table
slug: sisyphus-sand-table-ece5760
summary: A microcontroller-based Sisyphus sand table that draws geometric patterns
  in sand using a polar coordinate gantry, stepper motors, and Raspberry Pi Pico control.
category: Class Project
tags:
- Embedded Systems
- Microcontrollers
- Motion Control
- Mechatronics
role: Hardware design, mechanical integration, motor control, circuit design, fabrication,
  testing
timeline: ECE 5760 — Spring 2025
collaborators:
- Aidan Derocher
- Jorge Corpa Chung
featured: true
order: 5
type: ProjectLayout
heroImage: /images/projects/sisyphus-sand-table-ece5760/table.jpg
heroVideo: https://www.youtube.com/watch?v=nShSFRJ6mLs
links:
- label: Class Project Site
  url: https://ece4760.github.io/Projects/Spring2025/ajd332_hcc54_jc3656/index.html
gallery:
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/table.jpg
  caption: Completed sand table
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/circuitfinal.jpeg
  caption: Final circuit wiring
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/gantry.JPEG
  caption: Gantry system on beam
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/baseall.png
  caption: Rotary base CAD assembly
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/spiral.jpeg
  caption: Spiral pattern drawn in sand
- type: image
  src: /images/projects/sisyphus-sand-table-ece5760/heart.png
  caption: Heart pattern drawn in sand
videos:
- title: Demonstration Video
  url: https://www.youtube.com/watch?v=nShSFRJ6mLs
  type: youtube
stats:
- label: Motor supply
  value: 20 V
  note: Under-amped NEMA17 testing
- label: Control board
  value: RP2040 Pico
  note: TMC2209 stepper drivers
diagrams:
  architecture:
    description: Polar coordinate gantry beneath a wooden table moves a magnet to
      drag a steel ball through sand.
    items:
    - src: /images/projects/sisyphus-sand-table-ece5760/whiteboard.jpeg
      caption: Early whiteboard system sketch
  hardware:
    description: 'Dual power domains: Pico on 5V USB, NEMA17 motors on external 20V
      supply via TMC2209 drivers.'
    items:
    - src: /images/projects/sisyphus-sand-table-ece5760/circuitfinal.jpeg
      caption: Final circuit
    - src: /images/projects/sisyphus-sand-table-ece5760/wiring.jpeg
      caption: Wiring detail
---

## Overview

This project explores the design and fabrication of a Sisyphus-inspired sand drawing table — a kinetic sculpture that creates intricate patterns by dragging a steel ball through sand using a magnetic system beneath the surface.

## Motivation / Problem

We wanted to combine mechanical design, motor control, and embedded firmware into a complete mechatronic system that could reliably draw geometric patterns in sand.

## My Role

I contributed to hardware design, mechanical integration, circuit design, fabrication, motor control implementation, and testing.

## Mechanical System

The table operates on a polar coordinate gantry system: a rotating arm beneath the table with a motorized gantry that slides along its length. Custom 3D-printed parts, a slip ring for wire routing, and a redesigned rotary base improved stability over early spur-gear prototypes.

## Motion / Control System

Two stepper motors drive rotation and gantry translation. End-stop buttons with pull-down resistors support gantry calibration. The gantry position is tracked using step pulses and direction control through TMC2209 drivers.

## Microcontroller / Software

A Raspberry Pi Pico controls the system, generating step pulses and reading end-stop buttons. Pattern generation includes circular, spiral, and heart-shaped trajectories.

## Results

The final system draws repeatable geometric patterns including spirals, hearts, and starbursts in fine sand.

## Lessons Learned

Mechanical stability of the rotating base was as important as control code. Iterating CAD, bearings, and clamping geometry was essential before tuning motion algorithms.

## Future Work

Add closed-loop position feedback, smoother acceleration profiles, and a web interface for uploading custom patterns.