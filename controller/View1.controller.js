sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global",
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/Sorter"
], function(Controller, JSONModel, jQuery, MessageBox, Filter, Sorter, Fragment) {
	"use strict";

	var serviceUrl = "/sap/opu/odata/sap/ZSD_COCKPIT_SRV/",
		vm = null;
	var oldId = "";
	var oldId2 = "";

	return Controller.extend("ZSD_COCKPIT.controller.View1", {

		// Here We GO :)
		onInit: function() {
			
			vm = this;
			var oView = vm.getView();

			// Mockup
			var oModel = new JSONModel();
			var oData = {
				modelData: [{
					Fabricante: "2755",
					Est: "14",
					Indisp: "0",
					LiqDsp: "14",
					Sinal: ">",
					EsTr: "14",
					Inc: "0",
					Saldo: "14",
					Pend: "",
					Fabr: "0",
					Emp: "2.27",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "112.98"
				},{
					Fabricante: "44430351350",
					Est: "2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "116.98"
				},{
					Fabricante: "48520",
					Est: "0",
					Indisp: "0",
					LiqDsp: "0",
					Sinal: ">",
					EsTr: "0",
					Inc: "0",
					Saldo: "0",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "141.76"
				},{
					Fabricante: "78579",
					Est: "23",
					Indisp: "0",
					LiqDsp: "23",
					Sinal: ">",
					EsTr: "23",
					Inc: "0",
					Saldo: "23",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "25.28"
				},{
					Fabricante: "44430351350",
					Est: " 2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "113.53"
				},{
					Fabricante: "44430351350",
					Est: "2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "116.98"
				},{
					Fabricante: "44430351350",
					Est: "2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "116.98"
				},{
					Fabricante: "44430351350",
					Est: "2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "116.98"
				},{
					Fabricante: "44430351350",
					Est: "2",
					Indisp: "0",
					LiqDsp: "2",
					Sinal: ">",
					EsTr: "2",
					Inc: "0",
					Saldo: "2",
					Pend: "",
					Fabr: "0",
					Emp: "0",
					Prom: "0",
					Pis: "0",
					Rep: "0",
					Esp: "0",
					Custo: "0",
					Fina: "0",
					Frete: "0",
					Lista: "116.98"
				}],
				modelData2: [{
					Montadora: "FORD",
					veiculo: "FIETA",
					modelo: "NEW FIESTA HATCH/SEDAN TRANSMISSÃO MANUAL",
					de: "",
					anoDe: "2011",
					ate: "",
					anoAte: ""
				},{
					Montadora: "FORD",
					veiculo: "KA",
					modelo: "NEM 1.5 TRANSMISSÃO MANUAL",
					de: "07",
					anoDe: "2014",
					ate: "",
					anoAte: ""
				}]
			};

			oModel.setData(oData);
			oView.setModel(oModel);

			var oInput = this.getView().byId("pisId");
			var oInput2 = this.getView().byId("montadoraInput");
		//	var oTable = this.getView().byId("table2");
		//	oTable.setSelectionMode("None");
			vm.getView().addEventDelegate({
				onAfterRendering: function () {
					document.getElementById(vm.getView().byId("columnQtd").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("columnDesc").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("columnRep").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("columnEmpty").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("columEn").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("colum1").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("colum2").sId).style.backgroundColor = "rgba(126,186,197)";
					document.getElementById(vm.getView().byId("colum3").sId).style.backgroundColor = "rgba(126,186,197)";
				}
			});
			// Add event delegate
			oInput.addEventDelegate({
				onfocusin: function(oEvent) {
					if (oldId == "") {
						oldId = oEvent.srcControl.oParent.sId;
					} else {}
					if (oldId !== oEvent.srcControl.oParent.sId) {
						document.getElementById(oldId).style.backgroundColor = "white";
						oldId = oEvent.srcControl.oParent.sId;
					}
					document.getElementById(oEvent.srcControl.oParent.sId).style.backgroundColor = "rgba(0,231,251)";
					if (oInput === undefined) {
						alert("focus");

					}
				}
			});
			oInput2.addEventDelegate({
				onfocusin: function(oEvent) {
					if (oldId2 == "") {
						oldId2 = oEvent.srcControl.oParent.sId;
					} else {}
					if (oldId2 !== oEvent.srcControl.oParent.sId) {
						document.getElementById(oldId2).style.backgroundColor = "white";
						oldId2 = oEvent.srcControl.oParent.sId;
					}
					document.getElementById(oEvent.srcControl.oParent.sId).style.backgroundColor = "rgba(0,231,251)";
					if (oInput === undefined) {
						alert("focus");

					}
				}
			});
 
			
		},
		onSearch: function() {
			vm = this;
			var oView = vm.getView();
			vm._oBusyDialog = new sap.m.BusyDialog({
				title: "Processando..."
			});
		},
		_showError: function(oError) {
			if (oError.responseText) {
				var errorObj = jQuery.parseJSON(oError.responseText).error.message.value;
				MessageBox.show(errorObj, MessageBox.Icon.ERROR, "Error");
			} else {
				MessageBox.show("Connection Problem", MessageBox.Icon.ERROR, "Technical Problem");
			}
		},
		_TokenData: function(oArray, oField, oName) {
			for (var i = 0, len = oField.getTokens().length; i < len; i++) {
				if (!oField.getTokens()[i].data().range) {
					oArray[i] = {
						'sign': 'I',
						'option': 'EQ',
						'low': oField.getTokens()[i].getKey()
					};
				} else {
					oArray[i] = {
						'sign': oField.getTokens()[i].data().range.exclude ? 'E' : 'I',
						'option': oField.getTokens()[i].data().range.operation,
						'low': oField.getTokens()[i].data().range.value1,
						'high': oField.getTokens()[i].data().range.value2
					};
				}
			}
		},
		_onRequiredFields: function() {
			vm = this;
			var required = 0;
			var oView = vm.getView();

			// Tratamento Token
			var oMIDelfz = oView.byId("sDelfz");
			var _delfz = [];
			vm._TokenData(_delfz, oMIDelfz, "sParceiro");
			if (_delfz === null || _delfz === undefined || _delfz.length < 1) {
				required = 1;
				oMIDelfz.setValueState("Error");
			} else {
				oMIDelfz.setValueState();
			}

			return required;
		},
		_getDefaultTokens: function() {
			var ValueHelpRangeOperation = compLibrary.valuehelpdialog.ValueHelpRangeOperation;
			var date = new Date();
			var dateUs = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + ("0" + date.getDate()).slice(-2);
			var oToken = new sap.m.Token({
				key: dateUs,
				text: ">=" + dateUs
			}).data("range", {
				"exclude": true,
				"operation": ValueHelpRangeOperation.GE,
				"keyField": "Delfz",
				"value1": dateUs,
				"value2": ""
			});

			return [oToken];
		},
		onExit: function() {},
		_getModel: function() {
			return new sap.ui.model.odata.ODataModel(serviceUrl);
		}
	});
});