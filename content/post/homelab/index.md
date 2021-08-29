+++
author = "Ben Petterborg"
draft = false
title = "My Homelab"
date = "2021-03-27"
lastmod = "2020-03-27"
description = "A log of my Homelab"
categories = [
    "homelab",
]
tags = [
    "networking",
    "homelab",
    "sysadmin",
    "linux",
]
image = "header.jpg"

+++

### Hardware
  - Servers
      - Dell R710 II
          - Dual Xeon X5670s
          - 32GiB RAM

  - Networking
      - Switches
          - TP-Link TL-SG108E

      - Wireless APs
          - Linksys EA6900
          - Linksys RE6800

### Software
  - R710 - Proxmox VE (Hypervisor)
      - OPNsense firewall
      - Debian LXC
          - Docker

### Workloads/Services
  - Proxmox VMs/LXCs
      - OPNsense firewall
      - OpenMediaVault NAS
      - Zabbix (Monitoring)

  - Docker
      - Home Assistant
      - NGINX Proxy Manager
      - Portainer
      - Heimdall (Dashboard of all services)

  - Other
      - OctoPrint
