+++

author = "Ben Petterborg"
draft = false
title = "Things that I have learned about coding"
date = "2021-11-29"
lastmod = "2021-11-29`"

description = "Through my last project, I have learned a lot about soft skills in software development"
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
slug = "pi-vex-393-exam"

+++


## Introduction
For my Robotics exam, I studied Python. While I already know the language fairly well, I was able to significantly deepen my knowledge of and capability within the language. Not only did this project improve my technical ability, but more importantly and more significantly, my soft skills.

The purpose of this library is to control Vex 393 motors using the MC29 motor controller with a Raspberry Pi, or other -like SBCs. The library can also be used with similar PWM motors, by editing the config.json.


## What did I learn?

From this project, I was able to significantly improve my understanding of data structures. I was also better able to get better at functional programming, and writing cleaner and more human-readable code. However, most of the things I learned were more high-level and more related to problem solving and managing a project.

I learned that in problem solving, sometimes the best way to find a solution is to take a break from the problem, and give yourself time to see it differently. Breaking a problem down into the basics of what you are trying to solve is pretty simple, and makes it easier to filter out information that isn’t relevant to the problem. This works very well when you do it with another person, even if they’ve never programmed before, it still can be very helpful.

### Notes on Problem Solving, and other Soft Skills
Another way to let the solution come to use is to give yourself to be bored, when your mind isn’t occupied with anything else. This can be when taking a shower, going to the bathroom, or when trying to fall asleep. I try to keep a notepad handy, to jot down a solution as soon as it comes to me.

Another thing I have learned about problem solving is that you shouldn’t focus on making something work a certain way. There might be another less obvious route to the solution. You can get better solutions when your mind is open. Another one of the best ways to find solutions is to step back, and look at the problem from a different angle.

In addition to that, asking others for help, or even just explaining the problem to someone else, can really help. When you do that, it helps you both break it down and reframe the problem. This also gives you different perspectives on the problem, and more creative or obvious solutions than you may have thought of yourself. Picking people that you know think differently that you will significantly help with this, in particular.

I also learned that in working with a larger project, while it is important to focus on one thing at a time, it can be helpful to work on separate modules from time to time. This keeps the work fresh, and allows me to better see how everything fits together.

## How does it work?/How do I use it?
This is imported into another program (either as a gitmodule or as a PyPI package), which it takes inputs from. This module executes functions called by the parent program to the parameters described in motors.json, and outputs debug/status messages, which can be configured in status_messages.json.


## About Python
Being a general programming language, and with the sheer amount of packages people make for it, Python is used for a multitude of applications. It can do just about everything, just not too quickly. It is most commonly used in data science, many tools, such as Jupyter Notebooks, are with it as their primary focus.


## Progress
[View Git commit log](https://github.com/bpetterborg/pi_vex_393/commits/main)

To view what I coded, and to view the changes, click on the \[<>\] icon. Be sure to click on the “older” page, work on this, commits go back to when the exam was released.


## Further Documentation
https://www.ben-p.dev (stay tuned for updates, currently working on a post)
