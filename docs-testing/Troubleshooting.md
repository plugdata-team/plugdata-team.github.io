# Troubleshooting


## Keyboard input in DAW not working

Some DAWs may need to be told to send keyboard input to the plugin window instead of the host application. This is true especially when using plugdata with [Ardour](https://ardour.org/) or [REAPER](https://www.reaper.fm/) on the Mac.

- In Ardour, click on the keyboard icon in the upper right corner of the plugin window:

    ![Ardour](images/ardour-keyboard.png)

- In REAPER, enable the "Send all keyboard input to plug-in" option in the FX menu of the plugin window:

    ![REAPER](images/reaper-keyboard.png)

Try this if your keyboard input in the plugin window doesn't appear to work. With those options, plugdata's usual keyboard shortcuts should all work normally, and you should be able to edit object names, properties, parameter names etc. without any problems.

## Sound not working

