import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs">
      <div className="blog">
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
      <div className="blog">
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
      <div className="blog">
        <h3>How does Context Api work?</h3>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on.The useContext accepts the value provided by
          React.createContext and then re-render the component whenever its
          value changes but you can still optimize its performance by using
          memoization.
        </p>
        <p>
          It makes it possible to pass data from parent to children nested deep
          down the component tree directly, instead of passing it down through a
          chain of props.Context API uses Context.It returns a consumer and a
          provider. Provider is a component that as it's names suggests provides
          the state to its children. It will hold the "store" and be the parent
          of all the components that might need that store. Consumer as it so
          happens is a component that consumes and uses the state.
        </p>
      </div>
    </div>
  );
};

export default Blog;
