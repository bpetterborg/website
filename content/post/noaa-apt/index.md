+++
date = 2021-05-12T20:00:00-04:00
title = "Pull Images Directly from NOAA Weather Satellites"
description = "Satellite reception on inexpensive equipment"
tags = [
	"wxsat",
	"noaa apt",
	"radio",
    "satcom"
]
slug = "apt-reception"
authors = ["Ben Petterborg"]
image = "header.jpg"
+++

Table of Contents
=================
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Receiving](#receiving)
4. [Decoding](#decoding)
5. [What to do Next](#what-to-do-next)
6. [Additional Resources](#additional-resources)

## Introduction
NOAA has weather satellites that are easy to receive with basic and inexpensive
equipment. This guide will show how to receive and decode the downlink of these
satellites. 

Roscosmos also operates METEOR satellites, which are relatively easy to receive
and decode, which can be done with the same hardware, however this guide will 
not detail how to do this.

We will be using NOAA-15, NOAA-18, and NOAA-19, on the APT downlink as these
are analog FM with a λ = ~2.2 meters, which is very easy to work with.

## Getting Started

### Software
You will need an SDR program, like [CubicSDR](https://cubicsdr.com/) 
(which I will be using for this), however other programs, such as 
[GQRX](https://gqrx.dk/), [SDR#](https://airspy.com/download/), 
[SDR++](https://github.com/AlexandreRouma/SDRPlusPlus), 
or [SigDigger](https://batchdrake.github.io/SigDigger/) will also work.

If you are using an Android phone or tablet, I recommend 
[RF-Analyzer](https://play.google.com/store/apps/details?id=com.mantz_it.rfanalyzer&hl=en_US&gl=US)

You will also need a program to decode the audio. I will use 
[NOAA APT](https://noaa-apt.mbernardi.com.ar/)

### Hardware
I recommend the 
[RTL-SDR kit](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/), it as a
adjustable and portable dipole antenna, an RG-174 extension cable, and the
dongle itself.

You will also need a laptop, an Android phone, or a tablet. Brighter screens
are better since you will be outside.

## Receieving
A few minutes before the satellite will be above, setup your antenna. Each 
element of the dipole should be ~53cm long, 120° apart, with 'V' facing south. 
The center conductor of the coax should be connected to the element facing
right. If it's not, simply flip the antenna over.

Open CubicSDR and select 
RTL2832U, RTL-SDR, or something else that starts with 'Realtek'. Tune your 
receiver to the appropriate satellite, per the table below.

|Satellite | Freq. (MHz) |
--- | --- | ---
|NOAA-15 |137.61 |
|NOAA-18 |137.91 |
|NOAA-19 |137.1 |

Set the demodulator to WFM (Wide FM), and the receive bandwidth to ~40kHz, to
account for doppler shift.

Under recording, set the path, and the squelch to 'Record Always'. Begin the
recording ~1 minute before the satellite will pass over. It'll take ~15min, so
have something to keep yourself occupied.

Once the satellite passes over the horizon and the signal fades away, you can
go ahead and stop the recording.

## Decoding
Open NOAA APT and open your file. You can skip through the rest of the menus,
then save the image.

Congrats! You've pulled images directly from weather satellites in orbit!

## What to do Next
If you enjoyed this, you may also want to try receiving METEOR, GOES, or HRPT.
These both use digital downlinks, which are a bit harder to work with, however
they provide much higher-resolution color imagery.

GOES satellites are in geostationary orbits, which allow them to provide 'full-
disk' (i.e. a picture of the whole earth). 

Amateur satcom is a fun hobby and gives you bragging rights to say you've
downloaded images directly off of weather satellites in orbit.

## Additional Resources
[RTL-SDR Blog](https://rtl-sdr.com)