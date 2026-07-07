---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: Engineering physical systems from circuits to robots.
      color: text-dark
      type: TitleBlock
    subtitle: Robotics · Embedded Systems · Localization · CAD · Hardware Integration
    text: >
      I'm Henry Calderon, an Electrical and Computer Engineering student focused on robotics,
      embedded systems, localization, electromechanical design, and hardware-driven research.
      My work combines circuits, firmware, CAD, mechanical design, sensing, control, and software
      to build robots and experimental systems that operate in the real world.
    actions:
      - label: View Projects
        url: /projects/
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: secondary
        type: Button
      - label: GitHub
        url: https://github.com/henrycc24
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
      - label: Contact
        url: /contact/
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Link
    media:
      url: /images/main-hero.svg
      altText: Engineering portfolio hero
      type: ImageBlock
    badge:
      label: ECE Portfolio
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
  - type: FeaturedProjectsSection
    title:
      text: Featured Research & Projects
      type: TitleBlock
    subtitle: Hardware-heavy engineering work across robotics, localization, power systems, and embedded platforms.
    limit: 4
    actions:
      - label: All Projects
        url: /projects/
        type: Link
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pb-16
          - pl-16
          - pr-16
  - type: FeaturedItemsSection
    title:
      text: Research Areas
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Technical focus areas across my coursework and research
    items:
      - type: FeaturedItem
        title: Localization
        subtitle: Floor texture & Lighthouse decoding
        text: Ground texture mapping, RTK-GPS fusion, and embedded Lighthouse 2.0 signal processing.
        image:
          url: /images/icon1.svg
          altText: Localization
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: row
      - type: FeaturedItem
        title: Embedded Systems
        subtitle: Firmware & FPGA acceleration
        text: RP2040, Raspberry Pi, motor control, and FPGA-accelerated decoding pipelines.
        image:
          url: /images/icon2.svg
          altText: Embedded systems
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: row
      - type: FeaturedItem
        title: Robotics & CAD
        subtitle: Mechanisms, grippers, and chassis design
        text: ROS 2 integration, electromechanical design, and manufacturable robot hardware.
        image:
          url: /images/icon3.svg
          altText: Robotics and CAD
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: row
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding: [pt-16, pb-16, pl-16, pr-16]
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      text: Hardware + Software Skills
      color: text-dark
      type: TitleBlock
    subtitle: Full-stack engineering across electrical, mechanical, firmware, and robot software
    text: >
      Circuit design · PCB integration · Embedded C/C++ · Python · Verilog/FPGA · ROS 2 · CAD/mechanical design ·
      sensing & localization · motor control · rapid prototyping · computer vision · power electronics
    actions:
      - label: About Me
        url: /about/
        style: secondary
        type: Button
      - label: Resume
        url: /pdfs/resume.pdf
        style: primary
        type: Link
    media:
      url: /images/abstract-feature1.svg
      altText: Technical skills illustration
      type: ImageBlock
    badge:
      label: Skills
      color: text-primary
      type: Badge
    colors: bg-neutral-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
        padding: [pt-16, pb-16, pl-16, pr-16]
  - type: GenericSection
    title:
      text: Media-Rich Project Pages
      color: text-dark
      type: TitleBlock
    subtitle: Photos, diagrams, CAD models, videos, and PDFs for every major project
    text: >
      Each project page supports interactive 3D models (.glb/.gltf), circuit and wiring diagrams,
      media galleries, embedded videos, and downloadable reports — designed to showcase real hardware work.
    actions:
      - label: Explore Projects
        url: /projects/
        style: secondary
        type: Button
    media:
      url: /images/abstract-feature2.svg
      altText: Project media preview
      type: ImageBlock
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        padding: [pt-16, pb-16, pl-16, pr-16]
seo:
  metaTitle: Henry Calderon — Engineering Portfolio
  metaDescription: Robotics, embedded systems, localization, CAD, and hardware-driven research by Henry Calderon.
  type: Seo
type: PageLayout
---
