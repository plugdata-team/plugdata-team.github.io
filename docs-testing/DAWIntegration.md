# DAWIntegration

## Ableton Live

#### MIDI IN

1. Add **plugdata** as an instrument to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![live-midiin](images\pd-midiin.png)

#### MIDI OUT

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

#### FX

1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![live-a3](images\pd-fx.png)

## Bitwig Studio

#### MIDI IN
1. Add **plugdata** to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![bitwig-midiin](images\pd-midiin.png)

#### MIDI OUT

![bitwig](images\bitwig-a1.png)

1. Add the **plugdata** plugin to an empty MIDI track. 
2. In **plugdata** plug-in, use one of the objects that sends out MIDI data *(see examples)*
3. Add an instrument which will receive MIDI data on the same MIDI track, right after the **plugdata** plugin.   

![pd-midi](images\pd-midiout.png)

#### FX
1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![live-a3](images\pd-fx.png)

## Reaper

#### MIDI IN
1. Add **plugdata** to an empty track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![reaper-midiin](images\pd-midiin.png)

#### MIDI OUT

![reaper-midiout](images\reaper-midiout.png)

1. Add **plugdata** to an empty track *(a)*. 
2. In **plugdata**, use one of the objects that sends out MIDI data *(see examples)*
3. Add another track. We'll call it RECEIVER *(b)*. Load an instrument that you want to receive MIDI from **plugdata** on this track.
4. Click and drag the Route button of the **plugdata** track *(c1)* to the Route button of the RECEIVER track *(c2)*.  

![pd-midi](images\pd-midiout.png)

#### FX
1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![reaper-fx](images\pd-fx.png)

## Ardour

#### MIDI IN

1. Add **plugdata** as an instrument to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![live-midiin](images\pd-midiin.png)

#### MIDI OUT

![ardour-midiout](images\ardour-midiout.png)

1. Add **plugdata** as an instrument to an empty MIDI track.
2. In the **Editor Mixer** (*Shift-E* to toggle) for the **plugdata** track, add an instrument which will receive MIDI data, right below the **plugdata** plugin *(a)*.
3. In **plugdata** plugin, use one of the objects that sends out MIDI data *(see examples)*.

![pd-midi](images\pd-midiout.png)

#### FX

1. Add **plugdata-fx** as an effect device to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![live-a3](images\pd-fx.png)

## FL Studio

#### MIDI IN

1. Add **plugdata** to your channel rack. 
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this channel using any usual method — keyboard, piano roll, etc.

![fl-midiin](images\pd-midiin.png)

#### MIDI OUT

![fl-midiout](images\fl-midiout1.png)

1. Add **plugdata** to your Channel rack.  
2. In the plugin's window, press the **Detailed Settings** button *(a)*. Select the **VST Wrapper Settings** menu *(b)*. Specify the MIDI output port *(c)*.
3. Load a plugin that you want to receive MIDI from **plugdata** to another channel in your rack. Open its **VST Wrapper Settings** menu. Specify the MIDI input port that corresponds to the previously specified MIDI output port of **plugdata** *(d)*.

![fl-midiout](images\fl-midiout2.png)

In **plugdata** plugin, use one of the objects that sends out MIDI data *(see examples)*.  

![pd-midi](images\pd-midiout.png)

#### FX

1. In the Mixer window, add **plugdata-fx** to an empty slot of any channel that you wish to affect.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.

![fl-fx](images\fl-fx.png)

## Studio One

#### MIDI IN
1. Add **plugdata** to an empty track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![one-midiin](images\pd-midiin.png)

#### MIDI OUT

![one-midiout](images\one-midiout.png)

1. Add **plugdata** to an empty instrument track.
2. In **plugdata** plug-in, use one of the objects that sends out MIDI data *(see examples)*
3. Create a second instrument track. Load an instrument that you want to receive MIDI from **plugdata** on this track. In the drop-down **Instrument input** menu select **plagdata** *(a)*.

![pd-midi](images\pd-midiout.png)

#### FX

1. In your project's **Mixer** panel (press F3 to toggle), add **plugdata-fx** as an insert effect to an audio or instrument track.  
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.  

![one-fx](images\one-fx.png)

## Logic

#### MIDI IN
1. Add **plugdata** to an empty MIDI track.
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this MIDI track using any usual method — keyboard, piano roll, etc.

![logic-midiin](images\pd-midiin.png)

#### MIDI OUT

![logic-midiout](images\logic-midiout.png)

1. Add a new **Software Instrument** track. Load an instrument to which you want to send MIDI data *(a)*.
2. In the **Mixer** view (press *X* to toggle), add **plugdata-midi** Audio Unit plugin as a MIDI FX *(b)*. Alternatively, use the Inspector view (press *I* to toggle).
3. In **plugdata**, use one of the objects that sends out MIDI data *(see examples)*

![pd-midi](images\pd-midiout.png)

#### FX
1. Add **plugdata-fx** as an Audio FX to an audio or MIDI track.
2. In **plugdata**, use [adc~] object to receive audio from your DAW *(see examples)*.

![logic-fx](images\pd-fx.png)

## Setting up MIDI CC messages in a DAW


## DAW parameter automation


## Tempo syncing a plugin's internal clock to its host DAW


