(this.webpackJsonppantry=this.webpackJsonppantry||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('["./images/wine1.jpg","./images/wine2.jpg","./images/wine3.jpg","./images/wine4.jpg"]')},,function(e){e.exports=JSON.parse('[{"param":"cheese","name":"Cheese"},{"param":"burger","name":"Burger"},{"param":"steak","name":"Steak"},{"param":"oyster","name":"Oyster"},{"param":"pizza","name":"Pizza"},{"param":"chicken","name":"Chicken"},{"param":"clam","name":"Clam"},{"param":"taco","name":"Taco"},{"param":"sushi","name":"Sushi"},{"param":"pasta","name":"Pasta"},{"param":"salad","name":"Salad"},{"param":"cake","name":"Cake"},{"param":"curry","name":"Curry"},{"param":"salmon","name":"Salmon"},{"param":"lamb","name":"Lamb"},{"param":"shrimp","name":"Shrimp"},{"param":"fish","name":"Fish"},{"param":"duck","name":"Duck"},{"param":"chocolate","name":"Chocolate"},{"param":"turkey","name":"Turkey"},{"param":"tuna","name":"Tuna"},{"param":"caviar","name":"Caviar"},{"param":"noodle","name":"Noodle"},{"param":"pie","name":"Pie"},{"param":"pork","name":"Pork"},{"param":"pho","name":"Pho"},{"param":"strawberries","name":"Strawberries"},{"param":"ratatouille","name":"Ratatouille"},{"param":"beef","name":"Beef"},{"param":"apple","name":"Apple"},{"param":"carbonara","name":"Carbonara"},{"param":"kimchi","name":"Kimchi"},{"param":"paella","name":"Paella"},{"param":"quesadilla","name":"Quesadilla"},{"param":"cod","name":"Cod"},{"param":"hamburger","name":"Hamburger"},{"param":"rabbit","name":"Rabbit"},{"param":"bruschetta","name":"Bruschetta"},{"param":"brie","name":"Brie"},{"param":"chili","name":"Chili"},{"param":"hotdog","name":"Hot Dog"},{"param":"catfish","name":"Catfish"},{"param":"fruit","name":"Fruit"},{"param":"lasagna","name":"Lasagna"},{"param":"icecream","name":"Ice Cream"},{"param":"charcuterie","name":"Charcuterie"},{"param":"ham","name":"Ham"},{"param":"popcorn","name":"Popcorn"}]')},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var s=t(1),i=t.n(s),r=t(9),n=t.n(r),c=(t(15),t(2)),o=t(3),h=t(4),p=t(6),m=t(5),l=t(8),d=t(10),u=(t(16),t(0)),j=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).startSearch=function(e){var a=e.target.value,t=d.filter((function(e){return e.name.match(new RegExp("^".concat(a.replace(/[`~!@#$%^&*()_|+=?;:,.<>{}[\]\\/]/gi,"")),"gi"))}));document.getElementById("search-results").classList.remove("hide"),""===a||0===a.length?document.getElementById("search-results").classList.add("hide"):s.setState({foodMatches:t}),s.searchDropdown(t)},s.searchDropdown=function(e,a){return Object(u.jsx)("li",{className:"search-results__result",id:e.param,onClick:function(e){s.props.setFood(e),s.fadeMainSearch()},children:e.name},e.param)},s.state={foodMatches:[]},s.startSearch=s.startSearch.bind(Object(h.a)(s)),s}return Object(o.a)(t,[{key:"fadeMainSearch",value:function(){document.getElementById("main-search").classList.add("fadeOut"),setTimeout((function(){document.getElementById("main-search").classList.add("hide")}),1e3)}},{key:"render",value:function(){return Object(u.jsx)("div",{id:"main-search",className:"main-search",style:{backgroundImage:"url(".concat(g,")")},children:Object(u.jsxs)("div",{className:"main-search--dark",children:[Object(u.jsxs)("div",{className:"main-search--center",children:[Object(u.jsx)("h1",{className:"main-search__logo",children:Object(u.jsx)("img",{src:"./images/pantry-white.svg",alt:"Pantry",width:"200",height:"59"})}),Object(u.jsx)("h2",{className:"main-search__header",children:"What are we cooking today?"}),Object(u.jsxs)("form",{className:"search-bar",children:[Object(u.jsxs)("div",{className:"search-bar__field",children:[Object(u.jsx)("input",{id:"search-bar__input",className:"search-bar__input",onChange:this.startSearch,type:"text",placeholder:"Search for a wine pairing"}),Object(u.jsx)("div",{className:"search-bar__button",children:Object(u.jsx)("img",{src:"./images/search.svg",alt:"search",width:"20",height:"20"})})]}),Object(u.jsx)("div",{className:"search-results hide",id:"search-results",children:Object(u.jsx)("ul",{className:"search-results__dropdown",id:"search-results__dropdown",children:this.state.foodMatches.length?this.state.foodMatches.map(this.searchDropdown):Object(u.jsx)("li",{className:"search-results__noresult",children:"No results"})})})]})]}),Object(u.jsx)("p",{className:"main-search__footer",children:Object(u.jsx)("a",{className:"main-search__footer-link",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})})]})})}}]),t}(s.PureComponent),g=l[Math.floor(l.length*Math.random())],b=(t(18),function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).listSteps=function(e,a){if(0!==e.name.length)return Object(u.jsx)("li",{children:e.name},"step"+a)},e.listMoreSteps=function(e,a){return e.steps.map((function(e,a){if(0!==e.length)return Object(u.jsx)("li",{children:e.step},"step"+a)}))},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"pairings",className:"pairings "+this.props.pairings.length!==void 0&&0!==this.props.pairings.length?"show":"hide",children:[Object(u.jsx)("div",{className:"pairings__header",children:Object(u.jsx)("div",{className:"pairings__header--max-width",children:Object(u.jsx)("div",{className:"pairings__logo",children:Object(u.jsx)("img",{src:"./images/pantry.svg",alt:"Pantry",width:"100",height:"30"})})})}),Object(u.jsx)("div",{className:"pairings-description",children:Object(u.jsxs)("div",{className:"pairings-description--max-width",children:[Object(u.jsx)("h2",{className:"pairing-description__header",children:this.props.foodSelection}),Object(u.jsxs)("div",{className:"pairing-description__text",children:[this.props.pairings.pairingText?this.props.pairings.pairingText:Object(u.jsxs)("p",{children:["No wine pairings found for ",Object(u.jsx)("span",{className:"pairing-description__food-selection",children:this.props.foodSelection}),"."]}),void 0!==this.props.pairings.pairedWines&&0!==this.props.pairings.pairedWines.length?Object(u.jsxs)("p",{className:"pairing-description__wine-suggestions",children:[Object(u.jsx)("b",{children:"Suggestions: "}),this.props.pairings.pairedWines.join(", ")]}):null]},this.props.foodSelection+"pairings-text"),Object(u.jsx)("img",{className:"pairing__dish-image",src:"https://spoonacular.com/recipeImages/".concat(this.props.id,"-480x360.jpg")})]})}),Object(u.jsx)("div",{className:"recipe",children:Object(u.jsxs)("div",{className:"recipe--max-width",children:[Object(u.jsx)("h2",{className:"recipe-header",children:"Recipe"}),Object(u.jsx)("h3",{className:"recipe-dish",children:this.props.dish}),Object(u.jsxs)("div",{className:"recipe--content",children:[Object(u.jsx)("div",{className:"recipe-ingredients"}),Object(u.jsx)("div",{className:"recipe-steps",children:Object(u.jsxs)("ol",{children:[this.props.dishRecipe.map(this.listSteps),this.props.dishRecipe.map(this.listMoreSteps)]})})]})]})}),Object(u.jsx)("a",{className:"pairings__footer",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})]})}}]),t}(s.PureComponent)),f=(t(19),function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=a.call(this,e)).state={foodParam:"",foodSelection:"",pairings:[],dish:"",id:"",dishRecipe:[]},s.setFood=s.setFood.bind(Object(h.a)(s)),s}return Object(o.a)(t,[{key:"setFood",value:function(e){this.setState({foodParam:e.target.id,foodSelection:e.target.innerHTML}),this.getPairings(e.target.id)}},{key:"getPairings",value:function(e){var a=this,t="b329f47d9908439e9984c31a93c553b0";fetch("https://api.spoonacular.com/food/wine/pairing?food=".concat(e,"&apiKey=").concat(t)).then((function(e){return e.json()})).then((function(e){a.setState({pairings:e})})),fetch("https://api.spoonacular.com/recipes/complexSearch?titleMatch=".concat(e,"&sort=random&number=1&apiKey=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a.setState({id:e.results[0].id,dish:e.results[0].title}),fetch("https://api.spoonacular.com/recipes/".concat(e.results[0].id,"/analyzedInstructions?apiKey=b329f47d9908439e9984c31a93c553b0"))})).then((function(e){return e.json()})).then((function(e){a.setState({dishRecipe:e})}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{setFood:this.setFood.bind(this)}),this.state.pairings&&this.state.dishRecipe?Object(u.jsx)(b,{pairings:this.state.pairings,dish:this.state.dish,id:this.state.id,dishRecipe:this.state.dishRecipe,foodSelection:this.state.foodSelection}):null]})}}]),t}(s.PureComponent));n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b093455e.chunk.js.map