
function main() {

  let unstable_downloads = [["macOS Universal", "https://glyphpress.com/plugdata/plugdata-macOS-Universal.pkg", "Download", true], ["macOS Legacy", "https://glyphpress.com/plugdata/plugdata-macOS-Legacy.pkg", "Download", true], ["Windows (x64)", "https://glyphpress.com/plugdata/plugdata-Win64.msi", "Download", true], ["Windows (x86)", "https://glyphpress.com/plugdata/plugdata-Win32.msi", "Download", true], ["Arch (x64)", "https://glyphpress.com/plugdata/plugdata-Arch-x64.tar.gz", "Download", true], ["Debian (x64)", "https://glyphpress.com/plugdata/plugdata-Debian-x64.tar.gz", "Download", true], ["Fedora 37 (x64)", "https://glyphpress.com/plugdata/plugdata-Fedora-37-x64.tar.gz", "Download", true], ["Fedora 38 (x64)", "https://glyphpress.com/plugdata/plugdata-Fedora-38-x64.tar.gz", "Download", true], ["Ubuntu 20.04 (x64)", "https://glyphpress.com/plugdata/plugdata-Ubuntu-20.04-x64.tar.gz", "Download", true], ["Ubuntu 22.04 (x64)", "https://glyphpress.com/plugdata/plugdata-Ubuntu-22.04-x64.tar.gz", "Download", true], ["Arch Linux AUR Repository", "https://aur.archlinux.org/packages/plugdata-git", "View", false]];

  let unstable_container =  document.getElementById("nightly-div");
  unstable_container.style.margin = "15px";

  let onHashUpdate = [];

  let latest_hash = "";
  const getLatestHash = async() => {
        fetch(`https://api.github.com/repos/plugdata-team/plugdata/commits/develop`)
        .then(response => response.json())
        .then(data => {
        latest_hash = data.sha;
        console.log('Last Commit Hash:', latest_hash);
        for(let i = 0; i < onHashUpdate.length; i++) {
            onHashUpdate[i]();
        }
        }).catch(error => console.error('Error:', error));
  }

  const table = document.getElementById("nightly-table");

  for (let i = 0; i < unstable_downloads.length; i++)
  {
      const downloadRow = document.createElement("tr");

      let name = document.createElement("td");
      name.textContent = unstable_downloads[i][0];

      let link = document.createElement("td");
      let clickableLink = document.createElement("a");

      clickableLink.href = unstable_downloads[i][1];
      clickableLink.textContent = unstable_downloads[i][2];
      link.appendChild(clickableLink);

      let has_info = unstable_downloads[i][3];

      const dummy1 = document.createElement("td");
      const dummy2 = document.createElement("td");

      downloadRow.appendChild(name);
      downloadRow.appendChild(dummy1);
      downloadRow.appendChild(dummy2);
      downloadRow.appendChild(link);

      const getDownloadInfo = async() => {
          let url = unstable_downloads[i][1] + ".txt";
          console.log(url)
          let response = await fetch (url);
          const result = await response.text().then(( str ) => {
              return str.split('\n');    // return the string after splitting it.
          });

          // Create new cells and set their content
          const date = document.createElement("td");
          date.textContent = result[0];
          date.style.minWidth = "200px";

          const hash = result[1];
          let color = hash == latest_hash ? "#006400" : "#FFA500";

          const commit_hash = document.createElement("td");
          commit_hash.textContent = hash.substring(0, 7);
          commit_hash.style.cssText = `color: ${ color }`;
          commit_hash.href = "https://github.com/plugdata-team/plugdata/commits/" + commit_hash;

          onHashUpdate.push(() => {
              let color = hash == latest_hash ? "#006400" : "#FFA500";
              commit_hash.style.cssText = `color: ${ color }`;
              console.log(hash == latest_hash  ? "hash was equal" : "hash was not equal")
          });

          downloadRow.removeChild(name);
          downloadRow.removeChild(dummy1);
          downloadRow.removeChild(dummy2);
          downloadRow.removeChild(link);

          // Append the cells to the row
          downloadRow.appendChild(name);
          downloadRow.appendChild(date);
          downloadRow.appendChild(commit_hash);
          downloadRow.appendChild(link);
      }

      if(has_info) {
          getDownloadInfo();
      }

      // Append the row to the table
      table.appendChild(downloadRow);
  }

  getLatestHash();
}

 main();
