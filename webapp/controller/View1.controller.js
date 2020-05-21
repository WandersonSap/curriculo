sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			var oFonteDeDados = {
				nome: "Wanderson",
				sobrenome: "Santos",
				endereco: {
					rua: {
						nome: "Av Paulista",
						numero: "1000"
					},
					cidade: "São Bernardo do Campo",
					estado: {
						nome: "São Paulo",
						sigla: "SP"
					}
				},
				quiz_1: 45,
				quiz_media: 3,
				competencias: [ "ABAP", "UI5", "JavaScript"]
			};
			
			//var oModeloPessoal = new JSONModel(oFonteDeDados);
			
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec5da3a3200006400d748f9");
			
			this.getView().setModel(oModeloPessoal);

		}
	});
});