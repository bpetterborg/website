+++

author = "Ben Petterborg"
draft = false
title = "Devlog(s): Vex-based \"Roomba\""
date = "2021-10-11"
lastmod = "2021-10-11`"

description = "Working on basic structure of the code and the robot."
categories = [
	"coding",
]

tags = [
	"raspberry-pi",
	"vex",
	"python",
	"rpi.gpio"
]

#image = "header.jpg"
slug = "vex-vacuum"

+++

Table of Contents
=================
1. [Introduction](#introduction)
2. [Hardware](#hardware)
3. [Software](#software)
4. [10/10](#10/10)

## Introduction
I am building a roomba-like "vacuum" based on Vex hardware. It's not really a 
vacuum, but a very strong magnet to pick up small pieces of metal off of the 
STEM lab floor. 

The point of this is to learn all sorts of technologies relating to robotics, 
but also to struture a large program. 

As far as the point of me logging this, it is more for myself. I will already
be documenting this in a journal, so I may as well share my solutions with 
other people.

## Hardware
I'll add a diagram and pictures later, it is too much of a work-in-progress 
right now.

### Parts
I'll update this list as I go, expect this to change. It is currently 
incomplete.
<!-- Add a picture here -->
- 2x Vex 393 Motor, with standard gearing
- 2x Vex MC29 motor controller
- Raspberry Pi 3B
- 5V step-down converter
- Vex 7.2V 3000mAH battery

### How it's all connected
<!-- Add a diagram here -->
I'll add a diagram later.

## Software
<!-- Add a diagram here -->
Same thing here.

You can view code on 
[my github repo](https://github.com/bpetterborg/vex_vacuum).

~~The Raspberry Pi serves as the upper computer, and the Vex brain the lower
computer. The Pi does more of the high-level work, such as mapping, image 
processing, and positioning. The Vex brain does more of the lower-level tasks
such as getting data from the sensors (sonar, collision detection), and
controlling the motors.~~

Due to the poor documentation of Vex's hardware, I will be doing it solely on
the RPi. It is less interesting but ehh, it's easier.

I'll add some more details later, if you are *that* interested, check the repo.

## 10/10

### Current Progress
- Started building the robot
- Working on code
	- Motor control (motors.py)
		- Mostly finished
		- Unsure about interfacing with the MC29s, but it's a good start.
	

### Tasks
- Finish building the robot
- Figure out batteries
	- Get the stuff to wire them
- Finish motor control code
- Test motor control code


## 11/15	

### Current Progress
- Finalised hardware design mostly
- Wired everything
- Figure out how vex sonar sensors work
- In progress of rewriting motor control library

### Tasks
- Add retaining clips to Dupont connectors
- Continue rewriting motor control library

### Notes
- Will be focusing more on coding, specifically for the motors


## 11/17

### Current Progress
- Continue work on motor control
- Figured how to do motor configuration [(#6163e12)](https://github.com/bpetterborg/pi_vex_393/commit/6163e12a382989c79ed2783d0b1c3f74e182110f) and [(#4f87c66)](https://github.com/bpetterborg/pi_vex_393/commit/4f87c6644f9e28cfce13796882a5131a016911f4)
	- Use a `*.json` file
	- Make an attribute for the motor
	- Put individual motor config variables in the motor attribute
	- Put like-motor variables in a separate config to avoid repeating yourself

### Tasks
- Add in motor control functions from old code
- Figure out how to get status messages in a sane way
