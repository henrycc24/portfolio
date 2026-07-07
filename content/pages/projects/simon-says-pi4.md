---
title: Simon Says with Raspberry Pi 4
slug: simon-says-pi4
summary: A Raspberry Pi 4 Simon Says game using MediaPipe pose tracking, a 64×32 LED
  matrix, PiTFT UI, and custom pixel-art game frames.
category: Class Project
tags:
- Embedded Systems
- Raspberry Pi
- Computer Vision
- Game Design
role: LED matrix graphics, wiring integration, hardware bring-up, game frame design
timeline: ECE 5725 Final Project
collaborators:
- Elias Castro
featured: false
order: 7
type: ProjectLayout
heroImage: /images/projects/simon-says-pi4/IMG_7200.jpg
heroVideo: https://www.youtube.com/watch?v=et91Gea6CPk
links:
- label: Project Report PDF
  url: /pdfs/simon-says-pi4/simon_says.pdf
gallery:
- type: image
  src: /images/projects/simon-says-pi4/IMG_7200.jpg
  caption: Full hardware setup
- type: image
  src: /images/projects/simon-says-pi4/diagram.png
  caption: Hardware wiring diagram
- type: image
  src: /images/projects/simon-says-pi4/led_matrix_socket2.png
  caption: LED matrix wiring
- type: image
  src: /images/projects/simon-says-pi4/cv1.png
  caption: Computer vision tracking
- type: image
  src: /images/projects/simon-says-pi4/group.jpg
  caption: Team photo
videos:
- title: Demonstration Video
  url: https://www.youtube.com/watch?v=et91Gea6CPk
  type: youtube
pdfs:
- title: Simon Says Final Report
  file: /pdfs/simon-says-pi4/simon_says.pdf
stats:
- label: Display
  value: 64×32 LED matrix
  note: 16 GPIO connections
- label: Pose tracking
  value: MediaPipe
  note: 5 unique player actions
diagrams:
  hardware:
    items:
    - src: /images/projects/simon-says-pi4/diagram.png
      caption: System wiring diagram
---

## Overview

This project recreates the classic Simon Says game on a Raspberry Pi 4. The LED matrix displays commands while a camera tracks the player's body pose in real time.

## Hardware

The system uses a Raspberry Pi 4, Adafruit 64×32 LED matrix (16 GPIO connections), Raspberry Pi Camera v2, and Adafruit PiTFT. The LED matrix uses a separate 5V power supply while the Pi powers the PiTFT and camera.

## Wiring / Circuit

The PiTFT connects as in prior course labs. The LED matrix requires direct wiring of 16 Raspberry Pi GPIO pins. The camera connects via ribbon cable to the Pi CSI port.

## Software / Game Logic

MediaPipe processes body landmarks to detect five actions: left/right arm out, left/right leg up, and arms up. The game awards points only when the player performs the correct action while "SIMON SAYS" is displayed. Reaction time decreases as score increases.

## My Role

I developed the LED matrix graphics — 14 custom pixel-art frames including action screens, scoreboard, ready screen, win screen, and feedback states. I also supported wiring integration and hardware bring-up.

## Demo

The system tracks player pose, updates the LED matrix in real time, and adjusts difficulty as the score increases.

## Lessons Learned

The LED matrix required careful GPIO timing configuration (`gpio_slowdown`) and correct dimension initialization before graphics rendered reliably.