define(['dojo/_base/declare',
'jimu/PoolControllerMixin',
'jimu/BaseWidget'
],
function(declare, PoolControllerMixin, BaseWidget) {
return declare([BaseWidget, PoolControllerMixin], {
    baseClass: 'jimu-widget-sidebar-controller jimu-main-background',
    allConfigs: [],


    postcreate: function() {
      this.inherited(arguments);
      console.log("startup");

      this.allConfigs = this.getAllConfigs();
      for (var i = 0; i < this.allConfigs.length; i++) {
        this._createIconNode(this.allConfigs[i]);
      }
    },
  },
  startup: function() {
    this.inherited(arguments);
    console.log("startup");
  },

  _createIconNode: function(iconConfig, targetNode) {
    var iconNode, iconImage;
    if (!targetNode) targetNode = this.containerNode;
    iconNode = document.createElement('DIV');
    iconNode.className = 'icon-node';
    if (iconConfig.icon) {
      iconImage = document.createElement('img');
      iconImage.src = iconConfig.icon;
    }
    if (iconConfig.label) {
      iconNode.title = iconConfig.label;
      iconImage.alt = iconConfig.label;
    }
    iconNode.appendChild(iconImage);
    targetNode.appendChild(iconNode);
    return iconNode;
  }
}
},

});
});