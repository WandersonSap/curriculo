sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			var oFonteDeDados = {
				nome: "Wanderson",
				sobrenome: "Santos"
			};
			
			var oModeloPessoal = new JSONModel(oFonteDeDados);

		}
	});
});