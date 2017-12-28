/*
 	Date:2014-08-15
	Author:qwguo
	Purpose:关于元素的自定义元素title提示框
 */
;(function() {
	$.fn.extend({
		evTitle: function(styles,eff) {
			var defStyles = {
					'backgroundColor': "#efefef",
					'borderWidth': '1px',
					'borderColor': '#ddd',
					'borderStyle': 'solid',
					'color': '#444',
					'fontSize': '12px',
					'padding': '0.4em 0.5em',
					'box-shadow': '2px 3px 6px rgba(0,0,0,.5)',
					'z-index': '999',
					'display': 'none',
					'position': 'absolute',
					'max-width': '300px'
				},
				nStyles = $.extend({}, defStyles, styles),
				thatObj = $(this),
				bodys = $('body'),
				eff = eff ? eff : 0,
				aIn = ['show','slideDown','fadeIn'],
				aOut = ['hide','slideUp','fadeOut'],
				pfun = function(obj,e) {
					var l = e.pageX + 15,
						t = e.pageY + 15,
						bw = $(document).outerWidth(),
						bh = $(document).outerHeight(),
						ow = obj.outerWidth(),
						oh = obj.outerHeight();
					if(l + ow> bw){
						l = l - (ow + 25);
					}
					if(t + oh > bh){
						t = t - oh;
					}
					obj.css({
						left: l + 'px',
						top: t + 'px'
					});
				};
			thatObj.find("*[title]").each(function() {
					var titleDom = '',
						titleText = '',
						that = $(this);
					that.on({
						mouseenter: function(e) {
							titleText = that.attr("title");
							that.attr("title", "");
							titleDom = $('<div>' + titleText + '</div>');
							titleDom.css(nStyles);
							bodys.append(titleDom);
							titleDom[aIn[eff]](100);
							pfun(titleDom,e);
						},
						mousemove: function(e) {
							titleDom.css({
								'display': 'block'
							});
							pfun(titleDom,e);
						},
						mouseleave: function() {
							that.attr('title', titleText);
							titleDom[aOut[eff]](40,function(){
								titleDom.remove()
							});
						}
					});
			});
		}
	});
})(jQuery);

// 调用案例
$(function(){
	$("#cusTitle_1").evTitle();
	$("#cusTitle_2").evTitle({'backgroundColor':'orange','fontSize':'20px','color':'white','borderColor':'white'},1);
	$("#cusTitle_3").evTitle({'backgroundColor':'#6FBFFF','fontSize':'14px','color':'#fff','borderColor':'#2798F2'},2);
});