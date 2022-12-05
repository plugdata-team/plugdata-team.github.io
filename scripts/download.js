
function main() {

  let title = document.createElement("h2");
  title.innerHTML += "Download plugdata";
  title.style.cssText = "text-align: center; font-family: Inter; font-weight: 700; border-radius:0%; border:none; outline:none; font-size:48px; color: #333333; background-color:transparent; margin-top: 70px;";
  content.appendChild(title);
   
   let userAgent = navigator.appVersion;
   let osDetails = {
     name: 'Unknown OS',
     icon: 'fa-question-circle',
     link: 'https://github.com/plugdata-team/plugdata/releases/tag/v0.6.2'
   };
   
   if (userAgent.includes('Macintosh')) {
     osDetails.name = 'macOS';
     osDetails.icon = 'fa-apple';
     osDetails.link = 'https://github.com/plugdata-team/plugdata/releases/download/v0.6.2/PlugData-MacOS-Universal.zip';
   }
   
   if (userAgent.includes('Windows')) {
     osDetails.name = 'Windows';
     osDetails.icon = 'fa-windows';
     osDetails.link = 'https://github.com/plugdata-team/plugdata/releases/download/v0.6.2/PlugData-Win64.zip';
   }
   
   if (userAgent.includes('Linux')) {
     osDetails.name = 'Linux';
     osDetails.icon = 'fa-linux';
     osDetails.link = 'https://software.opensuse.org//download.html?project=home%3Aplugdata&package=plugdata';
   }
   
   let button_css = "font-family: Inter; border-radius:5px; border:0px; font-size:16px; color:white; background-color:$bg_color; position:relative; top:50px; width:210px; height:50px; left: 50%; transform: translateX(-50%); text-align:center; padding: 2px";

   let download_button = document.createElement("BUTTON");
   download_button.style.cursor = "pointer";
   download_button.style.cssText = button_css.replace("$bg_color", "#3478F6");
   download_button.onclick = function() {
    location.href = osDetails.link;
  }

   apply_hover_effect(download_button);
   
   let iconHtml = '<i class="icon fa ' + osDetails.icon + '"></i>'
   download_button.innerHTML =  iconHtml + 'Download for ' + osDetails.name;

   content.appendChild(download_button);

   let other = document.createElement("h1");
   other.innerHTML += "All downloads";
   other.style.cssText = "top: 50px; text-align: center; font-family: Inter; font-weight: 700; padding-top: 160px; padding-bottom: 50px; font-size:36px; color: #333333; background-color:transparent";
   content.appendChild(other);

  let downloads = [["macOS Universal", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.2/PlugData-MacOS-Universal.zip", "Download"], ["Windows x64", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.2/PlugData-Win64.zip", "Download"], ["Windows x86", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.2/PlugData-Win32.zip", "Download"], ["Linux Repositories", "https://software.opensuse.org//download.html?project=home%3Aplugdata&package=plugdata", "View"], ["Arch Linux AUR Repositories (stable)", "https://aur.archlinux.org/packages/plugdata-bin", "View"], ["Arch Linux AUR Repositories (latest)", "https://aur.archlinux.org/packages/plugdata-git", "View"], ["More Downloads", "https://github.com/plugdata-team/plugdata/releases/tag/v0.6.2", "View"]];

  for (let i = 0; i < downloads.length; i++) 
  {
    let panel = document.createElement("DIV");
    panel.style.cssText = "font-family: Inter; position: relative; height: 40px; padding: 1px; margin-top: 1px; width: 600px; left: 50%; transform: translateX(-50%); outline: 1px solid #333333;";
    
    if(i == 0) {
      panel.style.cssText += "border-top-left-radius: 9px";
      panel.style.cssText += "border-top-right-radius: 9px";
    }
    if(i == downloads.length - 1) {
      panel.style.cssText += "border-bottom-left-radius: 9px";
      panel.style.cssText += "border-bottom-right-radius: 9px";
    }
    
    panel.style.zIndex = "1"; 

    let name = document.createElement("a");
    name.style.cssText = "font-family: Inter; position: absolute; left: 5px; width: 300px; top: 50%; transform: translateY(-50%);";
    name.innerHTML = downloads[i][0];

    let link = document.createElement("a");
    link.style.cssText = "font-family: Inter; position: absolute; right: 50px; width: 200px; top: 50%; transform: translateY(-50%);";
    link.href = downloads[i][1];
    link.innerHTML = downloads[i][2];

  
    panel.appendChild(name);
    panel.appendChild(link);

    content.appendChild(panel);

  }

  let spacing = document.createElement("DIV");
  spacing.style.cssText = "position: relative; height: 100px";
  content.appendChild(spacing);
}
 
 main();

 