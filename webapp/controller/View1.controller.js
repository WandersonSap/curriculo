sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("ovly.data.binding.curriculo.controller.View1", {
		onInit: function () {
			
		    window._painel = this.byId("panel_competencias");
		    
		    //copy(JSON.stringify()) converte para json no console
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
				competencias: [ "ABAP", "UI5", "JavaScript"],
				empresas: [  
					{ nome: "Icatu", cargo: "Analista de Sistema" },
					{ nome: "DUX", cargo: "Desenvolvedor" },
					{ nome: "Nestlé", cargo: "Coordenador" }
				]
			};
			
			//var oModeloPessoal = new JSONModel(oFonteDeDados);
			
			var oModeloPessoal = new JSONModel("https://www.mocky.io/v2/5ec86c102f00006500db6fe4");
			this.getView().setModel(oModeloPessoal);
			
			//var sGitHub ="https://api.github.com/users/WandersonSap/repos";
			//var oGitHUb = new JSONModel(sGitHub);
			//this.byId("table_github").setModel(oGitHUb, "github");

		},
		
		toUpper: function(sTexto){
			if(!sTexto){
				return "";
			}
			return sTexto.toUpperCase();
		}
		
		
		
	});
});