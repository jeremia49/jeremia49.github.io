---
title: "Road Condition Classifier & Pothole Early-Warning System"
description: "CNN-based road condition classification with an Android GIS app for Simalungun Regency. My undergraduate thesis, also published as a journal article."
date: 2025-01-15
tags: ["AI/ML", "Computer Vision", "Android", "Research"]
tech: ["Python", "TensorFlow", "CNN", "Kotlin", "Android", "GIS"]
featured: true
# To add a cover image: drop a file in this folder and uncomment:
# cover: ./cover.jpg
links:
  - label: "Journal Article (DOI)"
    url: "https://doi.org/10.24014/ijaidm.v8i1.31866"
video: "https://youtu.be/CHvSiiMTjEw?si=XtOgR93AhbVGASsq&t=305"
gallery: []
---

## Overview

This project implements a **Convolutional Neural Network (CNN)** to automatically
classify road conditions (good, light damage, heavy damage / potholes) from images,
paired with an **Android-based Geographic Information System** that maps damaged
segments and issues early warnings for potholes. It was my undergraduate thesis at
Universitas Negeri Medan and was published in the *Indonesian Journal of Artificial
Intelligence and Data Mining*.

## Problem

Road damage in Simalungun Regency was logged manually and slowly, so hazards like
potholes went unreported. The goal was an automated pipeline: capture → classify →
locate → warn.

## What I built

- A CNN image classifier trained on labelled road imagery.
- A TensorFlow Lite model exported for on-device inference.
- An Android app (Kotlin) that tags each classification with GPS coordinates and
  plots them on a map.
- An early-warning flow that flags pothole-class detections.

## Results

The classifier reached strong accuracy on the held-out set and ran on-device via
TensorFlow Lite. Full methodology and metrics are in the published article linked
above.
