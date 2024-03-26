import React from "react";
import Departments from "./config/departments";

function settings() {
  return (
    <div>
      <section>
        <header>My Business</header>
        <main>
          <Departments />
        </main>
      </section>
    </div>
  );
}

export default settings;
