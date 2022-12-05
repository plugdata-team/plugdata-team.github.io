let panels = [
   ["Many, many objects", "./images/else.png", 60, 500, "#FFFFFF", "#333333", "plugdata comes with the ELSE and cyclone libraries installed by default. ELSE is a large set of general-purpose objects that offer more high-level abstraction on top of pure-data. Cyclone is included to make Max users feel at home when they use plugdata."],
   ["Export patches to audio plugins, embedded platforms or raw code", "./images/hvcc.png", 40, 500, "#FFFFFF", "#333333", "By integrating the Heavy/hvcc project, you can convert patches into C/C++ code, all from plugdata. It ships with a compiler toolchain to make exporting plugins, or building patches for embedded platform a piece of cake."],
   ["Dark mode and theming capabilities", "./images/darkmode.png", 50, 500, "#333333", "#FFFFFF", "plugdata is fully themable, and has a light and dark mode option by default. Late night hackathons will now be less straining for the eyes"],
   ["Vanilla compatibility", "./images/vanilla.png", 40, 500, "#FFFFFF", "#333333", "plugdata is directly based on pd-vanilla, with minimal modifications to the original source code. This ensures very high compatibility between pure-data patches and plugdata patches."],
 ];

let panel_css = "font-family: Inter; border:0px; outline:none; color:$txt_color; background-color:$bg_color; position:relative; top:100px; left:-10px; margin-top: 150px; margin-bottom: 150px; margin-right: 20px; margin-left: 0px; height:$height; width:100%; zIndex:1;";

function main() {
   let alignment = true;

   let mainComponent = document.createElement("DIV");
   mainComponent.style.cssText = "height: 1000px; left: 10%; width: 80%; top: 10px; color: #333333; position:relative; margin-top: 20px; margin-bottom: 20px;";

   let logo = document.createElement("img");
   logo.src = "./images/logo.png";
   logo.style.cssText = "height:auto; width:8%; left:10%; position:relative; left: 50%; transform: translateX(-50%);";
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
   png.style.cssText = "height:auto; width:80%; left:10%; position:relative;";
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

   let alignment_str = alignment ? "left" : "right";

   let image_width_pct = img_scale + "%";
   let txt_width_pct = (92 - img_scale) + "%";

   let tile_css =
   "-webkit-transition-delay: .2s;" +
   "-o-transition-delay: .2s;" +
   "transition-delay: .2s;" +
   "-webkit-transition: .3s;" +
   "-o-transition: .3s;" +
   "transition: .3s;" +
   "opacity: 0;";

   let panel = document.createElement("DIV");
   panel.style.cssText = tile_css + panel_css.replace("$bg_color", bg_color).replace("$txt_color", txt_color).replace("$height", panel_height + "px");
   panel.style.zIndex = "1"; 
   panel.className += " tile";

   let png = document.createElement("img");
   png.src = img;
   png.style.cssText = "height:auto; width:$width; top: 50%; transform: translateY(-50%); $align:10px; position:absolute;".replace("$width", image_width_pct).replace("$align",  alignment ? "right" : "left");
   panel.appendChild(png);

   let textPanel = document.createElement("DIV");
   textPanel.style.cssText = "top: 50%; transform: translateY(-50%); $align: 50px; height: $height; width: $width; color: $txt_color; position:absolute; margin-top: 20px; margin-bottom: 20px;".replace("$width", txt_width_pct).replace("$txt_color", txt_color).replace("$align",  alignment ? "left" : "right").replace("$height", (panel_height / 2) + "px");

   let title = document.createElement("h2");
   title.innerHTML += name;
   title.style.cssText = "font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:26px; color:$text_colour; background-color:transparent;".replace("$text_colour", txt_color).replace("$width", txt_width_pct).replace("$align", alignment_str);
   textPanel.appendChild(title);

   let description = document.createElement("p");
   description.innerHTML += desc;
   description.style.cssText = "line-height: 1.65; font-family: Inter; text-align: justify; border-radius:0%; border:none; outline:none; font-size:16px; color:$text_colour; background-color:transparent;".replace("$text_colour", txt_color).replace("$width", txt_width_pct).replace("$align", alignment_str).replace("$top", (title.clientTop + title.clientHeight + 20) + "%");
   textPanel.append(description);
   
   panel.appendChild(textPanel);

   content.appendChild(panel);

   alignment = !alignment;

   };
}


 window.addEventListener('scroll', fadeIn ); 
 function fadeIn() {
   
   let elementsArray = document.querySelectorAll(".tile");

   //let fadein_css =  "-webkit-transform: translateY(0px) rotate(0deg) translateZ(0);" +
   //"transform: translateY(0px) rotate(0deg) translateZ(0); ";

     for (var i = 0; i < elementsArray.length; i++) {
         var elem = elementsArray[i];

         if (elem.getBoundingClientRect().top + 100 > 0 && elem.getBoundingClientRect().bottom - 100 <= (window.innerHeight || document.documentElement.clientHeight)) {
            elem.style.opacity = 1;
        } else {
            elem.style.opacity = 0.45;
        }

     }
 }
 fadeIn();
 
 main();

 