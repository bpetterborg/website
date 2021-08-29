+++
author = "Ben Petterborg"
draft = false
title = "P25 Radio Monitor"
date = "2021-04-20"
lastmod = "2020-04-20"
description = "An RTLSDR-based discord bot to monitor radio traffic"
categories = [
    "code",
    "homelab"
]
tags = [
    "rtl-sdr",
    "coding",
    "radio",
    "linux",
]

+++

## Heads up
*This project is incomplete, while certain parts are functional, don't expect it all to work.*
Content on this page may also change, as stuff is added and changed.


Table of Contents
=================
1. [Introduction](#introduction)
2. [Commands](#commands)
3. [For Civil Air Patrol Members](#for-civil-air-patrol-members)

### What it does

This bot listens for P25-encoded radio traffic and rebroadcasts
it over discord. This project what originally build for the
Ohio Wing Civil Air Patrol's Emergency Services, for squardons
with less funding to be able to still monitor radio traffic.

**This bot is not capable of transmitting.**

### Commands

```
  connect        Connect to your current voice channel.

  disconnect     Leave currently connected voice channel

  ping           Get latency of the bot. To run multiple,
                 append an integer with that value.

  channel        Sets radio channel. Zones will be
                 automatically selected. Append the
                 channel name as a string.

  start          Start receiver

  halt           Kill process on server running bot.

  help           View help page

  version        Show version

```


### For Civil Air Patrol Members

If you would like to use this for your squadron, contact your Commander,
Communications Officer, and [me](mailto:benjamin.petterborg@ohwg.cap.gov). 

Frequencies are FOUO.