// $(function(){
// 	var dropdown = $("span.ev-dropdown");
// 	dropdown.each(function(){
// 		var dropObj = $(this),
// 			select = dropObj.find("select"),
// 			hideList;
// 		if(select.is(":disabled")){
// 			dropObj.addClass("ev-dropdown-disabled").data("disabled",true);
// 		}
// 		dropObj.on({
// 			mouseenter : function(){
// 				var this_ = $(this);
// 				if(!this_.data("disabled")){
// 					this_.addClass("ev-dropdown-hover");
// 				}
// 			},
// 			mouseleave : function(){
// 				var this_ = $(this);
// 				if(!this_.data("disabled")){
// 					$(this).removeClass("ev-dropdown-hover");
// 				}
// 			},
// 			click : function(){
// 				$(document).off("click",hideList);
// 				dropdown.removeClass('ev-dropdown-active');
// 				var this_ = $(this);
// 				if(!this_.data("disabled")){
// 					$(this).addClass("ev-dropdown-active");
// 					hideList = function(){
// 						this_.removeClass('ev-dropdown-active');
// 					}
// 					$(document).on("click",hideList);
// 					return false;
// 				}
// 			}
// 		});
// 		dropObj.on({
// 			mouseenter : function(){
// 				var that = $(this);
// 				if(!that.hasClass('disabled')){
// 					that.addClass("hover");
// 				}
// 			},
// 			mouseleave : function(){
// 				var that = $(this);
// 				that.removeClass("hover");
// 			},
// 			click : function(){
// 				var that = $(this);
// 				if(!that.hasClass('disabled')){
// 					var text = that.find("b").text(),
// 						vals = that.data("val");
// 					that.addClass("active").siblings("dd.active").removeClass("active");
// 					dropObj.removeClass("ev-dropdown-active").find("span.ev-dropdown-text strong").text(text);
// 					$(document).off("click",hideList);
// 				}
				

// 				return false;
// 			}
// 		},".ev-dropdown-list dd");
// 	});
// });
;(function($){
	$.fn.extend({
		evForm : function(){
			var wrapObj = $(this),
				selectObj = wrapObj.find('select');
			// 表单中的下拉选项
			selectObj.each(function(si,sel) {
				var that = $(sel),
						thatId = '',
						cusOption = '',
						dlArrt = [];
				that.children().each(function(oi,opt){
					var s = '',
							classN = '';
					if(opt.tagName.toLowerCase() == 'optgroup'){
						s = '<dt><b>' + $(this).attr('label') + '</b></dt>';
						dlArrt.push(s);
						$(this).children().each(function(){
							if(this.tagName.toLowerCase() == 'option'){
								if($(this).attr('selected')){
									cusOption = '<span class="ev-dropdown-text"><strong>'+$(this).text()+'</strong></span>';
									classN = 'class="active"';
								}else if($(this).attr('disabled')){
									classN = 'class="disabled"';
								}
								s = '<dd '+classN+' data-val="'+$(this).attr('value')+'"><b>'+ $(this).text() +'</b></dd>';
								dlArrt.push(s);
							}
						})
					}else{
						if(opt.tagName.toLowerCase() == 'option'){
							if($(this).attr('selected')){
									cusOption = '<span class="ev-dropdown-text"><strong>'+$(this).text()+'</strong></span>';
									classN = 'class="active"';
								}else if($(this).attr('disabled')){
									classN = 'class="disabled"';
								}
							s = '<dd '+classN+' data-val="'+$(this).attr('value')+'"><b>'+ $(this).text() +'</b></dd>';
							dlArrt.push(s);
						}
					}
				});
				// list.append('<dl>'+dlArrt.join('')+'</dl>');
				// selectWrap.append(cusOption,btn,list);
				// that.wrap(selectWrap);
			})
			
		}
	});

})(jQuery);

$(function(){
	$("#myform").evForm();
})