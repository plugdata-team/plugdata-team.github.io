# Bitwig Studio

## MIDI IN

1. Add **plugdata** to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![bitwig-midiin](images\pd-midiin.png)

## MIDI OUT

![bitwig](images\bitwig-a1.png)

1. Add the **plugdata** plugin to an empty MIDI track.
2. In **plugdata** plug-in, use one of the objects that sends out MIDI data *(see examples)*
3. Add an instrument which will receive MIDI data on the same MIDI track, right after the **plugdata** plugin.

![pd-midi](images\pd-midiout.png)

## FX

1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![live-a3](images\pd-fx.png)
