let panels = [
   ["Many, many objects", "./images/else.png", 60, 500, "#FFFFFF", "#333333", "plugdata comes with the ELSE and cyclone libraries installed by default. ELSE is a large set of general-purpose objects that offer more high-level abstraction on top of pure-data. Cyclone is included to make Max users feel at home when they use plugdata. Find out more about ELSE <a href='https://github.com/porres/pd-else/'> here. </a>"],
   ["Export patches to audio plugins, embedded platforms or raw code", "./images/hvcc.png", 40, 500, "#FFFFFF", "#333333", "By integrating the Heavy/hvcc project, you can convert patches into C/C++ code, all from plugdata. It ships with a compiler toolchain to make exporting plugins, or building patches for embedded platforms a piece of cake. You can find out more about Heavy <a href='https://github.com/Wasted-Audio/hvcc'> here. </a>"],
   ["Dark mode and theming capabilities", "./images/darkmode.png", 50, 550, "#333333", "#FFFFFF", "plugdata is fully themable, and has a light and dark mode option by default. plugdata is built with customisability and accessibility in mind."],
   ["Vanilla compatibility", "./images/vanilla.png", 40, 500, "#FFFFFF", "#333333", "plugdata is directly based on pd-vanilla, with minimal modifications to the original source code. This ensures very high compatibility between pure-data and plugdata patches."],
 ];

let small_screen = false;
let zoom_listeners = [];
window.onzoom = function(e) {
   for(let i = 0; i < zoom_listeners.length; i++)
   {
      zoom_listeners[i]();
   }
}

let oldresize = window.onresize;
window.onresize = function(e) {
   let event = window.event || e;
   if(typeof(oldresize) === 'function' && !oldresize.call(window, event)) {
      return false;
   }
   if(typeof(window.onzoom) === 'function') {
      return window.onzoom.call(window, event);
   }
}

let panel_css = "font-family: Inter; border:0px; outline:none; color:$txt_color; background-color:$bg_color; position:relative; top:100px; left:-10px; margin-top: 150px; margin-bottom: 150px; margin-right: 20px; margin-left: 0px; height:$height; width: 100%; zIndex:1;";

function main() {
   let alignment = true;

   let mainComponent = document.createElement("DIV");
   mainComponent.style.cssText = "height: 1000px; left: 10%; width: 80%; top: 10px; color: #333333; position:relative; margin-top: 20px; margin-bottom: 20px;";

   let logo = document.createElement("img");
   logo.src = "./images/logo.png";
   logo.style.cssText = "height:auto; width:82px; left:10%; position:relative; left: 50%; transform: translateX(-50%);";
   mainComponent.appendChild(logo);

   let title = document.createElement("h2");
   title.innerHTML += "plugdata";
   title.style.cssText = "text-align: center; font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:36px; color: #333333; background-color:transparent";
   mainComponent.appendChild(title);

   let subtitle = document.createElement("h1");
   subtitle.innerHTML += "A visual programming environment for audio experimentation, prototyping and education";
   subtitle.style.cssText = "font-family: InterThin; text-align: center; border-radius:0%; border:none; outline:none; font-size:25px; color: #333333; background-color:transparent;"
   mainComponent.append(subtitle);

   let png = document.createElement("img");
   png.src = "./images/app.png";
   png.style.cssText = "display: block; max-height:80%; max-width:80%; left:10%; position:relative;";
   mainComponent.appendChild(png);

   let description = document.createElement("h1");
   description.innerHTML +=  "plugdata is a free/open-source visual programming environment based on pure-data. Available for a wide range of operating systems, and can be used as a standalone app, or as a VST3, LV2 or AU plugin.";
   description.style.cssText = "font-family: InterThin; text-align: center; border-radius:0%; border:none; outline:none; font-size:18px; color: #333333; margin-top: 50px; background-color:transparent;";
   mainComponent.append(description);

   let button_css = "font-family: Inter; border-radius:5px; border:0px; font-size:16px; color:white; background-color:$bg_color; position:relative; top:50px; width:150px; height:40px; left: 50%; transform: translateX(-50%); text-align:center;";
   let download_button = document.createElement("BUTTON");
   download_button.style.cursor = "pointer";
   download_button.innerHTML += "Get plugdata";
   download_button.style.cssText = button_css.replace("$bg_color", "#3478F6");
   download_button.onclick = function() {
      location.href = "./download.html";
    }

   apply_hover_effect(download_button);

   mainComponent.append(download_button);
   
   content.appendChild(mainComponent);

for (let i = 0; i < panels.length; i++) {

   let name = panels[i][0];
   let img = panels[i][1];
   let img_scale = panels[i][2];
   let panel_height = panels[i][3];
   let bg_color = panels[i][4];
   let txt_color = panels[i][5];
   let desc = panels[i][6];

   let alignment_str = i%2 ? "right" : "left";


   let image_width_pct = img_scale + "%";
   let txt_width_pct = (92 - img_scale) + "%";

   let tile_css =
   "-webkit-transition-delay: .25s;" +
   "-o-transition-delay: .25s;" +
   "transition-delay: .25s;" +
   "-webkit-transition: .4s;" +
   "-o-transition: .4s;" +
   "transition: .4s;" +
   "opacity: 0;";

   let panel = document.createElement("div");
   panel.style.cssText = tile_css + panel_css.replace("$bg_color", bg_color).replace("$txt_color", txt_color).replace("$height", panel_height + "px");
   panel.style.zIndex = "1"; 
   panel.className += " tile";

   let panel_content = document.createElement("div");
   panel_content.style.cssText = "position:relative; display: flex; flex-direction: row; max-width: 1300px; left:50%; transform: translateX(-50%);";

   let png = document.createElement("img");
   png.src = img;
   png.style.cssText = "order: $align; max-width:60%; max-height:30%;".replace("$align",  i%2 ? "0" : "1");
   panel_content.appendChild(png);

   let textPanel = document.createElement("DIV");
   textPanel.style.cssText = "order: $align; color: $txt_color; margin: 40px; padding-top: 40px;".replace("$width", txt_width_pct).replace("$txt_color", txt_color).replace("$align",  i%2 ? "1" : "0").replace("$height", (panel_height / 2) + "px");

   let title = document.createElement("h2");
   title.innerHTML += name;
   title.style.cssText = "font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:26px; color:$text_colour; background-color:transparent;".replace("$text_colour", txt_color).replace("$width", txt_width_pct).replace("$align", alignment_str);
   textPanel.appendChild(title);

   let description = document.createElement("p");
   description.innerHTML += desc;
   description.style.cssText = "line-height: 1.65; font-family: Inter; text-align: justify; border-radius:0%; border:none; outline:none; font-size:16px; color:$text_colour; background-color:transparent;".replace("$text_colour", txt_color).replace("$width", txt_width_pct).replace("$align", alignment_str).replace("$top", (title.clientTop + title.clientHeight + 20) + "%");
   textPanel.append(description);
   
   panel_content.appendChild(textPanel);
   panel.appendChild(panel_content);
   content.appendChild(panel);

   zoom_listeners.push(function(){
      if(document.documentElement.clientWidth < 1100) {
         small_screen = true;
         panel_content.style.cssText = "position:relative; max-width: 700px; left:50%; transform: translateX(-50%);";
         png.style.cssText = "position: relative; max-width:90%; max-height:400px; left:50%; transform: translateX(-50%);".replace("$align", i%2 ? "-1" : "-1");
         textPanel.style.cssText = "position: relative; color: $txt_color; margin: 5px; padding-top: 0px; left:50%; transform: translateX(-50%);".replace("$width", txt_width_pct).replace("$txt_color", txt_color).replace("$align",  alignment ? "0" : "1").replace("$height", (panel_height / 2) + "px");
         mainComponent.style.cssText = "max-width: 700px; height: 700px; width: 80%; top: 10px; color: #333333; position:relative; margin-top: 20px; margin-bottom: 0px; left:50%; transform: translateX(-50%);";
      }
      else {
         small_screen = false;
         panel_content.style.cssText = "position:relative; display: flex; flex-direction: row; max-width: 1300px; left:50%; transform: translateX(-50%);";
         png.style.cssText = "order: $align; max-width:60%; max-height:100%;".replace("$align",  i%2 ? "0" : "1");
         textPanel.style.cssText = "order: $align; color: $txt_color; margin: 40px; padding-top: 40px;".replace("$width", txt_width_pct).replace("$txt_color", txt_color).replace("$align",  alignment ? "0" : "1").replace("$height", (panel_height / 2) + "px");
         mainComponent.style.cssText = "height: 1000px; width: 80%; top: 10px; color: #333333; position:relative; margin-top: 20px; margin-bottom: 20px; left:50%; transform: translateX(-50%);";
      }
   });      
   };

   for (let i = 0; i < zoom_listeners.length; i++) {
      zoom_listeners[i]();
   }
}

 window.addEventListener('scroll', fadeIn ); 
 function fadeIn() {
   
   let elementsArray = document.querySelectorAll(".tile");

     for (let i = 0; i < elementsArray.length; i++) {
      let elem = elementsArray[i];

         if (elem.getBoundingClientRect().top + 150 > 0 && elem.getBoundingClientRect().bottom - 150 <= (window.innerHeight || document.documentElement.clientHeight)) {
            elem.style.opacity = 1;
        } else {
            elem.style.opacity = small_screen ? 1.0 : 0.4;
        }

     }
 }
 fadeIn();
 
 main();

 