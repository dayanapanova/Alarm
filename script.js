const currentTime = {
    // (A) INITIALIZE ALARM CLOCK
    init : function () {
      // (A1) GET THE CURRENT TIME - HOUR, MIN, SECONDS
      currentTime.chr = document.getElementById("chr");
      currentTime.cmin = document.getElementById("cmin");
      currentTime.csec = document.getElementById("csec");

    ac.thr = ac.createSel(23);
    document.getElementById("tpick-h").appendChild(ac.thr);
    ac.thm = ac.createSel(59);
    document.getElementById("tpick-m").appendChild(ac.thm);
    ac.ths = ac.createSel(59);
    document.getElementById("tpick-s").appendChild(ac.ths);
  
      
    }