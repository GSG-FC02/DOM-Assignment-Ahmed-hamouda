// start assignment one
function changeStyle () {
    let paragraph = document.querySelector("#text");
    paragraph.style.cssText = "font-family: cursive,Tahoma, sans-serif;font-size:25px;color:#FDE9CC;background-color:#4A4B7B"
}
// End assignment one

// start assignmemt two
    let link = document.querySelector('#wcc')
    let attributeNames  = link.getAttributeNames();
    function getAttributes(){
    for(let i = 0; i < attributeNames.length; i++)
    console.log(attributeNames [i] + " => " + link.getAttribute(attributeNames [i]));
    }
// End assignmemt two

// start assignmemt three

function volumeSphere (e){
    e.preventDefault()
    rad = document.getElementById("radius").value
    radius = Math.abs(rad);
    volume = ( (4/3) * Math.PI * Math.pow(radius, 3) ) . toFixed(2) ; 
    document.getElementById('volume').value = volume;
}
window.onload = document.getElementById('MyForm').onsubmit = volumeSphere;
// End assignmemt three

