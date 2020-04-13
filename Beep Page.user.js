// ==UserScript==
// @id              Beep Login
// @name            Beep Page
// @version         0.1
// @author          Andrea Longhitano <andrealonghitano@mail.polimi.it>
// @description     Click automatically the button to login in Polimi Account
// @domain          aunicalogin.polimi.it
// @match           https://beep.metid.polimi.it/
// @grant           GM.getValue
// @grant           GM.setValue
// @updateVersion   1
// @priority        9001
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;

(function() {
    $(document).ready(function () {
         var right_button=$(".login").get(0).click();
    });
})();