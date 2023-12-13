# Introduction

Welcome to the **plugdata** documentation.

## Overview

**plugdata** is a plugin wrapper designed for Miller Puckette's Pure Data (Pd), featuring an enhanced graphical user interface (GUI) created using JUCE, headed by Timothy Schoen. this project is still a work in progress, and may still have some bugs. By default, **plugdata** comes with the cyclone and ELSE collections of externals and abstractions. Additionally, pd-lua is included as a scripting extension for the development of custom Pd objects in Lua. The primary objective is to offer a more user-friendly patching experience that seamlessly integrates with various Digital Audio Workstation (DAW) programs. **plugdata** also provides a stand-alone executable version that can be used as an alternative to the Pd program.

**plugdata** also integrates with the [hvcc](https://wasted-audio.github.io/hvcc/docs/01.introduction.html#what-is-heavy) compiler to allow generation of optimised C++ code from Pd patches. This C++ code can be compiled by **plugdata** and either flashed to the Electro-Smith Daisy platform, or turned into an audio plugin (based on the DPF framework). See the "Compiling Patches" chapter for more information about that.

## Note on Documentation

This documentation is a work-in-progress, and we are still looking for more contributors. If you're interested: the source for the documentation is [here](https://github.com/plugdata-team/plugdata-team.github.io/tree/main/docs). If you want to help out but are not sure where to start, you can [e-mail me](mailto:timschoen123@gmail.com) or [join our Discord server](https://discord.gg/5zu6vKEErj).

## Note on Development

As an evolving project, **plugdata** may still contain some bugs. Your feedback is important in refining and enhancing the user experience. You can report bugs on our [GitHub page](https://github.com/**plugdata**-team/**plugdata**/issues).

## Project Goals

- **Bringing Patching into Every DAW:**
  - Seamless integration as a plugin for a diverse range of Digital Audio Workstations (DAWs)

- **Providing a Modern User Experience:**
  - Focus on creating a contemporary user interface, ensuring a smooth experience for both new and experienced users.

- **Cross-Platform Support:**
  - Ensure **plugdata**'s optimal performance across various operating systems, including Windows, macOS, Linux, Raspberry Pi, and the newly introduced app for iOS.

- **Vanilla Compatibility:**
  - Maintain robust compatibility with pure-data (pd-vanilla), allowing users to seamlessly transition their skills between the two environments.

## Project Values

- **Free and Open-Source:**
  - **plugdata** will consistently remain free and open-source, fostering a collaborative environment for development and usage.

- **Be Nice:**
  - We strive to uphold an inclusive community by discouraging and addressing any form of discrimination, such as homophobia, transphobia, racism, to create a welcoming space for all contributors and users.


