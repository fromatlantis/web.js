'use strict';
define(function(require,exports,module){
	var View=require('./View');
	var TemplateFromUrl=require('./TemplateFromUrl');
	var slimscroll=require('./plugins/slimscroll/jquery.slimscroll.min.js');
	
	function MenuView(){
		_render.call(this);
		_init.call(this);
		_resizeable.call(this);
		_scroll.call(this);
	}

	function _init(){
		var z = "icon-angle-down",
        y = "icon-angle-left";
        $("li:has(ul)", "#sidebar-content ul").each(function() {
            if ($(this).hasClass("current") || $(this).hasClass("open-default")) {
                $(">a", this).append("<i class='arrow " + z + "'></i>")
            } else {
                $(">a", this).append("<i class='arrow " + y + "'></i>")
            }
        });
        if ($("#sidebar").hasClass("sidebar-fixed")) {
            $("#sidebar-content").append('<div class="fill-nav-space"></div>')
        }
        $("#sidebar-content ul > li > a").on("click",
        function(C) {
            if ($(this).next().hasClass("sub-menu") == false) {
                return
            }
            if ($(window).width() > 767) {
                var B = $(this).parent().parent();
                B.children("li.open").children("a").children("i.arrow").removeClass(z).addClass(y);
                B.children("li.open").children(".sub-menu").slideUp(200);
                B.children("li.open-default").children(".sub-menu").slideUp(200);
                B.children("li.open").removeClass("open").removeClass("open-default")
            }
            var A = $(this).next();
            if (A.is(":visible")) {
                $("i.arrow", $(this)).removeClass(z).addClass(y);
                $(this).parent().removeClass("open");
                A.slideUp(200,
                function() {
                    $(this).parent().removeClass("open-fixed").removeClass("open-default");
                    //q()
                })
            } else {
                $("i.arrow", $(this)).removeClass(y).addClass(z);
                $(this).parent().addClass("open");
                A.slideDown(200,
                function() {
                    //q()
                })
            }
            C.preventDefault()
        });
	}
	function _resizeable(){
		$("#divider.resizeable").mousedown(function(B) {
            B.preventDefault();
            var A = $("#divider").width();
            $(document).mousemove(function(D) {
                var C = D.pageX + A;
                if (C <= 300 && C >= (A * 2 - 3)) {
                    if (C >= 240 && C <= 260) {
                        $("#sidebar").css("width", 250);
                        $("#sidebar-content").css("width", 250);
                        $("#content").css("margin-left", 250);
                        $("#divider").css("margin-left", 250)
                    } else {
                        $("#sidebar").css("width", C);
                        $("#sidebar-content").css("width", C);
                        $("#content").css("margin-left", C);
                        $("#divider").css("margin-left", C)
                    }
                }
            })
        });
        $(document).mouseup(function(A) {
            $(document).unbind("mousemove")
        })
	}
	function _scroll(){
		var x = /android.*chrom(e|ium)/.test(navigator.userAgent.toLowerCase());
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && x == false) {
            $("#sidebar").css("overflow-y", "auto")
        } else {
            if ($("#sidebar").hasClass("sidebar-fixed") || $(window).width() <= 767) {
                if (x && !$("#sidebar").hasClass("sidebar-fixed-responsive")) {
                    var y = 100;
                    $("#sidebar").attr("style", "position: absolute !important;");
                    if ($(window).width() > 979) {
                        $("#sidebar").css("margin-top", "-52px")
                    }
                    if ($(window).width() <= 767) {
                        $("#sidebar").css("margin-left", "-250px").css("margin-top", "-52px")
                    }
                } else {
                    var y = 7;
                    $("#sidebar-content").slimscroll({
                        height: "100%",
                        wheelStep: y
                    })
                }
            }
        }
	}
	function _render(){
		var _menuTpl=new TemplateFromUrl({
			tmplName:'asideMenu',
			tmplData:{}
		})
		var menuView=new View({
			content:_menuTpl.getHtml(),
			holder:'#sidebar'
		})
		menuView.render();
	}
	module.exports=MenuView;
})