import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <div>
        <h3>What is the purpose of react router ?</h3>
        <p>
          ReactJS Router is mainly used for developing Single Page Web
          Applications. React Router is used to define multiple routes in the
          application.Routing is a process in which a user is directed to
          different pages based on their action or request. When a user types a
          specific URL into the browser, and if this URL path matches any
          'route' inside the router file, the user will be redirected to that
          particular route.React Router plays an important role to display
          multiple views in a single page application. Without React Router, it
          is not possible to display multiple views in React applications.
        </p>
        <p>
          React Router is a standard library system built on top of the React
          and used to create routing in the React application using React Router
          Package. It provides the synchronous URL on the browser with data that
          will be displayed on the web page. It maintains the standard structure
          and behavior of the application and mainly used for developing single
          page web applications. Most of the social media websites like
          Facebook, Instagram uses React Router for rendering multiple views.
        </p>
      </div>
      <div>
        <h3>What is UseRef Hook and How does it work?</h3>
        <p>
          The useRef Hook allows you to persist values between renders.It can be
          used to store a mutable value that does not cause a re-render when
          updated.It can be used to access a DOM element directly.If we tried to
          count how many times our application renders using the useState Hook,
          we would be caught in an infinite loop since this Hook itself causes a
          re-render.To avoid this, we can use the useRef Hook.
        </p>
        <p>
          useRef() only returns one item. It returns an Object called current.
          When we initialize useRef we set the initial value: useRef(0).The
          useRef Hook can also be used to keep track of previous state values.
          This is because we are able to persist useRef values between
          renders.In the useEffect, we are updating the useRef current value
          each time the inputValue is updated by entering text into the input
          field.
        </p>
      </div>
      <div>
        <h3>How does Context Api work?</h3>
        <p></p>
      </div>
    </div>
  );
};

export default Blog;
