/**一个简单的代码展示**/
(function ($) {
    $.fn.codeShow = function (j) {
        var j_ = {
                'skin': 1,
                'height': 'auto',
                'title': {
                    'show': true,
                    'names': "HTML"
                },
                'lineNum': true
            },
            j = $.extend(true, j_, j),
            that = $(this),
            i = 0;
        that.addClass("pre-code").wrap('<div class="code-body-inner"></div>');
        var codeBodyInner = that.parent();
        codeBodyInner.wrap('<div class="code-body"></div>');
        var codeBody = codeBodyInner.parent();
        codeBody.wrap('<div class="code-area code-skin-' + j.skin + '"></div>')
        var codeArea = codeBody.parent();
        //是否显示标题
        if (j.title.show) {
            var codeTitle = $('<div>', {'class': 'code-title'});
            codeTitle.append('<span>' + j.title.names + '</span>');
            codeArea.prepend(codeTitle);
        }
        if (j['height'] != 'auto') {
            codeBody.height(j['height']);
        }
        //是否显示行号
        if (j.lineNum) {
            var codeNumber = $('<ol>', {'class': 'code-number'}),
                codeNumLi = "",
                codeH = that.height(),
                codeLH = parseInt(that.css("line-height"), 10),
                lineNum = codeH / codeLH;
            for (; i < lineNum; i++) {
                codeNumLi += '<li>' + (i + 1) + '</li>';
            }
            codeBody.append(codeNumber.append(codeNumLi));
            codeBodyInner.css({paddingLeft: codeNumber.width() + "px"});
        }

    };
})(jQuery);

//执行函数
$(function () {
    $("pre").each(function () {
        var that = $(this),
            tit = that.data("title"),
            skin = that.data("skin"),
            heights = that.data("height");
        heights = heights || 'auto';
        $(this).codeShow({
            'title': {
                'names': tit
            },
            'skin': skin,
            'height': heights
        })
    });
});
var pf = {
    fncolor: function (obj) {
        var colobj = obj.find("input[name=colorInput]");
        if (colobj.length > 0) {
            colobj.each(function () {
                var this_ = $(this);
                this_.spectrum({
                    color: this_.val(),
                    flat: false,
                    clickoutFiresChange: true,
                    showInitial: true,
                    preferredFormat: "hex",
                    showInput: true,
                    chooseText: "确定",
                    cancelText: "取消",
                    change: function (color) {
                        this_.val(color.toHexString());
                    }
                });
            });
        }
    },
    //检测输入数字的范围和正确否
    numJudge: function (obj, defaults, mins, maxs) {
        var that = $(obj),
            a = parseInt(that.val());
        mins = mins || 0;
        maxs = maxs || 999;
        if (isNaN(a)) {
            a = defaults;
        } else if (a < mins) {
            a = mins;
        } else if (a > maxs) {
            a = maxs;
        }
        that.val(a);
        return a;
    },
    sliderRange: function (dom) {
        dom.find("input[data-type='slider']").each(function (i, e) {
            var $this = $(e);
            var $slider = $('<span class="slider-range"></span>').slider({
                range: "min",
                min: $this.data('min'),
                max: $this.data('max'),
                value: $this.val(),
                animate: true,
                slide: function (event, ui) {
                    $this.val(ui.value).trigger('change');
                }
            });
            $this.before($slider);
            $this.on('change', function () {
                var a = pf.numJudge($this[0], $this.data('defalutval'), $this.data('min'), $this.data('max'));
                $slider.slider('value', a);
            });
        });
    }
};