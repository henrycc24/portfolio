---
title: About
slug: /about
sections:
  - type: GenericSection
    title:
      text: About Henry Calderon
      color: text-dark
      type: TitleBlock
    subtitle: Electrical and Computer Engineering · Robotics · Embedded Systems · Hardware Design
    text: >
      I'm Henry Calderon, an Electrical and Computer Engineering student focused on building physical systems
      that connect hardware, software, and robotics. My projects often involve the full engineering stack:
      circuit design, embedded firmware, CAD and mechanical integration, sensing, localization, control, and robot software.

      I'm especially interested in robots that operate in messy real-world environments, where the electronics,
      mechanics, and algorithms all have to work together.

      My work spans research in the Napp Research Group — including floor texture localization, supercapacitor drone power,
      Lighthouse FPGA acceleration, and construction robotics — as well as class projects in microcontrollers,
      rapid prototyping, computer vision, and fast robot control.
    actions:
      - label: View Projects
        url: /projects/
        style: secondary
        type: Button
      - label: Contact Me
        url: /contact/
        style: primary
        type: Link
    media:
      url: /images/person-placeholder-light.png
      altText: Henry Calderon
      type: ImageBlock
    badge:
      label: About
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding: [pt-16, pb-16, pl-16, pr-16]
  - type: FeaturedItemsSection
    title:
      text: Technical Interests
      type: TitleBlock
    subtitle: Areas I keep returning to across projects
    items:
      - type: FeaturedItem
        title: Robotics
        subtitle: Mobile & manipulation systems
        text: ROS 2, wheeled platforms, grippers, and construction robots.
        image:
          url: /images/icon1.svg
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Embedded Hardware
        subtitle: Circuits to firmware
        text: Microcontrollers, motor drivers, PCBs, and FPGA acceleration.
        image:
          url: /images/icon2.svg
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: col
      - type: FeaturedItem
        title: Localization & Sensing
        subtitle: Making robots know where they are
        text: Floor texture maps, Lighthouse decoding, GPS, and computer vision.
        image:
          url: /images/icon3.svg
          type: ImageBlock
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding: [pt-8, pl-8, pb-8, pr-8]
            borderRadius: x-large
            flexDirection: col
    variant: three-col-grid
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding: [pt-8, pb-16, pl-16, pr-16]
        justifyContent: center
seo:
  metaTitle: About — Henry Calderon
  metaDescription: About Henry Calderon, ECE student focused on robotics, embedded systems, and hardware design.
  type: Seo
type: PageLayout
---
