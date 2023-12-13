# Getting Started

## Installing plugdata

**Windows:**
- Obtain the installer from the latest [official release](https://github.com/plugdata-team/plugdata/tags)

**MacOS:**
- *Option 1:* Download the installer from the latest [official release](https://github.com/plugdata-team/plugdata/tags)
- *Option 2:* Install the [homebrew cask](https://formulae.brew.sh/cask/plugdata). Note: This may not be maintained and could be outdated.

**Linux:**
- *Option 1:* [OBS Repository/Packages](https://software.opensuse.org//download.html?project=home%3Aplugdata&package=plugdata)
  - The repository contains packages for plugdata, plugdata-vst3, and plugdata-lv2. Standalone version is included if you get a package without the repo.
  - Plugin versions:
    - Deb/Ubuntu: [plugdata-vst3](https://software.opensuse.org/package/plugdata-vst3) and [plugdata-lv2](https://software.opensuse.org/package/plugdata-lv2)
    - RPM based distros: [vst3-plugdata](https://software.opensuse.org/package/vst3-plugdata) and [lv2-plugdata](https://software.opensuse.org/package/lv2-plugdata)
- *Option 2:* Arch User Repository (Arch only).
  - [plugdata-bin](https://aur.archlinux.org/packages/plugdata-bin) for the latest stable version.
  - [plugdata-git](https://aur.archlinux.org/packages/plugdata-git) for the latest experimental build.
- *Option 3:* Download binaries from the latest [official release](https://github.com/plugdata-team/plugdata/tags)

You can also access recent experimental builds on our [website](https://plugdata.org/download.html).

## Building from Source

*Note: You likely don't need to compile from source unless you're contributing to plugdata's development.*

```
git clone --recursive https://github.com/plugdata-team/plugdata.git
cd plugdata
mkdir build && cd build
cmake ..  # Specify the generator using -G"Unix Makefiles", -G"XCode" or -G"Visual Studio 16 2019" -A x64
cmake --build .
```