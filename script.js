const currentTime = {
    // (A) INITIALIZE ALARM CLOCK
    init : function () {
      // (A1) GET THE CURRENT TIME - HOUR, MIN, SECONDS
      currentTime.chr = document.getElementById("chr");
      currentTime.cmin = document.getElementById("cmin");
      currentTime.csec = document.getElementById("csec");
  
      // (A2) CREATE TIME PICKER - HR, MIN, SEC
      currentTime.thr = currentTime.createSel(23);
      document.getElementById("tpick-h").appendChild(currentTime.thr);
      currentTime.thm = currentTime.createSel(59);
      document.getElementById("tpick-m").appendChild(currentTime.thm);
      currentTime.ths = currentTime.createSel(59);
      document.getElementById("tpick-s").appendChild(currentTime.ths);
  
      // (A3) CREATE TIME PICKER - SET, RESET
      currentTime.tset = document.getElementById("tset");
      currentTime.tset.addEventListener("click", currentTime.set);
      currentTime.treset = document.getElementById("treset");
      currentTime.treset.addEventListener("click", currentTime.reset);
  
      // (A4) GET ALARM SOUND
      currentTime.sound = document.getElementById("alarm-sound");
  
      // (A5) START THE CLOCK
      currentTime.alarm = null;
      setInterval(currentTime.tick, 1000);
    },