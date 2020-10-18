function temHabilidade(skills,x) {

        if(skills.indexOf(x.toLowerCase()) === -1){
            console.log(false)
        }else{
            console.log(true)
        }
    
   }
   var skills = ["javascript", "reactJS", "react n  ative"];
   temHabilidade(skills, x='JAVASCRIPT' );
   
   