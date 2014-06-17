/**
 *    
 */
var Collapse = new Class({

	Implements : Options,

	options : {
		collapseAll : false
	},

	initialize: function(el, options) {

		this.el = $(el);
		this.setOptions(options);

		this.el.addClass('collapse-ui');

		this.items = el.getChildren();

		this.items.each(function(el, i) {

			if (this.options.collapseAll || (i != 0)) {
				el.addClass('collapse-ui__item--is-collapsed');
			}

			//add relevant classes
			el.addClass('collapse-ui__item');
			var trigger = this.getTrigger(el).addClass('collapse-ui__item__trigger');
			this.getBody(el).addClass('collapse-ui__item__body');

			trigger.addEvent('click', this.onTriggerClick.bind(this, i));

		}, this);

	},

	getTrigger: function(el) {
		return el.getChildren()[0];
	},

	getBody: function(el) {
		return el.getChildren()[1];
	},

	onTriggerClick: function(idx) {
		this.items[idx].toggleClass('collapse-ui__item--is-collapsed');
	}

});