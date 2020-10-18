var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
   for (const funcionarios of usuarios) {
       const {nome , habilidades} = funcionarios
     console.log(`O ${nome} possui as habilidades:${habilidades.join(", ")}`);
   }

   //O Diego possui as habilidades: Javascript, ReactJS, Redux
   // O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir