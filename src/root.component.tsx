import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

export default function Root(props) {
  return (
    <Router>
      <ul>
        <li>
          <Link to={"/"}>Welcome</Link>
        </li>
        <li>
          <Link to={"/test"}>Test</Link>
        </li>
        <li>
          <Link to={"/test2"}>Test2</Link>
        </li>
        {/*<li>*/}
        {/*  <Link to={'/test3'}>Test3</Link>*/}
        {/*</li>*/}
      </ul>
    </Router>
  );
}
