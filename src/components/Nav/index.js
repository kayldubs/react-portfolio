import React from "react";

const categories = [
    {
      name: "Front end Projects",
      description:
        "Projects using front-end principles such as DOM manipulation and API's",
    },
    { name: "Full-Stack Projects", description: "Projects using the MERN Stack." },
  ];

  function categorySelected(name) {
      console.log(`${name} clicked`)
  }


function Nav() {

    return (
      <header>
          <h2>
              <a href='/'>
                  <span> Welcome to K.S Kayls Design</span>
              </a>
          </h2>
        <nav>
          <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
        </li>
        <li className='mx-2'>
        <a href="#portfolio">
          Portfolio
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
             <span onClick={() => categorySelected(category.name)}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
    </nav>
      </header>
    );
  }
  
  export default Nav;