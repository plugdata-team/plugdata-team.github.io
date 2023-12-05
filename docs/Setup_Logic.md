# Logic

## MIDI IN

1. Add **plugdata** to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![logic-midiin](images\pd-midiin.png)

## MIDI OUT

![logic-midiout](images\logic-midiout.png)

1. Add a new **Software Instrument** track. Load an instrument to which you want to send MIDI data *(a)*.
2. In the **Mixer** view (press *X* to toggle), add **plugdata-midi** Audio Unit plugin as a MIDI FX *(b)*. Alternatively, use the Inspector view (press *I* to toggle).
3. In **plugdata**, use one of the objects that sends out MIDI data *(see examples)*

![pd-midi](images\pd-midiout.png)

## FX

1. Add **plugdata-fx** as an Audio FX to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.

![logic-fx](images\pd-fx.png)
