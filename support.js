function main() {
   
    let mainComponent = document.createElement("DIV");
    mainComponent.style.cssText = "height: 400px; left: 10%; width: 80%; top: 10px; color: #333333; position:relative; margin-top: 20px; margin-bottom: 20px;";
 

    let title = document.createElement("h2");
    title.innerHTML += "Need help?";
    title.style.cssText = "text-align: center; font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:36px; color: #333333; background-color:transparent;";
    mainComponent.appendChild(title);

    let bugs = document.createElement("a");
    bugs.innerHTML += "Report a bug on GitHub\n";
    bugs.style.cssText = "position: absolute; top: 90px; width: 100%; text-align: center; font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:24px; color: #333333; background-color:transparent";
    bugs.href = "https://github.com/plugdata-team/plugdata/issues";
    mainComponent.appendChild(bugs);

    let questions = document.createElement("a");
    questions.innerHTML += "Join our Discord";
    questions.style.cssText = "position: absolute; top: 160px; width: 100%; text-align: center; font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:24px; color: #333333; background-color:transparent";
    questions.href = "https://discord.gg/eT2RxdF9Nq";
    mainComponent.appendChild(questions);

    let contactInfo = document.createElement("a");
    contactInfo.innerHTML += "Email me";
    contactInfo.style.cssText = "position: absolute; top: 220px; width: 100%; text-align: center; font-family: InterSemiBold; border-radius:0%; border:none; outline:none; font-size:24px; color: #333333; background-color:transparent";
    contactInfo.href = "mailto:timschoen123@gmail.com";
    mainComponent.appendChild(contactInfo);

    content.appendChild(mainComponent);
}
 
 main();

 