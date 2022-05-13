__NUXT_JSONP__("/manual/upgrading", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{document:{slug:"upgrading",description:"Familiarize yourself with the basic process and options when setting up an RBF driver",title:j,menuTitle:j,position:207,category:"Manual",fullscreen:true,toc:[],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"If you have created RBF drivers using the addon before version 2.0, you can use the provided upgrade operation to import them for use in RBF Drivers 2.0+. The upgrade operation is not available in the RBF Drivers panel, but you can use the "},{type:b,tag:"a",props:{href:"https:\u002F\u002Fdocs.blender.org\u002Fmanual\u002Fen\u002Flatest\u002Finterface\u002Fcontrols\u002Ftemplates\u002Foperator_search.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"operator search menu"}]},{type:a,value:" to run it:"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Open the operator search menu (by default this is achieved by tapping F3)"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Type something like \"upgrade rbf drivers\" into the search field"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Select the "},{type:b,tag:f,props:{},children:[{type:a,value:"Upgrade RBF Drivers"}]},{type:a,value:" option"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The operator will then search all the objects in the open Blender file for RBF drivers created with previous versions of the addon and offer you the option to upgrade all or some of them."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"warning"},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The upgrade process does its best to map the settings of the legacy RBF drivers to settings for a new RBF driver, but due to major changes in version 2.0, a direct translation is not always possible. Known limitations of the upgrade process are detailed below."}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Interpolation"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nRBF Drivers v1 offered 4 interpolation types: "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:l},{type:b,tag:d,props:{},children:[{type:a,value:"Gaussian"}]},{type:a,value:l},{type:b,tag:d,props:{},children:[{type:a,value:"Multi-Quadratic Biharmonc"}]},{type:a,value:i},{type:b,tag:d,props:{},children:[{type:a,value:"Inverse Multi-Quadratic Biharmonic"}]},{type:a,value:" and further options for "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:". "},{type:b,tag:o,props:{to:"\u002Fmanual\u002Finterpolation"},children:[{type:a,value:"RBF Drivers v2 has a much more flexible, predictable and performant interpolation mechanism"}]},{type:a,value:" based on curves, but it's not always practicable to map the interpolation settings between v1 and v2. If your original RBF driver used "},{type:b,tag:d,props:{},children:[{type:a,value:k}]},{type:a,value:" or "},{type:b,tag:d,props:{},children:[{type:a,value:"Multi-quadratic"}]},{type:a,value:" interpolation types with default settings for "},{type:b,tag:d,props:{},children:[{type:a,value:m}]},{type:a,value:i},{type:b,tag:d,props:{},children:[{type:a,value:n}]},{type:a,value:" there should be little or no difference with the upgraded driver, but in other cases there may be. It is advised that you familiarize yourself with the new interpolation settings in v2 and adjust them to your needs."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Rotation Inputs"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nRBF Drivers v1 made several assumptions in how it handled rotation input data. Version 2 requires you to be more specific when setting up rotation inputs. In the vast majority of cases the upgrade operation should correctly map the rotation settings and data when upgrading, but if you have rotation inputs you are advised to verify things are working as they should after the updgrade."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Edge Cases"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nThere are so many ways to set up RBF drivers that there will undoubtedly be some edge-cases where the upgrade doesn't work as you might expect. If it fails for you, please "},{type:b,tag:o,props:{to:p},children:[{type:a,value:"get in touch"}]},{type:a,value:" as it may require some manual data manipulation or a change to the upgrade script."}]},{type:a,value:c}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fmanual",path:"\u002Fen\u002Fmanual\u002Fupgrading",extension:".md",createdAt:q,updatedAt:q,to:"\u002Fmanual\u002Fupgrading"},prev:{title:"Frequently Asked Questions",path:"\u002Fen\u002Fmanual\u002Ffaq",to:"\u002Fmanual\u002Ffaq"},next:{title:"Support",path:"\u002Fen\u002Fmanual\u002Fsupport",to:p}}],fetch:{},mutations:[]}}("text","element","\n","em","li","strong","p","br"," and ","Upgrading","Linear",", ","Radius","Smoothing","nuxt-link","\u002Fmanual\u002Fsupport","2022-05-13T17:15:31.847Z")));