define(['dojo/_base/declare', "jimu/LayerStructure", 'jimu/BaseWidget'],
  function (declare, LayerStructure, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.

    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-personalizado',

      startup: function () {
        this.inherited(arguments);

        _mapa = this.map;
        _titulo = this.tituloDinamico;
        _tablaInformacion = this.tablaInformacionMapa;
        _tablaCapas = this.tablaListadoCapas;
        _longitud = this.map.itemInfo.itemData.operationalLayers.length;
        _subBloqueCapas = this.subBloqueCapas;

      },

      onOpen: function () {
        var layerStructure = LayerStructure.getInstance();

        _titulo.innerHTML = _mapa.itemInfo.item.title;

        _tablaInformacion.innerHTML += "<tr><td><p>Identificador: </p>" + _mapa.itemInfo.item.id + "</td></tr>";
        _tablaInformacion.innerHTML += "<tr><td><p>Tipo: </p>" + _mapa.itemInfo.item.type + "</td></tr>";
        _tablaInformacion.innerHTML += "<tr><td><p>Acceso: </p>" + _mapa.itemInfo.item.access + "</td></tr>";
        _tablaInformacion.innerHTML += "<tr><td><p>Etiquetas: </p>" + _mapa.itemInfo.item.tags + "</td></tr>";

        if (_longitud != 0) {
          layerStructure.traversal(function (layerNode) {

            console.log(layerNode);
            _tablaCapas.innerHTML += "<tr><td>" + layerNode.title + "</td><td>" + layerNode._layerInfo.id + "</td></tr>";
          });

        } else {
          _subBloqueCapas.style.display = "none";

        }

      },

    });
  });