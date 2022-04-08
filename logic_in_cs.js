const textsLogic = {
  readme: {
    Overview: `
    I felt the need of having a solid background in Discrete Math and Logic for
    Computer Science in the early 90's, when I discovered two classics in the area: "Laws of Programming" (Tony Hoare) and "Formal Languages and their Relation to
    Automata" (Hopcroft & Hullmann, 1969). Later on, I had the same experience
    with Category Theory. Discrete Math, Logic and Category Theory were languages needed
    if you wanted access to the classics. A lot of Category Theory can be grasped and experimented in a practical way if you enjoy Functional Programming.
    For the working programmer, the
    need for logic arises when writing assertions before and after the execution of
    any program fragment, usually called pre and post-conditions or Hoare triples.
    You can use testing to see if these conditions are met in some cases, proofs if
    they are met in all cases. And if you want a machine to help you with these proofs,
    then you just found out the need of Theorem Proving.
    `,
    ["Category Theory"]: `
      In its simplest form, Category Theory can be understood as a logic of functions
      and composition of functions. Thus it has a lot to do with Functional Programming
      and Higher Order Functions. In the 90's it was used heavily in Computer Science
      as a tool for the semantics of computation, but more recently it found its way in the
      practice of the working programmer or in the life of the working software developer. "Categories for Programmers" (Bartosz Milewski) and "Composing Software" (Eric Elliot) are excellent references. Eric Elliot, for instance,  emphasizes that the essence of Software Development is composition and introduces in his book a great collection of functional programming and categorical tools for the modern web software developer.
    `,
    ["Hoare Logic"]: `
      I have taught Hoare Logic in the university for a number of years. I also
      carried out some research with it from the theoretical point of view (using 
      Category Theory) and did a number of experiments with it in the context 
      of Program Verification and Theorem Proving.
      Tony Hoare developed Hoare Logic in the sixties. After around four decades, a number of tools based on it were available
      for software developers, including SPEC#, Java Modeling Language, Key Project, Daphny and a number of implementations within Isabelle/HOL and COQ.
    `,
    ["Theorem Proving"]: `
      With respect to Interactive Theorem Proving,  I have experimented a bit with COQ and use extensively Isabelle/HOL for teaching and research experiments, most notably in the areas of formal semantics and program verification with Hoare Logic.
      Amongst other approaches, I prefer Isabelle/HOL for two reasons: firstly, it has a nice language for writing proofs which is very similar to the informal English we use in
      handwritten demonstrations. Secondly, there is also a powerful collection of libraries to help in automating those proofs, keeping the necessity of human collaboration to a minimum (as long as you are a seasoned user).
      `,
  },
  images: [
    "./images/logic_in_cs.jpg",
    "./images/category_programmers.jpg",
    "./images/hoare_logic.png",
    "./images/isabelle.jpg",
  ],
};

export { textsLogic };
