(this.webpackJsonppantry=this.webpackJsonppantry||[]).push([[0],[,,,,,,,,function(a){a.exports=JSON.parse('["./images/wine1.jpg","./images/wine2.jpg","./images/wine3.jpg","./images/wine4.jpg"]')},,function(a){a.exports=JSON.parse('[{"param":"white_wine","name":"White Wine"},{"param":"dry_white_wine","name":"Dry White Wine"},{"param":"assyrtiko","name":"Assyrtiko"},{"param":"pinot_blanc","name":"Pinot Blanc"},{"param":"cortese","name":"Cortese"},{"param":"roussanne","name":"Roussanne"},{"param":"moschofilero","name":"Moschofilero"},{"param":"muscadet","name":"Muscadet"},{"param":"viognier","name":"Viognier"},{"param":"verdicchio","name":"Verdicchio"},{"param":"greco","name":"Greco"},{"param":"marsanne","name":"Marsanne"},{"param":"white_burgundy","name":"White Burgundy"},{"param":"chardonnay","name":"Chardonnay"},{"param":"gruener_veltliner","name":"Gruener Veltliner"},{"param":"white_rioja","name":"White Rioja"},{"param":"frascati","name":"Frascati"},{"param":"gavi","name":"Gavi"},{"param":"l_acadie_blanc","name":"L\'Acadie Blanc"},{"param":"trebbiano","name":"Trebbiano"},{"param":"sauvignon_blanc","name":"Sauvignon Blanc"},{"param":"catarratto","name":"Catarratto"},{"param":"albarino","name":"Albarino"},{"param":"arneis","name":"Arneis"},{"param":"verdejo","name":"Verdejo"},{"param":"vermentino","name":"Vermentino"},{"param":"soave","name":"Soave"},{"param":"pinot_grigio","name":"Pinot Grigio"},{"param":"dry_riesling","name":"Dry Riesling"},{"param":"torrontes","name":"Torrontes"},{"param":"mueller_thurgau","name":"Mueller Thurgau"},{"param":"grechetto","name":"Grechetto"},{"param":"gewurztraminer","name":"Gewurztraminer"},{"param":"chenin_blanc","name":"Chenin Blanc"},{"param":"white_bordeaux","name":"White Bordeaux"},{"param":"semillon","name":"Semillon"},{"param":"riesling","name":"Riesling"},{"param":"sauternes","name":"Sauternes"},{"param":"sylvaner","name":"Sylvaner"},{"param":"lillet_blanc","name":"Lillet Blanc"},{"param":"red_wine","name":"Red Wine"},{"param":"dry_red_wine","name":"Dry Red Wine"},{"param":"petite_sirah","name":"Petite Sirah"},{"param":"zweigelt","name":"Zweigelt"},{"param":"baco_noir","name":"Baco Noir"},{"param":"bonarda","name":"Bonarda"},{"param":"cabernet_franc","name":"Cabernet Franc"},{"param":"bairrada","name":"Bairrada"},{"param":"barbera_wine","name":"Barbera Wine"},{"param":"primitivo","name":"Primitivo"},{"param":"pinot_noir","name":"Pinot Noir"},{"param":"nebbiolo","name":"Nebbiolo"},{"param":"dolcetto","name":"Dolcetto"},{"param":"tannat","name":"Tannat"},{"param":"negroamaro","name":"Negroamaro"},{"param":"red_burgundy","name":"Red Burgundy"},{"param":"corvina","name":"Corvina"},{"param":"rioja","name":"Rioja"},{"param":"cotes_du_rhone","name":"Cotes du Rhone"},{"param":"grenache","name":"Grenache"},{"param":"malbec","name":"Malbec"},{"param":"zinfandel","name":"Zinfandel"},{"param":"sangiovese","name":"Sangiovese"},{"param":"carignan","name":"Carignan"},{"param":"carmenere","name":"Carmenere"},{"param":"cesanese","name":"Cesanese"},{"param":"cabernet_sauvignon","name":"Cabernet Sauvignon"},{"param":"aglianico","name":"Aglianico"},{"param":"tempranillo","name":"Tempranillo"},{"param":"shiraz","name":"Shiraz"},{"param":"mourvedre","name":"Mourvedre"},{"param":"merlot","name":"Merlot"},{"param":"nero_d_avola","name":"Nero d\'Avola"},{"param":"bordeaux","name":"Bordeaux"},{"param":"marsala","name":"Marsala"},{"param":"port","name":"Port"},{"param":"gamay","name":"Gamay"},{"param":"dornfelder","name":"Dornfelder"},{"param":"concord_wine","name":"Concord Wine"},{"param":"sparkling_red_wine","name":"Sparkling Red Wine"},{"param":"pinotage","name":"Pinotage"},{"param":"agiorgitiko","name":"Agiorgitiko"},{"param":"dessert_wine","name":"Dessert Wine"},{"param":"pedro_ximenez","name":"Pedro Ximenez"},{"param":"moscato","name":"Moscato"},{"param":"late_harvest","name":"Late Harvest"},{"param":"ice_wine","name":"Ice Wine"},{"param":"white_port","name":"White Port"},{"param":"lambrusco_dolce","name":"Lambrusco Dolce"},{"param":"madeira","name":"Madeira"},{"param":"banyuls","name":"Banyuls"},{"param":"vin_santo","name":"Vin Santo"},{"param":"port","name":"Port"},{"param":"rose_wine","name":"Rose Wine"},{"param":"sparkling_rose","name":"Sparkling Rose"},{"param":"sparkling_wine","name":"Sparkling Wine"},{"param":"cava","name":"Cava"},{"param":"cremant","name":"Cremant"},{"param":"champagne","name":"Champagne"},{"param":"prosecco","name":"Prosecco"},{"param":"spumante","name":"Spumante"},{"param":"sparkling_rose","name":"Sparkling Rose"},{"param":"sherry","name":"Sherry"},{"param":"cream_sherry","name":"Cream Sherry"},{"param":"dry_sherry","name":"Dry Sherry"},{"param":"vermouth","name":"Vermouth"},{"param":"dry_vermouth","name":"Dry Vermouth"},{"param":"fruit_wine","name":"Fruit Wine"},{"param":"mead","name":"Mead"}]')},,,,,function(a,e,r){},function(a,e,r){},,function(a,e,r){},function(a,e,r){},function(a,e,r){"use strict";r.r(e);var n=r(1),i=r.n(n),t=r(9),m=r.n(t),s=(r(15),r(2)),c=r(3),o=r(4),p=r(6),l=r(5),h=r(8),d=r(10),u=(r(16),r(0)),g=function(a){Object(p.a)(r,a);var e=Object(l.a)(r);function r(a){var n;return Object(s.a)(this,r),(n=e.call(this,a)).startSearch=function(a){var e=a.target.value,r=d.filter((function(a){return a.name.match(new RegExp("^".concat(e.replace(/[`~!@#$%^&*()_|+=?;:,.<>{}[\]\\/]/gi,"")),"gi"))}));document.getElementById("search-results").classList.remove("hide"),""===e||0===e.length?document.getElementById("search-results").classList.add("hide"):n.setState({wineMatches:r}),n.searchDropdown(r)},n.searchDropdown=function(a,e){return Object(u.jsx)("li",{className:"search-results__result",id:a.param,onClick:function(a){n.props.setWine(a),n.fadeMainSearch()},children:a.name},a.param)},n.state={wineMatches:[]},n.startSearch=n.startSearch.bind(Object(o.a)(n)),n}return Object(c.a)(r,[{key:"fadeMainSearch",value:function(){document.getElementById("main-search").classList.add("fadeOut"),setTimeout((function(){document.getElementById("main-search").classList.add("hide")}),1e3)}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"main-search",className:"main-search",style:{backgroundImage:"url(".concat(b,")")},children:Object(u.jsxs)("div",{className:"main-search--dark",children:[Object(u.jsxs)("div",{className:"main-search--center",children:[Object(u.jsx)("h1",{className:"main-search__logo",children:Object(u.jsx)("img",{src:"./images/pantry-white.svg",alt:"Pantry",width:"200",height:"59"})}),Object(u.jsx)("h2",{className:"main-search__header",children:"What are we cooking today?"}),Object(u.jsxs)("form",{className:"search-bar",children:[Object(u.jsxs)("div",{className:"search-bar__field",children:[Object(u.jsx)("input",{id:"search-bar__input",className:"search-bar__input",onChange:this.startSearch,type:"text",placeholder:"Search for wine"}),Object(u.jsx)("div",{className:"search-bar__button",children:Object(u.jsx)("img",{src:"./images/search.svg",alt:"search",width:"20",height:"20"})})]}),Object(u.jsx)("div",{className:"search-results hide",id:"search-results",children:Object(u.jsx)("ul",{className:"search-results__dropdown",id:"search-results__dropdown",children:this.state.wineMatches.length?this.state.wineMatches.map(this.searchDropdown):Object(u.jsx)("li",{className:"search-results__noresult",children:"No results"})})})]})]}),Object(u.jsx)("a",{className:"main-search__footer",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})]})})}}]),r}(n.PureComponent),b=h[Math.floor(h.length*Math.random())],j=(r(18),function(a){Object(p.a)(r,a);var e=Object(l.a)(r);function r(){var a;Object(s.a)(this,r);for(var n=arguments.length,i=new Array(n),t=0;t<n;t++)i[t]=arguments[t];return(a=e.call.apply(e,[this].concat(i))).showPairings=function(e,r){return Object(u.jsxs)("div",{className:"pairings-description",children:[Object(u.jsx)("h2",{className:"pairing-description__header",children:a.props.wineSelection}),Object(u.jsx)("div",{className:"pairing-description__text",children:e.text},"pairings-text")]})},a}return Object(c.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"pairings",children:[Object(u.jsx)("div",{className:"pairings__header",children:Object(u.jsx)("div",{className:"pairings__logo",children:Object(u.jsx)("img",{src:"./images/pantry.svg",alt:"Pantry",width:"100",height:"30"})})}),this.props.pairings.map(this.showPairings),Object(u.jsx)("a",{className:"pairings__footer",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})]})}}]),r}(n.PureComponent)),_=(r(19),function(a){Object(p.a)(r,a);var e=Object(l.a)(r);function r(a){var n;return Object(s.a)(this,r),(n=e.call(this,a)).apiKey="b329f47d9908439e9984c31a93c553b0",n.state={wineParam:"",wineSelection:"",pairings:[{text:"Malbec is a dry red wine which is bold and full bodied. It goes especially well with stew, steak, chili, jjigae, and burger.",pairings:["stew","steak","chili","jjigae","burger"]}]},n.setWine=n.setWine.bind(Object(o.a)(n)),n}return Object(c.a)(r,[{key:"setWine",value:function(a){this.setState({wineParam:a.target.id,wineSelection:a.target.innerHTML})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(g,{setWine:this.setWine.bind(this)}),0!==this.state.wineParam.length&&Object(u.jsx)(j,{pairings:this.state.pairings,wineSelection:this.state.wineSelection})]})}}]),r}(n.PureComponent));m.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.5d6718fc.chunk.js.map