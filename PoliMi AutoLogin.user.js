// ==UserScript==
// @id              PoliMiAutoLogin
// @name            PoliMi AutoLogin
// @version         0.1
// @author          Andrea Longhitano <andrealonghitano@mail.polimi.it>
// @description     Click automatically the button to login in Polimi Account
// @domain          aunicalogin.polimi.it
// @match           http://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp*
// @match           https://aunicalogin.polimi.it/aunicalogin/aunicalogin.jsp*
// @grant           GM.getValue
// @grant           GM.setValue
// @updateVersion   1
// @priority        9001
// @require         https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==

var $ = window.jQuery;





(function() {
    $(document).ready(function () {
        var login = $("input#login");
        var passwd = $("input#password");
        login.val('******');
        passwd.val('*******');
        var submit=$("button[name='evn_conferma'][type='submit']");
        submit.click();
    });
})();