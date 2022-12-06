
function main() {
   
   let contributors = document.createElement("h2");
   contributors.innerHTML += "Contributors";
   contributors.style.cssText = "text-align: center; font-family: Inter; font-weight: 700; border-radius:0%; border:none; outline:none; font-size:36px; color: #333333; background-color:transparent; margin: 50px;";
   content.appendChild(contributors);

   let contributors_img = document.createElement("img");
   contributors_img.src = "https://contrib.rocks/image?repo=plugdata-team/plugdata";
   contributors_img.style.cssText = "height:auto; width:35%; position:relative; left:50%; transform: translateX(-50%); margin-bottom: 50px;";
   content.appendChild(contributors_img);

   let about_me = document.createElement("h1");
   about_me.innerHTML += "About me";
   about_me.style.cssText = "text-align: center; font-family: Inter; font-weight: 700; border-radius:0%; border:none; outline:none; font-size:36px; color: #333333; background-color:transparent; margin: 50px;";
   content.appendChild(about_me);

   let about_div = document.createElement("DIV");
   about_div.style.cssText = "position:relative; width: 700px; max-width: 80%; left:50%; transform: translateX(-50%);"

   let me_1 = document.createElement("p");
   me_1.innerHTML += "Hi, I'm Timothy Schoen, I started working on plugdata in November 2021, while studying Music Technology at HKU Utrecht. I'm interested in pure-data/Max, DSP, audio development, C/C++, JUCE and improving music perception for the hearing impaired. I started working on plugdata as a hobby project but it quickly grew into something bigger, largely thanks to the amazing Pd community. I'm especially aiming to make Pd more accessible and easier to learn, with the aim of creating an amazing tool for learning about creative programming.";
   me_1.style.cssText = "text-align: justify; font-family: Inter; border-radius:0%; border:none; outline:none; font-size:16px; color: #333333; background-color:transparent";
   about_div.appendChild(me_1);
   
   let me_2 = document.createElement("p");
   me_2.innerHTML += "Since plugdata is a fully free/open-source application available under the GPLv3 license, I am reliant on the generosity of my sponsors to spend more time on plugdata. If you like this project and think it's worth helping, consider <a href='https://github.com/sponsors/timothyschoen'>making a donation.</a>";
   me_2.style.cssText = "text-align: justify; font-family: Inter; border-radius:0%; border:none; outline:none; font-size:16px; color: #333333; background-color:transparent";
   about_div.appendChild(me_2);
   
   let me_3 = document.createElement("p");
   me_3.innerHTML += "If you have any questions about plugdata or anything else, feel free to <a href='mailto:timschoen123@gmail.com'>contact me</a>, I'll always reply!";
   me_3.style.cssText = "text-align: justify; font-family: Inter; border-radius:0%; border:none; outline:none; font-size:16px; color: #333333; background-color:transparent";
   about_div.appendChild(me_3);

   content.appendChild(about_div);

   

   let thanks = document.createElement("h1");
   thanks.innerHTML += "Special thanks:";
   thanks.style.cssText = "text-align: center; font-family: Inter; font-weight: 700;; border-radius:0%; border:none; outline:none; font-size:36px; color: #333333; background-color:transparent; margin: 50px;";
   content.appendChild(thanks);

   let thank_you = document.getElementById("thanks");
   thank_you.style.cssText = "position: relative; text-align: left; font-family: Inter; border-radius:0%; border:none; outline:none; font-size:16px; color: #333333; background-color:transparent; left:50%; transform: translateX(-50%); width: 700px; max-width: 80%;";
   content.appendChild(thank_you);

   let spacing = document.createElement("DIV");
   spacing.style.cssText = "position:relative; width: 100%; height: 40px;"
   content.appendChild(spacing);
}
 
 main();

 