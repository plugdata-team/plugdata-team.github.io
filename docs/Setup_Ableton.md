# Ableton Live


## MIDI IN

1. Add **plugdata** as an instrument to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![live-midiin](images\pd-midiin.png)

## MIDI OUT

In Live, routing MIDI data out of **plugdata** is a bit more complicated than in other DAWs. 

![live-midiout](images\live-midiout.png)

1. Create a MIDI track with the VST3 (not AUV3) version of **plugdata** on it *(a)*.
2. Create an empty MIDI track. We'll call it **MIDI BRIDGE** *(b)*. In the **MIDI From** drop-down menu, select the **plugdata** MIDI track *(c)*. Select **plugdata** in the drop-down menu right bellow it. Switch **Monitor** to **In** mode (d). 
3. Create a third MIDI track. We'll cal it RECEIVER *(e)*. Load an instrument that you want to receive MIDI from **plugdata** on this track.
4. In the **MIDI To** drop-down menu of the **MIDI BRIDGE** track, select the **RECEIVER** track as the destination *(f)*.
5. *(optional)* In the **MIDI From** drop-down menu of the RECEIVER track select the **MIDI BRIDGE** track *(g)*.
6. Arm the RECEIVER track *(h)*. 
7. In **plugdata** plugin, use one of the objects that sends out MIDI data *(see examples)*.

![pd-midi](images\pd-midiout.png)

## FX

1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![live-a3](images\pd-fx.png)