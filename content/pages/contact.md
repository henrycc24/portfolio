---
title: Contact
slug: /contact
sections:
  - type: GenericSection
    title:
      text: Get in Touch
      color: text-dark
      type: TitleBlock
    subtitle: Research collaborations, internships, and project inquiries
    text: >
      I'm always interested in robotics, embedded systems, and hardware-focused engineering opportunities.
      Reach out via email or connect on GitHub and LinkedIn.
    badge:
      label: Contact
      color: text-primary
      type: Badge
    actions:
      - label: Email
        url: mailto:hcc54@cornell.edu
        style: secondary
        type: Button
      - label: GitHub
        url: https://github.com/henrycc24
        style: primary
        type: Link
      - label: LinkedIn
        url: https://www.linkedin.com/in/henry-calderon
        style: primary
        type: Link
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding: [pt-6, pb-6, pl-6, pr-6]
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: false
        style: primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding: [pt-16, pb-16, pl-16, pr-16]
seo:
  metaTitle: Contact — Henry Calderon
  metaDescription: Contact Henry Calderon for research, robotics, and engineering opportunities.
  type: Seo
type: PageLayout
---
