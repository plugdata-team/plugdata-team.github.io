# Summary
<<<<<<< Updated upstream

***

* [F.A.Q.](FAQ.md)
* Setup
  * DAW Integration
    * [1. Ableton](Setup_Ableton.md)
    * [2. Bitwig Studio](Setup_Bitwig.md)
    * [3. Reaper](Setup_Reaper.md)
    * [4. Ardour](Setup_Ardour.md)
    * [5. FL Studio](Setup_FL.md)
    * [6. Studio One](Setup_One.md)
    * [7. Logic](Setup_Logic.md)

***

* [Pd Manual](PdM.md)
  * [Theory of operation](PdM_TheoryOfOperation.md)
  * [Externals](PdM_Externals.md)

***

* [Compiled Mode](Compiled_Mode.md)

***

* [Resources](Resources.md)
=======
*** 
* [Introduction](Introduction.md)
  * [About plugdata](Introduction_AboutPlugdata.md)
  * [Documentation guide](Introduction_DocumentationGuide.md)

* [Getting started]
  * [Installing plugdata](GettingStarted_InstallingPlugdata.md)
  * [Differences between running plugdata standalone and as a plugin](GettingStarted_RunStandaloneVsPlugin.md)
  * [Setting up plugdata](GettingStarted_SettingUpPlugdata.md)
    * [Configuring audio and MIDI devices](GettingStarted_ConfiguringAudioMIDIDevices.md)
    * [Testing audio and MIDI IO](GettingStarted_TestingAudioMIDIIO.md)
    * [Installing external libraries](GettingStarted_InstallingExternalLibraries.md)

* [Creating your first patch]
  * [Browsing and adding modules and objects](CreatingFirstPatch_BrowsingAddingModulesObjects.md)
  * [Creating connections](CreatingFirstPatch_CreatingConnections.md)
  * [Adding effects](CreatingFirstPatch_AddingEffects.md)
  * [Finding the included examples](CreatingFirstPatch_FindingIncludedExamples.md)
  * [Next steps](CreatingFirstPatch_NextSteps.md)

* [Troubleshooting]
  * [Finding console error messages](Troubleshooting_FindingConsoleErrorMessages.md)
  * [Fixing clicks and pops](Troubleshooting_FixingClicksAndPops.md)
  * [Finding help](Troubleshooting_FindingHelp.md)

* [Learning the plugdata UI]
  * [Interface Overview](LearningPlugdataUI_Interface Overview.md)
  * [Three line menu](LearningPlugdataUI_ThreeLineMenu.md)
    * [Primary / secondary themes and zoom options](LearningPlugdataUI_ThreeLineMenu_ThemesZoomOptions.md)
    * [File options](LearningPlugdataUI_ThreeLineMenu_FileOptions.md)
    * [Workspaces](LearningPlugdataUI_ThreeLineMenu_Workspaces.md)
  * [Settings window](LearningPlugdataUI_SettingsWindow.md)
    * [Themes](LearningPlugdataUI_SettingsWindow_Themes.md)
    * [Paths](LearningPlugdataUI_SettingsWindow_Paths.md)
    * [Keyboard shortcuts](LearningPlugdataUI_SettingsWindow_KeyboardShortcuts.md)
    * [Advanced options](LearningPlugdataUI_SettingsWindow_AdvancedOptions.md)
  * [Popup menu](LearningPlugdataUI_PopupMenu.md)
    * [Selecting and cut / copy / paste / delete](LearningPlugdataUI_PopupMenu_SelectingCutCopyPasteDelete.md)
    * [Object reference](LearningPlugdataUI_PopupMenu_ObjectReference.md)
    * [Object help](LearningPlugdataUI_PopupMenu_ObjectHelp.md)
  * [Properties inspector](LearningPlugdataUI_PropertiesInspector.md)
  * [Adjusting tabs](LearningPlugdataUI_AdjustingTabs.md)
  * [Palette sidebar](LearningPlugdataUI_PaletteSidebar.md)
  * [Panel sidebar](LearningPlugdataUI_PanelSidebar.md)
  * [Console panel](LearningPlugdataUI_ConsolePanel.md)
    * [Documentation panel](LearningPlugdataUI_ConsolePanel_DocumentationPanel.md)
    * [Automation panel](LearningPlugdataUI_ConsolePanel_AutomationPanel.md)
    * [Search panel](LearningPlugdataUI_ConsolePanel_SearchPanel.md)
  * [Display modes](LearningPlugdataUI_DisplayModes.md)
    * [Edit mode](LearningPlugdataUI_DisplayModes_EditMode.md)
    * [Run mode](LearningPlugdataUI_DisplayModes_RunMode.md)
    * [Presentation mode](LearningPlugdataUI_DisplayModes_PresentationMode.md)
    * [Plugin mode](LearningPlugdataUI_DisplayModes_PluginMode.md)
    * [Compiled mode](LearningPlugdataUI_DisplayModes_CompiledMode.md)
  * [Display overlays](LearningPlugdataUI_DisplayOverlays.md)

* [Learning programming in plugdata and Pd]
  * [Audio and control signals](LearningProgramming_AudioControlSignals.md)
  * [Object properties and arguments](LearningProgramming_ObjectPropertiesArguments.md)
  * [Subpatches and abstractions](LearningProgramming_SubpatchesAbstractions.md)
  * [UI elements](LearningProgramming_UIElements.md)
  * [Graph on Parent](LearningProgramming_GraphOnParent.md)
  * [Hot and cold inlets](LearningProgramming_HotColdInlets.md)
  * [Datastructures: Floats, symbols, lists and bangs](LearningProgramming_Datastructures.md)
  * [Arrays, tables and graphs](LearningProgramming_ArraysTablesGraphs.md)
  * [Messages](LearningProgramming_Messages.md)
  * [Blocksizes](LearningProgramming_Blocksizes.md)
  * [Debugging tips](LearningProgramming_DebuggingTips.md)

* [DAW integration]
  * [Instrument and FX setup]
    * [Ableton Live](DAWIntegration_AbletonLive.md)
    * [Bitwig Studio](DAWIntegration_BitwigStudio.md)
    * [Reaper](DAWIntegration_Reaper.md)
    * [Ardour](DAWIntegration_Ardour.md)
    * [FL Studio](DAWIntegration_FLStudio.md)
    * [Studio One](DAWIntegration_StudioOne.md)
    * [Logic](DAWIntegration_Logic.md)
  * [Setting up MIDI CC messages between plugin and various DAWs](DAWIntegration_SettingUpMIDICC.md)
  * [DAW parameter automation](DAWIntegration_ParameterAutomationExample.md)
  * [Tempo syncing a plugin's internal clock to its host DAW](DAWIntegration_TempoSyncing.md)

* [Standalone MIDI communication and networking]
  * [MIDI communication examples for standalone](StandaloneMIDICommunication_Examples.md)
  * [Using Ableton Link](StandaloneMIDICommunication_AbletonLink.md)
  * [OSC and other networking options](StandaloneMIDICommunication_OSCNetworkingOptions.md)

* [Compiling Patches](CompilingPatches.md)

* [Resources](Resources.md)

* [Development](Development.md)
  * [Known issues](Development_KnownIssues.md)
  * [Reporting bugs and requesting new features](Development_BugReportingFeatureRequests.md)

* [Object reference](ObjectReference.md)
  * [GUI elements](ObjectReference_GUIElements.md)
  * [Objects](ObjectReference_Objects.md)
  * [Libraries](ObjectReference_Libraries.md)

* [Glossary of terms](Glossary.md)

* [Special thanks](SpecialThanks.md)
>>>>>>> Stashed changes
