"use strict";

var MatchGame = {};

MatchGame.Controller = meta.Controller.extend
({
	load: function()
	{
		this.cfg = MatchGame.Cfg;

		var field = new Entity.Field();	
		field.anchor(0.5);
		meta.view.add(field);
	},

	//
	cfg: null
});