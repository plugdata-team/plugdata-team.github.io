
let meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.head.appendChild(meta);

let content = document.createElement("div");
content.style.cssText = "border-radius:0%; border:none; outline:none; background-color:#FFFFFF;";
content.style.position = "absolute";
content.style.left = "0%";
content.style.width = "100%";
content.style.height = document.body.clientHeight;
content.style.zIndex = "100";

document.body.appendChild(content);
document.body.style.background = "#FFFFFF"; 


function apply_hover_effect(element) {
   element.onmouseover = function() {
      var old_opacity = element.style.opacity;
      element.style.opacity = 0.7;
  
      element.onmouseout = function () {
         element.style.opacity = old_opacity;
      };
  };
}

function create_topbar() {

   let buttons = [];
   let labels = [["Home", "./index.html"], ["About", "./about.html"], ["Support", "./support.html"], ["Download", "./download.html"], ["Documentation", "./documentation.html"]];
 
       //let viewport = document.createElement("viewport");
       
       //viewport.style.width = "100%";
       //content.appendChild(viewport);

       let topbar = document.createElement("div");
       topbar.style.cssText = "line-height: 48px; white-space: nowrap; display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; color:#333333; background-color: #FFFFFF";
       topbar.style.height = "48px";
       topbar.style.left = "0px";
       topbar.style.minWidth = "100%";
       topbar.style.zIndex = "100";
       topbar.style.opacity = "1";
       topbar.style.overflowX = "auto";
       topbar.style.overflowY = "hidden";
       content.appendChild(topbar);

 
       let left = document.createElement("div");
       left.style.flex = "0 0 auto";
       left.style.display = "inline-block";
       left.style.margin = "0";
       left.style.padding = "0";
       left.style.minWidth = "540px";
       left.style.boxSizing = "inherit";
       left.style.maxHeight = "48px";
       topbar.appendChild(left);


      let logo_container = document.createElement("li");
      logo_container.style.height = "48px";
      logo_container.style.display = "inline-block";

      let logo = document.createElement("img");
      logo.src = "./images/logo.png";
      logo.style.maxHeight = "28px";
      //logo.style.width = "28px";
      logo.style.top = "5px";
      logo.style.left = "10px"
      logo.style.position = "relative";
      //logo.style.zIndex = "100";
      //logo.style.display = "inline-block";
         logo.onclick = function(){
            location.href = "./index.html";
         };

      logo_container.appendChild(logo);
      left.appendChild(logo_container);

       let right = document.createElement("div");
       right.style.display = "inline-block";
       right.style.margin = "0";
       right.style.padding = "0";
       right.style.minWidth = "380px";
       right.style.boxSizing = "inherit";
       right.style.listStyle = "none";
       right.style.maxHeight = "48px";
       topbar.appendChild(right);
   

      let github = document.createElement("div");
      github.style.cssText = "display: inline-block; cursor: pointer;";
      github.onclick = function() {
         location.href = "https://github.com/plugdata-team/plugdata";
       }

      let github_logo = document.createElement("img");
      github_logo.src = "./images/github.png";
      github_logo.style.cssText = "display: inline-block; height:28px; width:auto; top: -11px; position:relative; margin-right: 8px;";
      github.appendChild(github_logo);

      let github_text = document.createElement("p");
      github_text.innerHTML = "View on GitHub";
      github_text.style.cssText = "display: inline-block; font-family: Inter; top: -19px; height:28px; width:150px; position:relative; color: #222222; font-size:16px;";


      github.appendChild(github_text);

      apply_hover_effect(github);
      right.appendChild(github);

      let discord = document.createElement("div");
      discord.style.cssText = "display: inline-block; cursor: pointer";
      discord.onclick = function() {
         location.href = "https://discord.gg/eT2RxdF9Nq";
       }

       
      let discord_logo = document.createElement("img");
      discord_logo.src = "./images/discord.png";
      discord_logo.style.cssText = "display: inline-block; top: -11px; height:28px; width:auto; margin-right: 8px; position:relative;";
      
      discord.appendChild(discord_logo);

      let discord_text = document.createElement("p");
      discord_text.innerHTML = "Join our Discord";
      discord_text.style.cssText = "display: inline-block; top: -19px; font-family: Inter; height:16px; width:150px; position:relative; color: #222222; font-size:16px;";
      discord.appendChild(discord_text);

      apply_hover_effect(discord);
      right.appendChild(discord);


       for (let i = 0; i < labels.length; i++) {
         buttons[i] = document.createElement("span");
         buttons[i].innerHTML = labels[i][0];
         buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:16px; color:#333333; background-color:transparent; position:relative; top:5px; left: 30px; padding: 0 14px;"
         buttons[i].className = "button";
         buttons[i].style.height = "40px";
         buttons[i].style.top = "-3px";
         buttons[i].style.width = "85px";
         buttons[i].style.fontFamily = "Inter";
         buttons[i].style.zIndex = "100";
         buttons[i].style.cursor = "pointer";
         buttons[i].onclick = function() {
           location.href = labels[i][1];
         }

         apply_hover_effect(buttons[i]);

         left.appendChild(buttons[i])
      }
 }

 create_topbar();

 