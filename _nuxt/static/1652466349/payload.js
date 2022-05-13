__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{document:{slug:"index",description:t,title:t,menuTitle:"About",position:1,fullscreen:true,toc:[{id:w,depth:u,text:x},{id:y,depth:u,text:z},{id:A,depth:u,text:B}],body:{type:"root",children:[{type:b,tag:"img",props:{className:["ml-auto","mr-auto","pb-8"],width:"80%",src:"\u002Fsvg\u002Frbf-drivers-logo.svg",onError:"this.src='\u002Fimg\u002Frbf-drivers-logo.png'"},children:[]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"RBF Drivers brings the power and expressivity of radial basis function networks to Blender, enabling complex rigging and animation that would otherwise be difficult or even impossible with Blender's native tools."}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"info"},children:[{type:a,value:c},{type:b,tag:"h4",props:{id:"what-does-rbf-mean"},children:[{type:b,tag:e,props:{href:"#what-does-rbf-mean",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:"What does RBF mean?"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"RBF stands for "},{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRadial_basis_function",rel:[i,j,k],target:l},children:[{type:a,value:"Radial Basis Function"}]},{type:a,value:C},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" builds a "},{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FRadial_basis_function_network",rel:[i,j,k],target:l},children:[{type:a,value:"radial basis function network"}]},{type:a,value:" inside Blender's dependency graph. An RBF network is a kind of "},{type:b,tag:e,props:{href:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FNeural_network",rel:[i,j,k],target:l},children:[{type:a,value:"neural network"}]},{type:a,value:" that predicts output values based on input values and a set of training data."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Fundamentally "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" let you animate any number of "},{type:b,tag:f,props:{},children:[{type:a,value:"output"}]},{type:a,value:" values based on any number of "},{type:b,tag:f,props:{},children:[{type:a,value:"input"}]},{type:a,value:" values. We do this by defining "},{type:b,tag:f,props:{},children:[{type:a,value:"poses"}]},{type:a,value:". Defining a pose is simply telling "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" that when "},{type:b,tag:f,props:{},children:[{type:a,value:"these"}]},{type:a,value:" input values are like "},{type:b,tag:f,props:{},children:[{type:a,value:"this"}]},{type:a,value:", I want "},{type:b,tag:f,props:{},children:[{type:a,value:"those"}]},{type:a,value:" output values to be like "},{type:b,tag:f,props:{},children:[{type:a,value:"that"}]},{type:a,value:C},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" does all the heavy lifting to make it happen. In contrast to setting up constraints and Blender's native drivers you dont need to define "},{type:b,tag:f,props:{},children:[{type:a,value:"how"}]},{type:a,value:" something happens, just "},{type:b,tag:f,props:{},children:[{type:a,value:"what"}]},{type:a,value:" happens."}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"RBF systems have been used to great effect in other popular 3D software packages for some time, and have become an indispensible tool for riggers and animators. RBF Drivers is an implementation of an RBF system designed from the ground up for Blender. The workflow is intuitive enough that relative beginners can get up and running quickly, and the features are extensive enough to offer more experienced users full control."}]},{type:a,value:c},{type:b,tag:v,props:{id:w},children:[{type:b,tag:e,props:{href:"#features",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Intuitive workflow"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nSet your inputs and outputs, add some poses, and your good to go. Behind the scenes the addon builds and manages the neural network while exposing a straightforward process."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Reduced complexity"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nRBF drivers can often replace multiple constraints and long driver chains with one simple interface, allowing riggers and animators to achieve great results quickly and stay in the flow."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Exceptional control"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nComplete control over interpolation curves along with animatable influence on individual outputs and poses as well as per-pose interpolation options offer a very high degree of control for advanced use-cases."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Excellent performance"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nRBF Drivers has been carefully designed such that all runtime calculations are performed in native C by Blender's dependency graph."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Fully scriptable"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nA comprehensive python API allows RBF drivers to be built and configured entirely from script."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"No strings attached"}]},{type:b,tag:h,props:{},children:[]},{type:a,value:"\nBecause RBF Drivers builds on Blender's native toolset, you're free to send your creations down the pipeline, share them with others or even sell them online. Once they're set up there is no requirement for the addon to be installed for the RBF drivers to keep working"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:v,props:{id:y},children:[{type:b,tag:e,props:{href:"#documentation",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:v,props:{id:A},children:[{type:b,tag:e,props:{href:"#support",ariaHidden:n,tabIndex:o},children:[{type:b,tag:p,props:{className:[q,r]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:D,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fjamesvsnowden\u002Fbl_rbf_drivers\u002Fissues",rel:[i,j,k],target:l},children:[{type:a,value:"Issues"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fgithub.com\u002Fjamesvsnowden\u002Fbl_rbf_drivers\u002Fdiscussions",rel:[i,j,k],target:l},children:[{type:a,value:"Discussion"}]}]},{type:a,value:c}]}]},dir:"\u002Fen",path:"\u002Fen\u002Findex",extension:".md",createdAt:E,updatedAt:E,to:"\u002F",category:t},prev:null,next:{title:"Introduction",path:"\u002Fen\u002Ftutorials\u002Fintroduction",to:"\u002Ftutorials\u002Fintroduction"}}],fetch:{},mutations:[]}}("text","element","\n","strong","a","em","li","br","nofollow","noopener","noreferrer","_blank","p","true",-1,"span","icon","icon-link","RBF Drivers","",2,"h2","features","Features","documentation","Documentation","support","Support",". ","ul","2022-05-13T17:15:31.844Z")));