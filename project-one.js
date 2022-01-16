/*
const page = (
  <div>
    <img src="./react-logo.jpg" width="80px"/>
    <h1>Fun Facts about React</h1>
    <ul>
     <li>Was first released in 2013</li>
     <li>Was originally created by Jordan Walke</li>
     <li>Has well over 100k stars in Github</li>
     <li>IS maintained by Facebook</li>
     <li>Powers over thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)*/ //this is not flexible and difficult to maintain therefore it is best to make each part their own component

import Header from "./Header"

/* returns react element, this is considered a component */
/*
function TemporaryName(){
return(
  <div>
    <img src="./react-logo.jpg" width="80px"/>
    <h1>Fun Facts about React</h1>
    <ul>
     <li>Was first released in 2013</li>
     <li>Was originally created by Jordan Walke</li>
     <li>Has well over 100k stars in Github</li>
     <li>IS maintained by Facebook</li>
     <li>Powers over thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)
}

ReactDOM.render(
  <TemporaryName />,
  document.querySelector("#root")
)
*/

//import Header from "./Header"

function Footer(){
  return(
<footer>
        <small>2022 Manveer Development.All rights reserved.</small>
      </footer>
  )
}

function Content(){
  return (
  <div>
    <h1>Reasons Im excited to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>It is easy to get a job if you know React</li>
      </ol>
  </div>
  )
}


function Page(){
  return(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
  }

  ReactDOM.render(
    <Page />,
    document.querySelector("#root")
  )