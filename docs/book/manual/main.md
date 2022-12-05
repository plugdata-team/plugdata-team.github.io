

Pd Manual index


# Pd Manual


This is the Manual for Pd, a patchable environment for audio
analysis, synthesis, and processing,
with a rich set of multimedia capabilities. The latest version of this page
can be found at:
[http://msp.ucsd.edu/software.html](http://msp.ucsd.edu/software.html)  .

1.   [introduction](x1.htm)

1.   [guide to the documentation](x1.htm#s1)
2.   [other resources](x1.htm#s2)


3.   [theory of operation](x2.htm)

1.   [overview](x2.htm#s1)

1.   [main window, canvases, and printout](x2.htm#s1.1)
2.   [object boxes](x2.htm#s1.2)
3.   [message and GUI boxes](x2.htm#s1.3)
4.   [patches and files](x2.htm#s1.4)

5.   [how to edit patches](x2.htm#s2)

1.   [edit and run mode](x2.htm#s2.1)
2.   [creating boxes](x2.htm#s2.2)
3.   [the selection](x2.htm#s2.3)
4.   [deleting, cutting, and pasting](x2.htm#s2.4)
5.   [changing the text](x2.htm#s2.5)
6.   [connecting and disconnecting boxes](x2.htm#s2.6)
7.   [properties and help](x2.htm#s2.7)

8.   [messages](x2.htm#s3)

1.   [anatomy of a message](x2.htm#s3.1)
2.   [depth first message passing](x2.htm#s3.2)
3.   [hot and cold inlets and right to left outlet order](x2.htm#s3.3)
4.   [message boxes](x2.htm#s3.4)

5.   [audio signals](x2.htm#s4)

1.   [sample rate and format](x2.htm#s4.1)
2.   [tilde objects and audio connections](x2.htm#s4.2)
3.   [converting to and from messages](x2.htm#s4.3)
4.   [switching and blocking](x2.htm#s4.4)
5.   [nonlocal signal connections](x2.htm#s4.5)

6.   [scheduling](x2.htm#s5)

1.   [audio and messages](x2.htm#s5.1)
2.   [computation load](x2.htm#s5.2)
3.   [determinism](x2.htm#s5.3)

4.   [semantics](x2.htm#s6)

1.   [creation of objects](x2.htm#s6.1)
2.   [persistence of data](x2.htm#s6.2)
3.   [message passing](x2.htm#s6.3)
4.   [inlets and lists](x2.htm#s6.4)
5.   [dollar signs](x2.htm#s6.5)

6.   [subpatches](x2.htm#s7)

1.   [abstractions](x2.htm#s7.1)
2.   [graph-on-parent subpatches](x2.htm#s7.2)

3.   [numeric arrays](x2.htm#s8)
4.   [data structures](x2.htm#s9)

1.   [traversal](x2.htm#s9.1)
2.   [accessing and changing data](x2.htm#s9.2)
3.   [editing](x2.htm#s9.3)
4.   [limitations](x2.htm#s9.4)


5.   [getting Pd to run](x3.htm)

1.   [audio and MIDI](x3.htm#s1.0)
2.   [installing Pd in Microsoft Windows](x3.htm#s1.1)
3.   [installing Pd in Linux](x3.htm#s1.2)
4.   [installing Pd in MacOS X](x3.htm#s1.3)
5.   [preferences and startup options](x3.htm#s4)
6.   [how Pd searches for files](x3.htm#s5)


7.   [externals](x4.htm)


1.  [external objects & libraries](x4.htm#s1)

1.   [what are: vanilla objects, internals & externals?](x4.htm#s1.1)
2.   [what are the types of external objects?](x4.htm#s1.2)

1.   [compiled objects:](x4.htm#s1.2.1)
2.   [abstractions:](x4.htm#s1.2.2)

3.   [what are external libraries?](x4.htm#s1.3)
4.   [what are the types of external libraries?](x4.htm#s1.4)


5.   [installing external objects and libraries](x4.htm#s2)

1.   [where to include the externals?](x4.htm#s2.1)
2.   [how to download externals from Pd vanilla?](x4.htm#s2.2)


3.   [loading externals](x4.htm#s3)

1.   [load using the [declare] object](x4.htm#s3.1) [declare]

1.   [[declare -path]](x4.htm#s3.1.1) [declare -path]
2.   [[declare -lib]](x4.htm#s3.1.2) [declare -lib]

3.   [load via path and startup](x4.htm#s3.2)

1.   [user added path](x4.htm#s3.2.1)
2.   [startup](x4.htm#s3.2.2)

3.   [load using slash declarations](x4.htm#s3.3)

4.   [how externs are loaded](x4.htm#s4)

5.   [current status](x5.htm)

1.   [release notes](x5.htm#s1)
2.   [known bugs](x5.htm#s2)
3.   [differences from Max/MSP](x5.htm#s3)


4.   [installing from source](x6.htm)

1.   [requirements](x6.htm#s6.1)
2.   [autotools build (recommended)](x6.htm#s6.2) (recommended)
3.   [Linux & BSD](x6.htm#s6.3)
4.   [macOS](x6.htm#s6.4)

1.  [macOS resources](x6-a.htm)


2.   [Windows](x6.htm#s6.5)

1.  [Windows resources](x6-b.htm)

2.  [Windows ASIO support](x6-b.htm#s6.5.2)


3.   [double precision](x6.htm#s6.6)
4.   [other flags](x6.htm#s6.7)
5.   [cross-compilation for Windows on Linux](x6.htm#s6.8)
6.   [makefile build](x6.htm#s6.9)
7.   [reporting bugs](x6.htm#s6.10)
