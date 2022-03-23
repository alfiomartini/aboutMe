const texts = {
  overview: `
   I felt the need of having a solid background in Discrete Math and Logic for
   Computer Science in the early 90's, when I discovered two classics in the area: "Laws of Programming" (Tony Hoare) and "Formal Languages and their Relation to
   Automata" (Hopcroft & Hullmann, 1969). I could simply no read them, let alone understand
   them. As if they were written in Latin or Greek. Later, I had the same experience
   with Category Theory. Discrete Math, Logic and Category Theory were languages needed
   if you wanted access to the classics. Category Theory is hard, and it is a kind of
   logic of arrows, a logic for functions. A lot of Category theory theory can be grasped and experimented in a practical way if you enjoy Functional Programming.
   For programmers interested in Category Theory, there is "Categories for Programmers"
   (Bartosz Milewski) and if you are a JavaScript Software Developer, there is the excellent "Composing Software" (Eric Elliot). For the practical programmer, the
   need for logic arises when writing assertions before and after the execution of
   any program fragment, usually called pre and post-conditions or Hoare triples.
   You can use testing to see if these conditions are met in some cases, proofs if
   they are met in all cases. And if you want a machine to help you with these proof,
   then you just found out the are of Theorem Proving.
  `,
  catTheory: `
    In its simplest form, Category Theory can be understood as a logic of functions
    and composition of functions. Thus it has a lot to do with Functional Programming
    and Higher Order functions. It the 90's it was used heavily in Computer Science
    as a tool for semantics of computation, but more recently found its way in the
    practice of thw working programmer or working software developer. See "Categories for Programmers" (Bartosz Milewski) and "Composing Software" with JavaScript (Eric Elliot). Eric Elliot emphasizes that the essence of Software Development is composition and introduces in its book a great collection of functional programming and categorical tools for the modern software developer.
  `,
  hoareLogic: `
    I have taught Hoare Logic in the university for a number of years. I also
    carried out some research with it from the theoretical point of view (using 
    category theory) and did a number of experiments with it in the context 
    of program verification and theorem proving.
    Hoare Logic is a both a logic of specification and a logic for carrying out
    proofs of correctness of these very specifications. As a specification it
    consists of three components: two assertions and a program (fragment). One
    assertion written before the program (pre-condition) and the other after the
    program (post-condition). That's why Hoare Logic specifications are also called Hoare Triples. Given a state (program variables and their values),
    where the pre-condition is true, if after the program executes, the post-condition
    is also true, then the program is correct in relation to that specification in that given state. This can be checked using testing. But to show that the program is correct with respect to all states, requires proof. Tony Hoare developed Hoare Logic in the sixties. After around four decades, a number of tools based on it were available
    for software developers, including SPEC#, JML, Key, Daphny and a number of implementations within Isabelle/HOL and COQ.
  `,
  theoProving: `
  interactive theorem prover is a software tool to assist with the development of formal proofs by human-machine collaboration. There are a great number of tools 
  available for programmers and mathematicians alike. I have experimented a bit with COQ and use extensively Isabelle/HOL for teaching and research experiments, most notably in the areas of formal semantics and program verification with Hoare Logic.
  Amongst other approaches, I prefer Isabelle/HOL for two reasons: it has a nice language for writing proofs which is very similar to the informal english we use in
  handwritten demonstrations and also a powerful collection of libraries to help in automating those proofs, keeping the necessity of human collaboration to a minimum (if you are a seasoned user).
  `,
};
