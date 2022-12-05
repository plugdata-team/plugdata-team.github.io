
let content = document.createElement("DIV");
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
 
       let topbar = document.createElement("DIV");
       topbar.style.cssText = "color:#333333; background-color: #FFFFFF";
       topbar.style.height = "48px";
       topbar.style.left = "0px";
       topbar.style.width = "100%"
       topbar.style.zIndex = "100";
       topbar.style.opacity = "1";
       content.appendChild(topbar);
 
       let logo = document.createElement("img");
       logo.src = "./images/logo.png";
 
       logo.style.height = "28px";
       logo.style.width = "auto";
       logo.style.top = "1px";
       logo.style.left = "10px"
       logo.style.position = "absolute";
       logo.style.zIndex = "100";
          logo.onclick = function(){
             location.href = "./index.html";
          };
 
       topbar.appendChild(logo);

      let discord = document.createElement("div");
      discord.style.cssText = "cursor: pointer";
      discord.onclick = function() {
         location.href = "https://discord.gg/eT2RxdF9Nq";
       }

      let discord_logo = document.createElement("img");
      discord_logo.src = "./images/discord.png";
      discord_logo.style.cssText = "top: 1px; height:28px; width:auto; right:160px; position:absolute;";
      
      discord.appendChild(discord_logo);

      let discord_text = document.createElement("p");
      discord_text.innerHTML = "Join our Discord";
      discord_text.style.cssText = "top: -10px; font-family: Inter; height:16px; width:150px; right:0px; position:absolute; color: #222222;";
      discord.appendChild(discord_text);
   
      apply_hover_effect(discord);
      topbar.appendChild(discord);

      let github = document.createElement("div");
      github.style.cssText = "cursor: pointer";
      github.onclick = function() {
         location.href = "https://github.com/plugdata-team/plugdata";
       }

      let github_logo = document.createElement("img");
      github_logo.src = "./images/github.png";
      github_logo.style.cssText = "top: 1px; height:28px; width:auto; right:355px; position:absolute;";
      github.appendChild(github_logo);

      let github_text = document.createElement("p");
      github_text.innerHTML = "View on GitHub";
      github_text.style.cssText = "top: -10px; font-family: Inter; height:16px; width:150px; right:195px; position:absolute; color: #222222;";


      github.appendChild(github_text);

      apply_hover_effect(github);
      topbar.appendChild(github);


       for (let i = 0; i < labels.length; i++) {
         buttons[i] = document.createElement("span");
         buttons[i].innerHTML = labels[i][0];
         buttons[i].style.cssText = "border-radius:0%; border:none; outline:none; font-size:16px; color:#333333; background-color:transparent; position:relative; top:5px; left: 50px; padding: 0 14px;"
         buttons[i].className = "button";
         buttons[i].style.height = "40px";
         buttons[i].style.width = "85px";
         buttons[i].style.fontFamily = "Inter";
         buttons[i].style.zIndex = "100";
         buttons[i].style.cursor = "pointer";
         buttons[i].onclick = function() {
           location.href = labels[i][1];
         }

         apply_hover_effect(buttons[i]);

         topbar.appendChild(buttons[i])
      }
 }

 create_topbar();

 