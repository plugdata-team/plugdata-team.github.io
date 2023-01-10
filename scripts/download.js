
function main() {

  let title = document.createElement("h2");
  title.innerHTML += "Download plugdata";
  title.style.cssText = "text-align: center; font-family: Inter; font-weight: 700; border-radius:0%; border:none; outline:none; font-size:48px; color: #333333; background-color:transparent; margin-top: 70px;";
  content.appendChild(title);
   
   let userAgent = navigator.appVersion;
   let osDetails = {
     name: 'Unknown OS',
     icon: 'fa-question-circle',
     link: 'https://github.com/plugdata-team/plugdata/releases/tag/v0.6.3',
     offset: 40
   };
   
   if (userAgent.includes('Macintosh')) {
     osDetails.name = 'macOS';
     osDetails.icon = 'fa-apple';
     osDetails.link = 'https://github.com/plugdata-team/plugdata/releases/download/v0.6.3/PlugData-MacOS-Universal.zip';
     osDetails.offset = 0;
    }
   
   if (userAgent.includes('Windows')) {
     osDetails.name = 'Windows';
     osDetails.icon = 'fa-windows';
     osDetails.link = 'https://github.com/plugdata-team/plugdata/releases/download/v0.6.3/PlugData-Win64.zip';
     osDetails.offset = 5;
   }
   
   if (userAgent.includes('Linux')) {
     osDetails.name = 'Linux';
     osDetails.icon = 'fa-linux';
     osDetails.link = 'https://software.opensuse.org//download.html?project=home%3Aplugdata&package=plugdata';
     osDetails.offset = 0;
    }
   
   let button_css = "font-family: Inter; border-radius:5px; border:0px; font-size:16px; color:white; background-color:$bg_color; position:relative; top:50px; width:$width; height:45px; left: 50%; transform: translateX(-50%); text-align:center; padding: 2px";

   let download_button = document.createElement("div");
   download_button.style.cursor = "pointer";
   download_button.style.cssText = button_css.replace("$bg_color", "#3478F6").replace("$width", (225 + osDetails.offset) + "px");
   download_button.onclick = function() {
    location.href = osDetails.link;
  }

   apply_hover_effect(download_button);
   
   let icon = document.createElement("div");
   icon.className = "icon fa " + osDetails.icon;
   icon.style.cssText = "position:absolute; display: inline-block; left: 20px; height: 20px; top: 50%; transform: translateY(-44%);"
   download_button.appendChild(icon);

   let button_text = document.createElement("div");
   button_text.style.cssText = "position:absolute; display: inline-block; left: 45px; height: 20px; top: 50%; transform: translateY(-50%);"
   button_text.innerHTML = 'Download for ' + osDetails.name;

   download_button.appendChild(button_text);


   content.appendChild(download_button);

   let other = document.createElement("h1");
   other.innerHTML += "All downloads";
   other.style.cssText = "top: 50px; text-align: center; font-family: Inter; font-weight: 700; padding-top: 140px; padding-bottom: 10px; font-size:36px; color: #333333; background-color:transparent";
   content.appendChild(other);

   let stable = document.createElement("h1");
   stable.innerHTML += "Stable";
   stable.style.cssText = "top: 50px; text-align: center; font-family: Inter; font-weight: 500; padding-top: 20px; padding-bottom: 20px; font-size:24px; color: #333333; background-color:transparent";
   content.appendChild(stable);

  let stable_downloads = [["macOS Universal", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.3/PlugData-MacOS-Universal.zip", "Download"], ["Windows (x64)", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.3/PlugData-Win64.zip", "Download"], ["Windows (x86)", "https://github.com/plugdata-team/plugdata/releases/download/v0.6.3/PlugData-Win32.zip", "Download"], ["Linux Repositories", "https://software.opensuse.org//download.html?project=home%3Aplugdata&package=plugdata", "View"], ["Arch Linux AUR Repository", "https://aur.archlinux.org/packages/plugdata-bin", "View"], ["More Downloads", "https://github.com/plugdata-team/plugdata/releases/tag/v0.6.3", "View"]];

  let stable_container =  document.createElement("div");
  stable_container.style.margin = "15px";

  for (let i = 0; i < stable_downloads.length; i++)
  {
    let panel = document.createElement("div");
    panel.style.cssText = "font-family: Inter; position: relative; height: 40px; padding: 1px; margin-top: 1px; max-width: 700px; left: 50%; transform: translateX(-50%); outline: 1px solid #333333;";

    if(i == 0) {
      panel.style.cssText += "border-top-left-radius: 9px";
      panel.style.cssText += "border-top-right-radius: 9px";
    }
    if(i == stable_downloads.length - 1) {
      panel.style.cssText += "border-bottom-left-radius: 9px";
      panel.style.cssText += "border-bottom-right-radius: 9px";
    }

    panel.style.zIndex = "1";

    let name = document.createElement("a");
    name.style.cssText = "font-family: Inter; position: absolute; left: 5px; max-width: 300px; top: 50%; transform: translateY(-50%);";
    name.innerHTML = stable_downloads[i][0];

    let link = document.createElement("a");
    link.style.cssText = "font-family: Inter; position: absolute; right: 50px; max-width: 200px; top: 50%; transform: translateY(-50%);";
    link.href = stable_downloads[i][1];
    link.innerHTML = stable_downloads[i][2];


    panel.appendChild(name);
    panel.appendChild(link);

    stable_container.appendChild(panel);
  }

    content.appendChild(stable_container);


  let unstable = document.createElement("h1");
  unstable.innerHTML += "Nightly";
  unstable.style.cssText = "top: 50px; text-align: center; font-family: Inter; font-weight: 500; padding-top: 20px; padding-bottom: 20px; font-size:24px; color: #333333; background-color:transparent";
  content.appendChild(unstable);

  let unstable_downloads = [["macOS Universal", "https://glyphpress.com/plugdata/plugdata-macOS-Universal.pkg", "Download", true], ["Windows (x64)", "https://glyphpress.com/plugdata/plugdata-Win64.msi", "Download", true], ["Windows (x86)", "https://glyphpress.com/plugdata/plugdata-Win32.msi", "Download", true], ["Arch (x64)", "https://glyphpress.com/plugdata/plugdata-Arch-x64.tar.gz", "Download", true], ["Debian (x64)", "https://glyphpress.com/plugdata/plugdata-Debian-x64.tar.gz", "Download", true], ["Fedora 37 (x64)", "https://glyphpress.com/plugdata/plugdata-Fedora-37-x64.tar.gz", "Download", true], ["OpenSUSE (x64)", "https://glyphpress.com/plugdata/plugdata-OpenSUSE-x64.tar.gz", "Download", true], ["Ubuntu 20.04 (x64)", "https://glyphpress.com/plugdata/plugdata-Ubuntu-20.04-x64.tar.gz", "Download", true], ["Ubuntu 22.04 (x64)", "https://glyphpress.com/plugdata/plugdata-Ubuntu-22.04-x64.tar.gz", "Download", true], ["Arch Linux AUR Repository", "https://aur.archlinux.org/packages/plugdata-git", "View", false]];

  let unstable_container =  document.createElement("div");
  unstable_container.style.margin = "15px";

  let onHashUpdate = [];

  let latest_hash = "";
  const getLatestHash = async() => {
      let response = await fetch ("https://glyphpress.com/plugdata/latest.txt");
      const result = await response.text().then(( str ) => {
          return str;    // return the string after splitting it.
      });

      latest_hash = result.substring(0, result.indexOf('\t'))
      console.log(latest_hash);

      for(let i = 0; i < onHashUpdate.length; i++) {
          onHashUpdate[i]();
      }
  }

  getLatestHash();

  for (let i = 0; i < unstable_downloads.length; i++)
  {
      let panel = document.createElement("div");
      panel.style.cssText = "font-family: Inter; position: relative; height: 40px; padding: 1px; margin-top: 1px; max-width: 700px; left: 50%; transform: translateX(-50%); outline: 1px solid #333333;";

      if(i == 0) {
          panel.style.cssText += "border-top-left-radius: 9px";
          panel.style.cssText += "border-top-right-radius: 9px";
      }
      if(i == unstable_downloads.length - 1) {
          panel.style.cssText += "border-bottom-left-radius: 9px";
          panel.style.cssText += "border-bottom-right-radius: 9px";
      }

      panel.style.zIndex = "1";

      let name = document.createElement("a");
      name.style.cssText = "font-family: Inter; position: absolute; left: 5px; max-width: 300px; top: 50%; transform: translateY(-50%);";
      name.innerHTML = unstable_downloads[i][0];

      let link = document.createElement("a");
      link.style.cssText = "font-family: Inter; position: absolute; right: 50px; max-width: 200px; top: 50%; transform: translateY(-50%);";
      link.href = unstable_downloads[i][1];
      link.innerHTML = unstable_downloads[i][2];

      let has_info = unstable_downloads[i][3];

      const getDownloadInfo = async() => {
          let url = unstable_downloads[i][1] + ".txt";
          let response = await fetch (url);
          const result = await response.text().then(( str ) => {
              return str.split('\n');    // return the string after splitting it.
          });

          let date = document.createElement("a");
          date.style.cssText = "font-family: Inter; position: absolute; right: 200px; max-width: 400px; top: 50%; transform: translateY(-50%);";
          date.innerHTML = result[0];

          let hash = result[1];

          let color = hash == latest_hash ? "#006400" : "#FFA500";

          let commit_hash = document.createElement("a");
          commit_hash.style.cssText = `font-family: Inter; position: absolute; right: 400px; max-width: 200px; top: 50%; transform: translateY(-50%); color: ${ color }`;
          commit_hash.innerHTML = hash.substring(0, 7);

          onHashUpdate.push(() => {
              let color = hash == latest_hash ? "#006400" : "#FFA500";
              commit_hash.style.cssText = `font-family: Inter; position: absolute; right: 400px; max-width: 200px; top: 50%; transform: translateY(-50%); color: ${ color }`;
          });

          //TODO: dynamically hide date and hash if width is small!
          panel.appendChild(date);
          panel.appendChild(commit_hash);
      }

      if(has_info) {
          getDownloadInfo();
      }

      panel.appendChild(name);
      panel.appendChild(link);

      unstable_container.appendChild(panel);
  }

    content.appendChild(unstable_container);

  let spacing = document.createElement("DIV");
  spacing.style.cssText = "position: relative; height: 100px";
  content.appendChild(spacing);
}
 
 main();

 