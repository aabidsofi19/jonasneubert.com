---
title: 'Reconfigurable Modular Robotics'
start_date: 2011
end_date: 2014
draft: false
subtitle: 'Little robots that solder themselves to each other'
---
![](images/soldercubes-assemblies.jpg)

For the graduate school thesis work I set out to demonstrate complex “ecosystem” behaviors with large numbers of custom-made modular robots.
However, I quickly realized the challenges of building the fleet of approximately 40 little robots and then maintaining them to be reliable enough to not randomly fail during demos.
As a result, I quickly pivoted towards developing a module design for reconfigurable modular robots that was radically simpler and cheaper than prior projects in the academic literally.
The focus of this work was on the connection mechanism which was the main driver of cost, BOM size, and complexity.

This work ultimately found its way into two academic papers.

The first one covers exclusively the connector:
Neubert, J., Rost, A., Lipson, H. (2014)
“[Self-Soldering Connectors for Modular Robots](https://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6888504)”,
**IEEE Transactions on Robotics**,
vol. 30, pp. 1344-1357,
([preprint pdf](self-soldering-connectors-for-modular-robots-jonas-neubert.pdf))

> The connection mechanism between neighboring
> modules is the most critical sub-system of each module in a
> modular robot. Here we describe a strong, lightweight, solid state
> connection method based on heating a low melting point alloy to
> form reversible soldered connections. No external manipulation
> is required for forming or breaking connections between adja-
> cent connectors, making this method suitable for reconfigurable
> systems such as self-reconfiguring modular robots. Energy is
> only consumed when switching connectivity, and the ability to
> transfer power and signal through the connector is inherent to the
> method. Soldering connectors have no moving parts, are orders of
> magnitude lighter than other connectors, and are readily mass
> manufacturable. The mechanical strength of the connector is
> measured as 173N, enough to support many robot modules, and
> hundreds of connection cycles are performed before failure.

The second one covers the design of the complete robot module:
Neubert, J., Lipson, H. (2016)
“[Soldercubes: A Self-soldering Self-reconfiguring Modular Robot System](https://link.springer.com/article/10.1007/s10514-015-9441-4)”,
**Autonomous Robots**,
vol. 40, pp. 139-158,
([pdf](https://fab.cba.mit.edu/classes/865.18/discrete/micro/solder_cubes.pdf), [preprint pdf](soldercubes-selfsoldering-modular-robot-system-jonas-neubert.pdf))

> Soldercubes are a self-reconfiguring modular robot (MR) system whose modules are light weight, low cost, and designed with manufacturability for large batch production in mind.
> The frequently cited promises of modular robotics—versatility, robustness, and low cost—assume the availability of large numbers of modules.
> However, modules in most MR prototypes are large, mechanically complex, expensive, and difficult to manufacture.
> Soldercubes partially overcome this contradiction through optimizing some components for volume manufacturing processes.
> With the integration of a soldering connector which weighs only 2 g and has no moving parts, Soldercubes are among the cheapest, lightest and smallest among comparable self-reconfiguring MR systems.
> This paper describes the Soldercube module design in detail, reports on experiments in a lattice configuration, explores non-lattice applications of the system, and discusses the effects of utilising volume manufacturing processes in module production.
> All Soldercubes design files are released as open source hardware.

As stated in the abstract on the second paper, the hardware and software design files for the Soldercube modules are available under an open source license.
This remains true today but you need to know where to look because the official project website was unceremoniously deleted when my grad school lab at Cornell closed down.
Here are the Github repos:

- [`soldercubes`](https://github.com/jonemo/soldercubes) contains the hardware designs in Solidworks format
- [`soldercubes-controller`](https://github.com/jonemo/soldercubes-controller) contains the embedded C code for the Atmel controllers inside each module
- [`soldercubes-electricimp`](https://github.com/jonemo/soldercubes-electricimp) contains the code written during a small tangent where I used the [electric imp](https://www.electricimp.com) IoT platform to make my robots “cloud-controllable”.

![](images/soldercubes-motor-partially-assembled.jpg)
