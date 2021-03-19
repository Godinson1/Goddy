import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Message from "./Message";
import Table from "./Table";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Table />
      <Message />
    </div>
  );
}
