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

        // (A3) CREATE TIME PICKER - SET, RESET
        ac.tset = document.getElementById("tset");
        ac.tset.addEventListener("click", ac.set);
        ac.treset = document.getElementById("treset");
        ac.treset.addEventListener("click", ac.reset);


        // (A4) GET ALARM SOUND
        ac.sound = document.getElementById("alarm-sound");

            // (A5) START THE CLOCK
        ac.alarm = null;
        setInterval(ac.tick, 1000);
    },

    createSel : function (max) {
        const selector = document.createElement("select");
        for (var i=0; i<=max; i++) {
          const opt = document.createElement("option");
          i = ac.padzero(i);
          opt.value = i;
          opt.innerHTML = i;
          selector.appendChild(opt);
        }
        return selector
      },