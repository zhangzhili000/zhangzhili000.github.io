$(document).ready(function(){
	navBtnBinding();
	console.log(" \n",
		"##########################################\n",
		"###                                    ###\n",
		"###    e-mail:zhangzhili000@gmail.com  ###\n",
		"###                                    ###\n",
		"##########################################");
})
function navBtnBinding (){
	$("nav a").click(
		function(e){
			let _this = this;
			var tabID = e.currentTarget.id + "tab";
			let tabs = $(".showIndex");

			for(let i = 0;i<tabs.length;i++){
				$(tabs[i]).hide();
				if(tabs[i].id == tabID){
					$(tabs[i]).show();
				}
			}
			let navBtns = $("nav a");
			for(let i =0;i<navBtns.length;i++){
				if(navBtns[i].parentNode.className == "active" ){
					navBtns[i].parentNode.className = "";
					console.log(navBtns[i].parentNode.className);
				}
				
			}
			_this.parentNode.className = "active";
		}
	)
}

