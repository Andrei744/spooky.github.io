var particles = Particles.init({
    selector: ".background",
    color: ["#FF0099", "#00FFFF"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 0,
        options: {
          color: ["#FFF", "#FF0099", "#00FFFF"],
          maxParticles: 60,
          connectParticles: false,
        },
      },
    ],
  });
  
  Number.prototype.pad = function (n) {
    for (var r = this.toString(); r.length < n; r = 0 + r);
    return r;
  };

  // set up text to print, each item in array is new line
  var aText = new Array(
    "There is ALL functions of PRIVATE cheat", 
    "-AimBot",
    "-Wall Hack",
    "-Wall Shoot",
    "-Anti Granades",
    "-Infinity Jump",
    "-EXP Hack",
    "-Money Hack",
    "-TriggerBot",
    "-Damage Hack",
    "-Respawn Hack",
    "-Chams Bypass",
    "-Instant Bomb",
    "-Add Score Hack",
    "-Noclip",
    "From: Nework X Nevxrlose"
  );
  
  var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-:;[]{}\|/()*!@";
  var iSpeed = 5;
  var iIndex = 0;
  var iArrLength = aText[0].length;
  var iScrollAt = 20;
  var iTextPos = 0;
  var sContents = '';
  var iRow;
  var destination = document.getElementById("typedtext");
  
  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
  
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
  
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
  
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(randomLetters, iSpeed);
    }
  }
  
  function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
  }
  
  function randomLetters() {
    var oldText = destination.innerHTML;
    destination.innerHTML = oldText.slice(0, -1) + getRandomLetter() + "_";
  
    setTimeout(typewriter, iSpeed);
  }
  
  typewriter();
