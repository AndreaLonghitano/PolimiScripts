// ==UserScript==
// @id              End Session
// @name            End Session
// @version         0.1
// @author          Andrea Longhitano <andrealonghitano@mail.polimi.it>
// @description     Click automatically the button to login in Polimi Account
// @domain          aunicalogin.polimi.it
// @match           https://aunicalogin.polimi.it/aunicalogin/aunicalogin/controller/SessioneTerminata*
// @grant           GM.getValue
// @grant           GM.setValue
// @updateVersion   1
// @priority        9001
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;

(function() {
    $(document).ready(function () {
         var right_button=$(".Link").get(0).click();
    });
})();