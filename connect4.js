let arrayOfModalIds=[["encryption_modal", "encryption"],
["decryption_modal", "decryption"],
  ["ciphertext_modal", "ciphertext"],
  ["plaintext_modal", "plaintext"],
  ["cryptoalgorithms_modal", "cryptoalgorithms"],
  ["cryptokeys_modal", "cryptokeys"],
                     ["twofactorauth_modal", "twofactorauth"],
                     ["strongpasswords_modal", "strongpasswords"],
                     ["entropy_modal", "entropy"],
                     ["passmanager_modal", "passmanager"],
                     ["bruteforce_modal", "bruteforce"],
                     ["dictattack_modal", "dictattack"],
                     ["malware_modal", "malware"],
                     ["payload_modal", "payload"],
                     ["malware_virus_modal", "malware_virus"],
                     ["malware_rootkit_modal", "malware_rootkit"],
                     ["malware_worm_modal", "malware_worm"],
                     ["malware_trojan_modal", "malware_trojan"],
                     ["malware_dropper_modal", "malware_dropper"],
                     ["malware_ransomware_modal", "malware_ransomware"],
                     ["malware_botnet_modal", "malware_botnet"],
                     ["malware_adware_modal", "malware_adware"],
                     ["malware_spyware_modal", "malware_spyware"],
                  ["malware_SQLinject_modal", "malware_SQLinject"],
                  ["malware_skimmer_modal", "malware_skimmer"],
                     ["signature_modal", "signature"],
                     ["quarantine_modal", "quarantine"],
                     ["virushoax_modal", "virushoax"],
                     ["onlineintrusion_modal", "onlineintrusion"],
                     ["backdoor_modal", "backdoor"],
                     ["rat_modal", "rat"],
                     ["ransomware_modal", "ransomware"],
                     ["botnet_modal", "botnet"],
                     ["zerodayattack_modal", "zerodayattack"],
                     ["firewall_modal", "firewall"],
                     ["openports_modal", "openports"],
                     ["interceptionexploits_modal", "interceptionexploits"],
                     ["spyware_modal", "spyware"],
                     ["adware_modal", "adware"],
                     ["keyloggers_modal", "keyloggers"],
                     ["mitm_modal", "mitm"],
                     ["eviltwin_modal", "eviltwin"],
                     ["addressspoofing_modal", "addressspoofing"],
                     ["digicerthack_modal", "digicerthack"],
                     ["imsi_modal", "imsi"],
                     ["socialengineering_modal", "socialengineering"],
                     ["spam_modal", "spam"],
                     ["emailscam_modal", "emailscam"],
                     ["advancefeefraud_modal", "advancefeefraud"],
                     ["phishing_modal", "phishing"],
                     ["spearphishing_modal", "spearphishing"],
                     ["pharming_modal", "pharming"],
                     ["rogueantivirus_modal", "rogueantivirus"],
                     ["pup_modal", "pup"],
                     ["pua_modal", "pua"],
                     ["year2016modal", "year2016btn"],
                     ["year2017modal", "year2017btn"],
                     ["year2018modal", "year2018btn"],
                     ["year2019modal", "year2019btn"],
                     ["year2020modal", "year2020btn"],
                     ["year2021modal", "year2021btn"],
                     ["year2022modal", "year2022btn"]
                    ];
      arrayOfModalIds.forEach (setupModal);
      var currentOpenModal;
      
      function setupModal(idPair) {     
          //alert("setting up modal for " + idPair[0] + " and " + idPair[1]);
      let btn = idPair[1];
      let modal = idPair[0];      
          // Get the <span> element that closes the modal
      //var span = document.getElementsByClassName("close")[0];
      
      let btnId = `#${btn}`;
      //alert(btnId);
      //alert(idPair[1]);
      let btnObj = document.querySelector(btnId);
      
      let modalId = `#${modal}`;
      let modalObj = document.querySelector(modalId);
      var span = modalObj.getElementsByClassName("close")[0];
      // When the user clicks the button, open the modal 
      btnObj.onclick = function() {
         // alert("setting click hander for " + modal + " and " + btn);
        modalObj.style.display = "block";
        //alert("setting currentObj to " + modalObj.id)
        currentOpenModal = modalObj;
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modalObj.style.display = "none";
       // currentOpenModal = null;
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
          //alert("event target id is " + event.target.id);
          //alert("check on current open modal : " + currentOpenModal + " with id of " + currentOpenModal.id);
        if (event.target == currentOpenModal) {
          currentOpenModal.style.display = "none";
        }
      }
      }