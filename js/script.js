// navbar scripting starts from here 
        /* When the user clicks on the button,toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            }
        }
        };
        document.querySelector(".wrapper-3").addEventListener("click", function(){
        this.classList.toggle("active-3");
        });
// navrbar scripting ends here
// counting starts here

// counting ends here

(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        // portfolio-tab-activation
        $(".portfolio-tab ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });
        // mixitup-activation
        var containerEl = document.querySelector('.portfolio-items');
        var mixer = mixitup(containerEl);
    });
})(jQuery);