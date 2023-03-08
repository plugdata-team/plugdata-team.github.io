# FL Studio

## MIDI IN

1. Add **plugdata** to your channel rack. 
2. In **plugdata**, use one of the MIDI IN objects and route MIDI data from it *(see example)*.
3. Play notes on this channel using any usual method — keyboard, piano roll, etc.

![fl-midiin](images\pd-midiin.png)

## MIDI OUT

![fl-midiout](images\fl-midiout1.png)

1. Add **plugdata** to your Channel rack.  
2. In the plugin's window, press the **Detailed Settings** button *(a)*. Select the **VST Wrapper Settings** menu *(b)*. Specify the MIDI output port *(c)*.
3. Load a plugin that you want to receive MIDI from **plugdata** to another channel in your rack. Open its **VST Wrapper Settings** menu. Specify the MIDI input port that corresponds to the previously specified MIDI output port of **plugdata**.

![fl-midiout](images\fl-midiout2.png)

4. In **plugdata** plugin, use one of the objects that sends out MIDI data *(see examples)*.  

![pd-midi](images\pd-midiout.png)

## FX


![fl-fx](images\fl-fx.png)