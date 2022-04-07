const textsWebDev = {
  readme: {
    Overview: `
    I started with web development by pure chance in the beginning of 2020.
    Learned the basics of Python and used Flask to build my first web sites.
    It was a very smooth beginning but I struggled a lot of CSS, especially
    when I first met the need to work with position, float and display properties like flex and grid. You need a working knowledge of HTML to use well 
    those much needed containers.CSS grids are one of the most powerful and useful concepts for frontend programmers. It also took me a lot of effort
    to use naturally async functions. The need for them arises everywhere.
    But I cannot emphasize enough that the real foundation for any web developer is the
    triad HTML/CSS/JavaScript.
    `,
    Flask: `I started using Flask while taking
    a CS50 course at Harvard. I strongly recommend this
    framework for everyone interested in starting web
    programming in general.  It is a more accessible framework for new developers 
    since you 
    can build a web application quickly using only a single Python file. 
    Frontend programming can be done using a specific template language that
    makes easy to generate dynamic HTML pages. However, in order to proper understand how Flask works, you need a solid knowledge of object oriented programming and decorators in Python.
    `,
    Django: `Like Flask, Django is a Python-based free and open-source web framework that follows (loosely) the model–template–views (MTV) architectural pattern. However, Django
    requires more technical experience and maturity with Python than Flask. I began using 
    it in the second half of 2020 and I quick realize that you have to be confident with
    object oriented programming, higher order programming and query sets in Python to feel comfortable with this framework. A basic knowledge of regular expressions is also helpful. There
    is also quite a lot of boilerplate code to generate before you even start coding your first routes and views. On the other hand,  creation of database models is much easier than in other frameworks.
    `,
    React: `
    React emphasizes the development of independent, reusable
    components, which are comprised with its own render logic and styling. It is my favorite tool for web development but it requires a solid understanding of JavaScript. Not on only of the language itself, but to fully appreciate React, one
    has to have some experience in building pure JavaScript applications which require state management and rerendering of the user interface (or parts of it) whenever 
    the state is updated. In this case, things can become messy quite fast and then 
    one can truly appreciate the use of a tool like React (or something similar, like
      Vue or Angular).
    `,
  },
  images: [
    "./images/web_programming.jpg",
    "./images/flask.png",
    "./images/django.png",
    "./images/react.jpg",
  ],
};

export { textsWebDev };
