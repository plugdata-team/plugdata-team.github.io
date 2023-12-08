# Studio One

## MIDI IN

1. Add **plugdata** to an empty track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![one-midiin](images\pd-midiin.png)

## MIDI OUT

![one-midiout](images\one-midiout.png)

1. Add **plugdata** to an empty instrument track.
2. In **plugdata** plug-in, use one of the objects that sends out MIDI data *(see examples)*
3. Create a second instrument track. Load an instrument that you want to receive MIDI from **plugdata** on this track. In the drop-down **Instrument input** menu select **plagdata** *(a)*.

![pd-midi](images\pd-midiout.png)

## FX

1. In your project's **Mixer** panel (press F3 to toggle), add **plugdata-fx** as an insert effect to an audio or instrument track.  
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![one-fx](images\one-fx.png)
