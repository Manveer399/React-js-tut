//ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))


/*
function MainContent() {
  return (
    <h1>I'm learning React!</h1>
  )
}
*/

/*
ReactDOM.render(<ul>
  <li>One</li>
  <li>Two</li>
</ul>,
   document.getElementById("root"))
*/

/*
ReactDOM.render(
<div>
  <MainContent />
</div>
,document.getElementById("root"))
*/

/*
const div = document.getElementById("root");
const h1 = document.createElement("h1");

h1.textContent= "Hello world!";
h1.className = "header";

div.append(h1);
console.log(h1);

const element = <h1>Hello, Everyone</h1>
console.log(element)
ReactDOM.render(element, document.getElementById("root"))
*/

/*jsx can return only a single parent element . hence wrapping child element inside a single div allow us to
render multiple child togehter*/
/*
ReactDOM.render(
  <div>
    <h1>This is jsx</h1>
    <p>This is a paragraph</p>
  </div>
  ,
   document.getElementById("root")
   )*/

/* you can use a variable to store the JSX content*/
/*
const page = (
  <div>
    <h1>This is jsx</h1>
    <p>This is a paragraph</p>
  </div>
)
ReactDOM.render(
  
  page,
   document.getElementById("root")
   )
*/

//challenge 
/*
const navbar = (
  <nav>
    <h1>website</h1>
    <ul>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
)

ReactDOM.render(
  navbar,
  document.querySelector("#root")
)
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////

/* what happens if we try to append JSX to our div#root using .append() instead of ReactDOM*/

// returns [object Object]
/*
a string representation of a js object 
*/ 

/*
const content = (
  <div>
    <h1>Hey</h1>
    <p>This is a paragraph</p>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <h2>Bye</h2>
  </div>
)

const div = document.querySelector("#root")
div.append(JSON.stringify(content));
*/

/*
{"type":"div","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"Hey"},"_owner":null,"_store":{}},{"type":"p","key":null,"ref":null,"props":{"children":"This is a paragraph"},"_owner":null,"_store":{}},{"type":"ul","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"Pricing"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"About"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Contact"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}},{"type":"h2","key":null,"ref":null,"props":{"children":"Bye"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}
*/

//Reasons this shows up
/*
jsx returns plain js objects . has nothing to do with dom not recognised by browser however
reacdom can take the object and render into real DOM element that the browser can interpret/understand
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
