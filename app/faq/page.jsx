import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is React?",
      answer:
        "React is a powerful JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create large web applications that can change data without reloading the page. React's main goal is to be fast, scalable, and simple.",
    },
    {
      question: "How does React work?",
      answer:
        "React utilizes a virtual DOM, which is an in-memory representation of the actual DOM. When the state of a component changes, React updates the virtual DOM first, then it compares it to the real DOM and applies only the changes that are necessary. This efficient updating process improves performance and provides a smoother user experience.",
    },
    {
      question: "What are components in React?",
      answer:
        "Components are the building blocks of a React application. They are reusable pieces of UI that can be defined as either classes or functions. Each component can maintain its own state and can accept inputs called 'props'. This modularity allows developers to break down complex UIs into smaller, manageable parts.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX, or JavaScript XML, is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write HTML-like code directly within JavaScript, making it easier to visualize the UI structure. JSX gets compiled to React.createElement calls, enabling the creation of React elements in a more readable way.",
    },
    {
      question: "How do you manage state in React?",
      answer:
        "State management in React can be handled using various methods. The built-in useState and useReducer hooks are common for local state management within components. For larger applications, external libraries like Redux or MobX can be employed to manage global state across components, allowing for a more structured and predictable way of handling state.",
    },
    {
      question: "What is a higher-order component?",
      answer:
        "A higher-order component (HOC) is an advanced pattern in React. It is a function that takes a component and returns a new component, often used to share common functionality between components. HOCs can be utilized for cross-cutting concerns such as logging, access control, or data fetching, helping to keep the component logic clean and organized.",
    },
    {
      question: "What is the difference between props and state?",
      answer:
        "Props (short for properties) are immutable data that are passed from a parent component to a child component. They are used to configure a component and control its behavior. State, on the other hand, is mutable and managed within the component. It represents the current condition of the component and can change over time, triggering re-renders when updated.",
    },
    {
      question: "What are hooks in React?",
      answer:
        "Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Introduced in React 16.8, they allow for the use of state (useState) and side effects (useEffect) without writing class components. Hooks promote code reuse and can make your components easier to read and test.",
    },
    {
      question: "What is context in React?",
      answer:
        "Context is a feature in React that allows for global state management without having to pass props down manually through every level of the component tree. It provides a way to share values like themes or user information across components without prop drilling, making the code cleaner and more maintainable.",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-28 py-5">
      <h1 className="text-2xl font-bold text-center mb-5">
        Frequently Asked Questions
      </h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow transition hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold text-blue-600">
              {faq.question}
            </h2>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
