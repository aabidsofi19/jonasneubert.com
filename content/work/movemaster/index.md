---
title: 'Mitsubishi Movemaster'
date: 2022-08-27T18:09:38+05:30
draft: false
subtitle: 'Reverse engineering and reviving a 20-year old robot arm'
---

![](images/movemaster-sketch.jpg)

This was my Final Year Project for my 4-year undergraduate degree in Mechanical Engineering at [Imperial College London](https://en.wikipedia.org/wiki/Imperial_College_London).
They gave me a really old robot arm without a control box and without documentation, and my job was to make it do that robot thing again.
In the process I learned to always use a fuse and enough about LabVIEW and National Instruments products to author [a case study for one of their PR brochures](http://sine.ni.com/cs/app/doc/p/id/cs-11632).

## Project Abstract

A twenty year old Mitsubishi Movemaster RM-501 five-axis articulated robot has been reverse
engineered and a National Instruments CompactRIO programmable controller is programmed
to provide an interface to control the robot from a PC. This report includes information on
components and circuitry of the RM-501 robot. This information is then used to build a
hardware interface between CompactRIO and the robot. On the CompactRIO’s FPGA, a
hardware driver is implemented, which reads the robot’s encoder signal and provides a pulse
width modulated signal to the robot driver. Forward and inverse kinematics of the robot as
well as a proportional controller are implemented using LabVIEW. Concluding, an evaluation
of the RM-501 as project focus is given and recommendations for further work are made.
