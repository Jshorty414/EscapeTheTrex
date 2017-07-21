function changeScene() {
    var intro = document.getElementById("intro")
    intro.setAttribute("visible", "false")
    console.log("hit")
    var room = document.getElementById("room")
    room.setAttribute("visible", "true")
    var box=document.getElementById("box")
    box.setAttribute("sound","src: url(images/roar.mp3); autoplay: true")
}

function changeCamera1() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "-12.696 2.106 4.489")
}

function changeCamera2() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "-12.696 2.106 -10.915")
}

function changeCamera3() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "4.845 2.106 4.489")
}

function changeCamera4() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "4.845 2.106 -10.915")
}

function changeCamera5() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "-25.018 2.106 32.913")
}

function changeCamera6() {

    var camera = document.getElementById("camera")
    camera.setAttribute("position", "23.413 2.106 32.913")
}

function getKey() {
    var key = document.getElementById("key")
    key.setAttribute("visible", false)
    var doorright = document.getElementById("door-right")
    doorright.setAttribute("material", "src: #opendoor")
    doorright.setAttribute("openORclose", "open")
}

function tiltPaint() {
    
    var eight = document.getElementById("eight")
    var byeeight = eight.getAttribute("visible")

    var seven = document.getElementById("seven")
    var byeseven = seven.getAttribute("visible")

    var three = document.getElementById("three")
    var byethree = three.getAttribute("visible")

    var nine = document.getElementById("nine")
    var byenine = nine.getAttribute("visible")
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")

    if (byeeight == false && byeseven == false && byethree == false && byenine == false && hihint == true) {
    
    var painting = document.getElementById("paint")
    painting.setAttribute("rotation", "0 -90 15.355")
    painting.setAttribute("position", "31.839 1.932 -8.257")
    }
}



function win() {
    var doorright = document.getElementById("door-right")
    var openORclose = doorright.getAttribute("openORclose")
    
    if (openORclose == "open") {
    var room = document.getElementById("room")
    room.setAttribute("visible", "false")
    console.log("hit")
    var end = document.getElementById("end")
    end.setAttribute("visible", "true")
    }
}

// function light(){
//     var light=document.getElementById("pole1")
//     if (("light","type:point; color: #4b229e;")) {
//     } else {
//  ("light","none");   
//  }
// }


function lightOff() {
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")
    
    if(hihint == true) {
    
    var light1 = document.getElementById("light")

    light1.setAttribute("material", "src: #off")

    light1.setAttribute("onORoff", "off")

    var light = document.getElementById("pole1")
    light.setAttribute("light", "type:ambient; color: #4b229e;")

    var eight = document.getElementById("eight")
    eight.setAttribute("visible", true)

    var seven = document.getElementById("seven")
    seven.setAttribute("visible", true)

    var three = document.getElementById("three")
    three.setAttribute("visible", true)

    var nine = document.getElementById("nine")
    nine.setAttribute("visible", true)
    }

}

function byelaptop1() {
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")
    
    if (hihint == true) {
    
    var laptop1 = document.getElementById("laptopfull1")
    laptop1.setAttribute("visible", "false")

    var laptop1 = document.getElementById("laptopfull1")
    var laptop2 = document.getElementById("laptopfull2")
    var laptop3 = document.getElementById("laptopfull3")
    var laptop4 = document.getElementById("laptopfull4")

    var bye1 = laptop1.getAttribute("visible")
    var bye2 = laptop2.getAttribute("visible")
    var bye3 = laptop3.getAttribute("visible")
    var bye4 = laptop4.getAttribute("visible")

    if (bye1 == false && bye2 == false && bye3 == false && bye4 == false) {
        var hint = document.getElementById("hint")
        hint.setAttribute("visible", "true")
        hint.setAttribute("value", "One can say I'm a-rray...")
    }

    }
}

function byelaptop2() {
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")
    
    if (hihint == true) {
    
    var laptop2 = document.getElementById("laptopfull2")
    laptop2.setAttribute("visible", "false")

    var laptop1 = document.getElementById("laptopfull1")
    var laptop2 = document.getElementById("laptopfull2")
    var laptop3 = document.getElementById("laptopfull3")
    var laptop4 = document.getElementById("laptopfull4")

    var bye1 = laptop1.getAttribute("visible")
    var bye2 = laptop2.getAttribute("visible")
    var bye3 = laptop3.getAttribute("visible")
    var bye4 = laptop4.getAttribute("visible")

    if (bye1 == false && bye2 == false && bye3 == false && bye4 == false) {
        var hint = document.getElementById("hint")
        hint.setAttribute("visible", "true")
        hint.setAttribute("value", "One can say I'm a-rray...")
    }
   
    }
}

function byelaptop3() {
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")
    
    if (hihint == true) {
        
    var laptop3 = document.getElementById("laptopfull3")
    laptop3.setAttribute("visible", false)

    var laptop1 = document.getElementById("laptopfull1")
    var laptop2 = document.getElementById("laptopfull2")
    var laptop3 = document.getElementById("laptopfull3")
    var laptop4 = document.getElementById("laptopfull4")

    var bye1 = laptop1.getAttribute("visible")
    var bye2 = laptop2.getAttribute("visible")
    var bye3 = laptop3.getAttribute("visible")
    var bye4 = laptop4.getAttribute("visible")

    if (bye1 == false && bye2 == false && bye3 == false && bye4 == false) {
        var hint = document.getElementById("hint")
        hint.setAttribute("visible", "true")
        hint.setAttribute("value", "One can say I'm a-rray...")
    }
   
    }
}

function byelaptop4() {
    
    var hint = document.getElementById("hint")
    var hihint = hint.getAttribute("visible")
    
    if (hihint == true) {
        
    var laptop4 = document.getElementById("laptopfull4")
    laptop4.setAttribute("visible", false)

    var laptop1 = document.getElementById("laptopfull1")
    var laptop2 = document.getElementById("laptopfull2")
    var laptop3 = document.getElementById("laptopfull3")
    var laptop4 = document.getElementById("laptopfull4")

    var bye1 = laptop1.getAttribute("visible")
    var bye2 = laptop2.getAttribute("visible")
    var bye3 = laptop3.getAttribute("visible")
    var bye4 = laptop4.getAttribute("visible")

    if (bye1 == false && bye2 == false && bye3 == false && bye4 == false) {
        var hint = document.getElementById("hint")
        hint.setAttribute("visible", "true")
        hint.setAttribute("value", "One can say I'm a-rray...")
    }
    
    }
}


//these functions make the #s disappear. we need to place them so that they aren't being counteracted by the lightOff() function
function bye8() {
    var eight = document.getElementById("eight")
    eight.setAttribute("visible", false)
    var byeeight = eight.getAttribute("visible")

    var seven = document.getElementById("seven")
    var byeseven = seven.getAttribute("visible")

    var three = document.getElementById("three")
    var byethree = three.getAttribute("visible")

    var nine = document.getElementById("nine")
    var byenine = nine.getAttribute("visible")

    if (byeeight == false && byeseven == false && byethree == false && byenine == false) {

        var light1 = document.getElementById("light")

        light1.setAttribute("material", "src: #on")

        var light = document.getElementById("pole1")
        light.setAttribute("light", "null")

        var trexLight = document.createElement("a-box")
        document.getElementById("room").appendChild(trexLight)
        trexLight.setAttribute("height", "0.001")
        trexLight.setAttribute("width", "0.001")
        trexLight.setAttribute("depth", "0.001")
        trexLight.setAttribute("id", "trexLight")
        trexLight.setAttribute("position", "24.817 -1.590 -10.097")
        trexLight.setAttribute("rotation", "0 -90 0")
        trexLight.setAttribute("light", "type:spot; color:#ffffff; intensity:0.75;")

        var roomLight = document.createElement("a-box")
        document.getElementById("room").appendChild(roomLight)
        roomLight.setAttribute("height", "0.001")
        roomLight.setAttribute("width", "0.001")
        roomLight.setAttribute("depth", "0.001")
        roomLight.setAttribute("id", "roomLight")
        roomLight.setAttribute("position", "24.817 -1.590 -10.097")
        roomLight.setAttribute("light", "type:ambient; color:#ffffff; intensity:0.25;")
    }
}

function bye7() {
    var eight = document.getElementById("eight")
    var byeeight = eight.getAttribute("visible")

    var seven = document.getElementById("seven")
    seven.setAttribute("visible", false)
    var byeseven = seven.getAttribute("visible")

    var three = document.getElementById("three")
    var byethree = three.getAttribute("visible")

    var nine = document.getElementById("nine")
    var byenine = nine.getAttribute("visible")

    if (byeeight == false && byeseven == false && byethree == false && byenine == false) {

        var light1 = document.getElementById("light")

        light1.setAttribute("material", "src: #on")

        var light = document.getElementById("pole1")
        light.setAttribute("light", "null")

        var trexLight = document.createElement("a-box")
        document.getElementById("room").appendChild(trexLight)
        trexLight.setAttribute("height", "0.001")
        trexLight.setAttribute("width", "0.001")
        trexLight.setAttribute("depth", "0.001")
        trexLight.setAttribute("id", "trexLight")
        trexLight.setAttribute("position", "24.817 -1.590 -10.097")
        trexLight.setAttribute("rotation", "0 -90 0")
        trexLight.setAttribute("light", "type:spot; color:#ffffff; intensity:0.75;")

        var roomLight = document.createElement("a-box")
        document.getElementById("room").appendChild(roomLight)
        roomLight.setAttribute("height", "0.001")
        roomLight.setAttribute("width", "0.001")
        roomLight.setAttribute("depth", "0.001")
        roomLight.setAttribute("id", "roomLight")
        roomLight.setAttribute("position", "24.817 -1.590 -10.097")
        roomLight.setAttribute("light", "type:ambient; color:#ffffff; intensity:0.25;")
    }
}

function bye3() {
    var eight = document.getElementById("eight")

    var byeeight = eight.getAttribute("visible")

    var seven = document.getElementById("seven")
    var byeseven = seven.getAttribute("visible")

    var three = document.getElementById("three")
    three.setAttribute("visible", false)
    var byethree = three.getAttribute("visible")

    var nine = document.getElementById("nine")
    var byenine = nine.getAttribute("visible")

    if (byeeight == false && byeseven == false && byethree == false && byenine == false) {

        var light1 = document.getElementById("light")

        light1.setAttribute("material", "src: #on")

        var light = document.getElementById("pole1")
        light.setAttribute("light", "null")

        var trexLight = document.createElement("a-box")
        document.getElementById("room").appendChild(trexLight)
        trexLight.setAttribute("height", "0.001")
        trexLight.setAttribute("width", "0.001")
        trexLight.setAttribute("depth", "0.001")
        trexLight.setAttribute("id", "trexLight")
        trexLight.setAttribute("position", "24.817 -1.590 -10.097")
        trexLight.setAttribute("rotation", "0 -90 0")
        trexLight.setAttribute("light", "type:spot; color:#ffffff; intensity:0.75;")

        var roomLight = document.createElement("a-box")
        document.getElementById("room").appendChild(roomLight)
        roomLight.setAttribute("height", "0.001")
        roomLight.setAttribute("width", "0.001")
        roomLight.setAttribute("depth", "0.001")
        roomLight.setAttribute("id", "roomLight")
        roomLight.setAttribute("position", "24.817 -1.590 -10.097")
        roomLight.setAttribute("light", "type:ambient; color:#ffffff; intensity:0.25;")
    }
}

function bye9() {
    var eight = document.getElementById("eight")
    var byeeight = eight.getAttribute("visible")

    var seven = document.getElementById("seven")
    var byeseven = seven.getAttribute("visible")

    var three = document.getElementById("three")
    var byethree = three.getAttribute("visible")

    var nine = document.getElementById("nine")
    nine.setAttribute("visible", false)
    var byenine = nine.getAttribute("visible")

    if (byeeight == false && byeseven == false && byethree == false && byenine == false) {

        var light1 = document.getElementById("light")

        light1.setAttribute("material", "src: #on")

        var light = document.getElementById("pole1")
        light.setAttribute("light", "null")

        var trexLight = document.createElement("a-box")
        document.getElementById("room").appendChild(trexLight)
        trexLight.setAttribute("height", "0.001")
        trexLight.setAttribute("width", "0.001")
        trexLight.setAttribute("depth", "0.001")
        trexLight.setAttribute("id", "trexLight")
        trexLight.setAttribute("position", "24.817 -1.590 -10.097")
        trexLight.setAttribute("rotation", "0 -90 0")
        trexLight.setAttribute("light", "type:spot; color:#ffffff; intensity:0.75;")

        var roomLight = document.createElement("a-box")
        document.getElementById("room").appendChild(roomLight)
        roomLight.setAttribute("height", "0.001")
        roomLight.setAttribute("width", "0.001")
        roomLight.setAttribute("depth", "0.001")
        roomLight.setAttribute("id", "roomLight")
        roomLight.setAttribute("position", "24.817 -1.590 -10.097")
        roomLight.setAttribute("light", "type:ambient; color:#ffffff; intensity:0.25;")
    }
}

function hint1(){
    var hint1 = document.getElementById("hint")
    hint1.setAttribute("visible", "true")
}
