(this.webpackJsonppantry=this.webpackJsonppantry||[]).push([[0],[,,,,,,,,function(a){a.exports=JSON.parse('["./images/wine1.jpg","./images/wine2.jpg","./images/wine3.jpg","./images/wine4.jpg","./images/wine5.jpg","./images/wine6.jpg"]')},,function(a){a.exports=JSON.parse('[{"param":"cheese","name":"Cheese"},{"param":"burger","name":"Burger"},{"param":"cheeseburger","name":"Cheeseburger"},{"param":"steak","name":"Steak"},{"param":"oysters","name":"Oysters"},{"param":"pizza","name":"Pizza"},{"param":"chicken","name":"Chicken"},{"param":"clams","name":"Clams"},{"param":"mussels","name":"Mussels"},{"param":"taco","name":"Taco"},{"param":"sushi","name":"Sushi"},{"param":"pasta","name":"Pasta"},{"param":"salad","name":"Salad"},{"param":"cake","name":"Cake"},{"param":"curry","name":"Curry"},{"param":"salmon","name":"Salmon"},{"param":"lamb","name":"Lamb"},{"param":"shrimp","name":"Shrimp"},{"param":"fish","name":"Fish"},{"param":"duck","name":"Duck"},{"param":"chocolate","name":"Chocolate"},{"param":"turkey","name":"Turkey"},{"param":"tuna","name":"Tuna"},{"param":"caviar","name":"Caviar"},{"param":"noodle","name":"Noodle"},{"param":"pie","name":"Pie"},{"param":"pork","name":"Pork"},{"param":"pho","name":"Pho"},{"param":"strawberries","name":"Strawberries"},{"param":"ratatouille","name":"Ratatouille"},{"param":"beef","name":"Beef"},{"param":"apple","name":"Apple"},{"param":"carbonara","name":"Carbonara"},{"param":"kimchi","name":"Kimchi"},{"param":"quesadilla","name":"Quesadilla"},{"param":"cod","name":"Cod"},{"param":"hamburger","name":"Hamburger"},{"param":"rabbit","name":"Rabbit"},{"param":"bruschetta","name":"Bruschetta"},{"param":"brie","name":"Brie"},{"param":"chili","name":"Chili"},{"param":"hotdog","name":"Hot Dog"},{"param":"catfish","name":"Catfish"},{"param":"shellfish","name":"Shellfish"},{"param":"fruit","name":"Fruit"},{"param":"lasagna","name":"Lasagna"},{"param":"icecream","name":"Ice Cream"},{"param":"charcuterie","name":"Charcuterie"},{"param":"ham","name":"Ham"},{"param":"popcorn","name":"Popcorn"},{"param":"crab","name":"Crab"},{"param":"lobster","name":"Lobster"},{"param":"halibut","name":"Halibut"},{"param":"hummus","name":"Hummus"},{"param":"chorizo","name":"Chorizo"},{"param":"salsa","name":"Salsa"},{"param":"stew","name":"Stew"},{"param":"scallops","name":"Scallops"},{"param":"mango","name":"Mango"},{"param":"guacamole","name":"Guacamole"},{"param":"oranges","name":"Oranges"},{"param":"blueberries","name":"Blueberries"},{"param":"grapes","name":"Grapes"},{"param":"cheddar","name":"Cheddar"},{"param":"tiramisu","name":"Tiramisu"},{"param":"ramen","name":"Ramen"},{"param":"omelette","name":"Omelette"},{"param":"pineapple","name":"Pineapple"},{"param":"jambalaya","name":"Jambalaya"},{"param":"fajitas","name":"Fajitas"},{"param":"gnocchi","name":"Gnocchi"},{"param":"parfait","name":"Parfait"},{"param":"bibimbap","name":"Bibimbap"},{"param":"bulgogi","name":"Bulgogi"},{"param":"naan","name":"Naan"},{"param":"tonkatsu","name":"Tonkatsu"},{"param":"burrito","name":"Burrito"},{"param":"biryani","name":"Biryani"},{"param":"wonton","name":"Wonton"},{"param":"nachos","name":"Nachos"},{"param":"quiche","name":"Quiche"},{"param":"ricotta","name":"Ricotta"},{"param":"risotto","name":"Risotto"},{"param":"mozarella","name":"Mozarella"},{"param":"paella","name":"Paella"},{"param":"mousse","name":"Mousse"},{"param":"tamale","name":"Tamale"},{"param":"flam","name":"Flan"}]')},,,,,function(a,e,r){},function(a,e,r){},,function(a,e,r){},function(a,e,r){},function(a,e,r){"use strict";r.r(e);var s=r(1),t=r.n(s),i=r(9),n=r.n(i),c=(r(15),r(2)),m=r(3),p=r(4),o=r(6),h=r(5),l=r(8),d=r(10),u=(r(16),r(0)),j=function(a){Object(o.a)(r,a);var e=Object(h.a)(r);function r(a){var s;return Object(c.a)(this,r),(s=e.call(this,a)).startSearch=function(a){var e=a.target.value,r=d.filter((function(a){return a.name.match(new RegExp("".concat(e.replace(/[`~!@#$%^&*()_|+=?;:,.<>{}[\]\\/]/gi,"")),"gi"))}));s.searchResults.current.classList.remove("hide"),""===e||0===e.length?s.searchResults.current.classList.add("hide"):s.setState({foodMatches:r}),s.searchDropdown(r)},s.searchDropdown=function(a,e){return Object(u.jsx)("li",{className:"search-results__result",id:a.param,onClick:function(a){s.props.setFood(a)},children:a.name},a.param)},s.state={foodMatches:[]},s.searchResults=t.a.createRef(),s.startSearch=s.startSearch.bind(Object(p.a)(s)),s}return Object(m.a)(r,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"main-search",className:this.props.foodParam.length?"main-search fadeOut":"main-search",style:{backgroundImage:"url(".concat(g,")")},children:Object(u.jsxs)("div",{className:"main-search--dark",children:[Object(u.jsxs)("div",{className:"main-search--center",children:[Object(u.jsx)("h1",{className:"main-search__logo",children:Object(u.jsx)("img",{src:"./images/pantry-white.svg",alt:"Pantry",width:"200",height:"59"})}),Object(u.jsx)("h2",{className:"main-search__header",children:"What are we cooking today?"}),Object(u.jsxs)("form",{className:"search-bar",children:[Object(u.jsxs)("div",{className:"search-bar__field",children:[Object(u.jsx)("input",{id:"search-bar__input",className:"search-bar__input",onChange:this.startSearch,type:"text",placeholder:"Search for a wine pairing"}),Object(u.jsx)("div",{className:"search-bar__button",children:Object(u.jsx)("img",{src:"./images/search.svg",alt:"search",width:"20",height:"20"})})]}),Object(u.jsx)("div",{className:"search-results hide",ref:this.searchResults,id:"search-results",children:Object(u.jsx)("ul",{className:"search-results__dropdown",id:"search-results__dropdown",children:this.state.foodMatches.length?this.state.foodMatches.map(this.searchDropdown):Object(u.jsx)("li",{className:"search-results__noresult",children:"No results"})})})]})]}),Object(u.jsx)("p",{className:"main-search__footer",children:Object(u.jsx)("a",{className:"main-search__footer-link",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})})]})})}}]),r}(s.PureComponent),g=l[Math.floor(l.length*Math.random())],b=(r(18),function(a){Object(o.a)(r,a);var e=Object(h.a)(r);function r(){var a;Object(c.a)(this,r);for(var s=arguments.length,t=new Array(s),i=0;i<s;i++)t[i]=arguments[i];return(a=e.call.apply(e,[this].concat(t))).listSteps=function(a,e){return a.steps.map((function(a,e){var r=[];return 0!==a.length&&r.push(a.step),Object(u.jsx)("li",{children:r.join("")},"ingredient"+e)}))},a.listIngredients=function(a,e){return a.steps.map((function(a,e){return a.ingredients.map((function(a,e){return 0!==a.length?Object(u.jsx)("li",{children:a.name},"ingredient"+e):null}))}))},a}return Object(m.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("div",{id:"pairings",className:"pairings "+this.props.pairings.length!==void 0&&0!==this.props.pairings.length?"show":"hide",children:[Object(u.jsx)("div",{className:"pairings__header",children:Object(u.jsx)("div",{className:"pairings__header--max-width",children:Object(u.jsx)("div",{className:"pairings__logo",children:Object(u.jsx)("img",{src:"./images/pantry.svg",alt:"Pantry",width:"100",height:"30"})})})}),Object(u.jsx)("div",{className:"pairings-description",children:Object(u.jsxs)("div",{className:"pairings-description--max-width",children:[Object(u.jsx)("h2",{className:"pairing-description__header",children:this.props.foodSelection}),Object(u.jsxs)("div",{className:"pairing-description__text",children:[this.props.pairings.pairingText?this.props.pairings.pairingText:Object(u.jsxs)("p",{children:["No wine pairings found for ",Object(u.jsx)("span",{className:"pairing-description__food-selection",children:this.props.foodSelection}),"."]}),void 0!==this.props.pairings.pairedWines&&0!==this.props.pairings.pairedWines.length?Object(u.jsxs)("p",{className:"pairing-description__wine-suggestions",children:[Object(u.jsx)("b",{children:"Suggestions: "}),this.props.pairings.pairedWines.join(", ")]}):null]},this.props.foodSelection+"pairings-text"),Object(u.jsx)("img",{alt:this.props.dish,className:"pairing__dish-image",src:"https://spoonacular.com/recipeImages/".concat(this.props.id,"-480x360.jpg")})]})}),Object(u.jsx)("div",{className:"recipe",children:Object(u.jsxs)("div",{className:"recipe--max-width",children:[Object(u.jsx)("h2",{className:"recipe__header",children:"Recipe"}),Object(u.jsx)("h3",{className:"recipe__dish",children:this.props.dish}),Object(u.jsxs)("div",{className:"recipe__content",children:[Object(u.jsxs)("div",{className:"recipe__ingredients",children:[Object(u.jsx)("h4",{className:"recipe__ingredients-header",children:"Ingredients"}),Object(u.jsx)("ul",{children:this.props.dishRecipe.map(this.listIngredients)})]}),Object(u.jsxs)("div",{className:"recipe__steps",children:[Object(u.jsx)("h4",{className:"recipe__steps-header",children:"Steps"}),Object(u.jsx)("ol",{children:this.props.dishRecipe.map(this.listSteps)})]})]})]})}),Object(u.jsx)("a",{className:"pairings__footer",href:"https://github.com/mariatnguyen",target:"_blank",rel:"noreferrer",children:"mariatnguyen @ Github"})]})}}]),r}(s.PureComponent)),f=(r(19),function(a){Object(o.a)(r,a);var e=Object(h.a)(r);function r(a){var s;return Object(c.a)(this,r),(s=e.call(this,a)).state={foodParam:"",foodSelection:"",pairings:[],dish:"",id:"",dishRecipe:[]},s.setFood=s.setFood.bind(Object(p.a)(s)),s}return Object(m.a)(r,[{key:"setFood",value:function(a){this.setState({foodParam:a.target.id,foodSelection:a.target.innerHTML}),this.getPairings(a.target.id)}},{key:"getPairings",value:function(a){var e=this,r="b329f47d9908439e9984c31a93c553b0";fetch("https://api.spoonacular.com/food/wine/pairing?food=".concat(a,"&apiKey=").concat(r)).then((function(a){return a.json()})).then((function(a){e.setState({pairings:a})})),fetch("https://api.spoonacular.com/recipes/complexSearch?titleMatch=".concat(a,"&sort=random&number=1&apiKey=").concat(r),{method:"GET"}).then((function(a){return a.json()})).then((function(a){return e.setState({id:a.results[0].id,dish:a.results[0].title}),fetch("https://api.spoonacular.com/recipes/".concat(a.results[0].id,"/analyzedInstructions?apiKey=").concat(r))})).then((function(a){return a.json()})).then((function(a){e.setState({dishRecipe:a})}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{setFood:this.setFood.bind(this),foodParam:this.state.foodParam}),this.state.pairings&&this.state.dishRecipe?Object(u.jsx)(b,{pairings:this.state.pairings,dish:this.state.dish,id:this.state.id,dishRecipe:this.state.dishRecipe,foodSelection:this.state.foodSelection}):null]})}}]),r}(s.PureComponent));n.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.bb043877.chunk.js.map