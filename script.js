var toggleText = document.getElementById("toggleText");
var checkbox = document.getElementById("chk");
var label = document.getElementById("label");
var hovercolor = "hsl(0, 0%, 100%)";
var outcolor = "hsl(228, 34%, 66%)";

checkbox.addEventListener("click", activeToggle);
label.addEventListener("mouseover", hoverToggleText);
label.addEventListener("mouseout", outToggleText);

function activeToggle(){
  document.body.classList.toggle("light")
  if(document.body.classList.contains("light")){
    hovercolor = "hsl(230, 17%, 14%)";
    outcolor = "hsl(228, 12%, 44%)";
    hoverToggleText();
    outToggleText();
  }else{
    hovercolor = "hsl(0, 0%, 100%)";
    outcolor = "hsl(228, 34%, 66%)";
    hoverToggleText();
    outToggleText();
  }
}

function hoverToggleText(){
    toggleText.style.color = hovercolor
}

function outToggleText(){
    toggleText.style.color = outcolor
}
