---
title: "What is a PLC and how do I talk Python to it?"
date: 2019-11-27T18:09:38+05:30
draft: false
location: "Pycon 2019"
---

What is a PLC and how do I talk Python to it?
=============================================

Presented at **PyCon 2019**, May 2019, Cleveland, OH

[Abstract on conference website](https://2019.northbaypython.org/schedule/presentation/17/). This was a modified version of the [talk I gave at PyCon 2019](./pycon2019.html).

Video
-----

{{< youtube a0l29lgDf6k >}}

Slides
------

{{< speakerdeck 020036ea995347749699ce7e3a3fabe2 >}}

Code from the presentation
--------------------------

[This Github repo](https://github.com/jonemo/pycon2019-plc-demo) contains the PLC projects and Python code used during the presentation, as well as a few files that didn't make the cut due to the time limit.
 Note that the PLC projects can be edited with the free "Productivity Suite" software (Windows only) which you can download from Automation Direct [here](https://support.automationdirect.com/products/p3000.html).
 The README files in the repo should contain all the information needed to open the files.
 To actually run the code, you will need to have a physical PLC.

Please open an issue in the Github repo if you find an error or have a question!

Links from the presentation
---------------------------

### PyPI packages mentioned

* [pycomm](https://pypi.org/project/pycomm/)
* [python-snap7](https://pypi.org/project/python-snap7/)
* [chwiede.pyads](https://pypi.org/project/chwiede.pyads/)
* [bfabio.pyads](https://pypi.org/project/bfabio.pyads/)
* [adshli](https://pypi.org/project/adshli/)
* [pyads](https://pypi.org/project/pyads/)
* [clickplc](https://pypi.org/project/clickplc/)
* [df1](https://pypi.org/project/df1/)
* [pcom](https://pypi.org/project/pcom/)
* [fatek-fbs-lib](https://pypi.org/project/fatek-fbs-lib/)
* [pymodbus](https://pypi.org/project/pymodbus/)
* [pyModbusTCP](https://pypi.org/project/pyModbusTCP/)
* [MinimalModbus](https://pypi.org/project/MinimalModbus/)
* [cpppo](https://pypi.org/project/cpppo/)
* [devkid/profinet](https://github.com/devkid/profinet) (Github link, no PyPI project)
* [opcua](https://pypi.org/project/opcua/) (part of the [FreeOpcUa project](https://github.com/FreeOpcUa/))
* [asyncua](https://pypi.org/project/asyncua/) (part of the [FreeOpcUa project](https://github.com/FreeOpcUa/))
* [opcua-client](https://pypi.org/project/opcua-client/) (part of the [FreeOpcUa project](https://github.com/FreeOpcUa/))
* [opcua-webclient](https://pypi.org/project/opcua-webclient/)
* [pysoem](https://pypi.org/project/pysoem/)
* [pyprofibus](https://pypi.org/project/pyprofibus/)
* [canopen](https://pypi.org/project/canopen/)
* [j1939](https://pypi.org/project/j1939/)
* [OpenOPC](https://pypi.org/project/OpenOPC/)
* [rawsocketpy](https://pypi.org/project/rawsocketpy/)
* [dnet](https://pypi.org/project/dnet/)

### Other Assorted Links

* [This PDF by GE Automation](http://www.geautomation.com/system/files/files/opc_ua_-_the_information_backbone_wp_gft909_2.pdf) is a well-written introduction to what OPC-UA standardizes and how it came about to replace its Microsoft-only predecessor. See also the FreeOpcUa project above.
* [List of Automation Protocols](https://en.wikipedia.org/wiki/List_of_automation_protocols) on Wikipedia
* [List of PLC Manufacturers](https://en.wikipedia.org/wiki/List_of_PLC_manufacturers) on Wikipedia
* [My spreadsheet of PLC brands and products](http://jonemo.github.io/neubertify/2019/04/27/list-of-plc-brand-names-and-products/)
* [IEC 61131-3](https://en.wikipedia.org/wiki/IEC_61131-3) on Wikipedia
* [IEC 61131](https://en.wikipedia.org/wiki/IEC_61131) on Wikipedia
