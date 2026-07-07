---
title: Lighthouse Localization + LiDAR / FPGA Acceleration
slug: lighthouse-localization-lidar-fpga
summary: Improving Lighthouse 2.0 localization decoding using RP2040/Pico work and
  FPGA acceleration on Pico ICE and Zedboard platforms.
category: Research
tags:
- Embedded Systems
- FPGA
- Localization
- Robotics
role: Adapting Pico implementation, exploring FPGA acceleration, benchmarking, hardware
  pinout/testing, signal capture, robot integration
timeline: Research project
collaborators:
- Dr. Leah Lackey
- Professor Nils Napp
featured: true
order: 3
type: ProjectLayout
links:
- label: DotBots RP2040 Base
  url: https://github.com/DotBots/lh2_on_rp2040
stats:
- label: Base platform
  value: RP2040/Pico
  note: Extended with FPGA targets
---

## Overview

This project works on improving Lighthouse 2.0 localization decoding for robotics by using microcontrollers and FPGA acceleration.

## Motivation / Problem

The Lighthouse localization system uses optical signals that must be captured, demodulated, decoded, and interpreted to determine sensor position. Decoding must happen quickly and reliably on embedded hardware.

## My Role

I adapted the Pico implementation, explored FPGA acceleration paths, ran benchmarks, performed hardware pinout and testing, captured signals, and supported robot integration.

## Signal Processing Pipeline

Work targets envelope detection, data decoding, demodulation, polynomial matching, and LFSR search on Pico ICE (ICE40) and Zedboard FPGA platforms.

## Future Work

Full FPGA pipeline, faster localization updates, ROS 2 integration, and multi-sensor support.