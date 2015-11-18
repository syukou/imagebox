/**
 * Created by taguchimunetaka on 2015/11/17.
 */

var SYUKOU = SYUKOU || {};

SYUKOU.COMMON = {};

SYUKOU.COMMON.IMAGEVIEW = {
	init : function(){
		this.setParameters();
		this.bindEvent();
	},
	setParameters : function(){
		this.$imgScreen = $('#jsi-Screen img');
		this.$trigger = $('#jsi-gallery-list li a');
	},
	bindEvent : function(){

		var _self = this;

		this.$trigger.each(function(){
			var hrefData = $(this).attr('href');

			$(this).on('click', function(e){
				e.preventDefault();
				_self.$imgScreen.attr('src',hrefData);
			})
		})
	}
};


$(function(){
	SYUKOU.COMMON.IMAGEVIEW.init();
});