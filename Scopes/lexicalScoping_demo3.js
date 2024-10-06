var teacher="Sanket";
  
  function fun(){
    console.log(subject);//undefined because we  declared but Not defined
    var teacher ="Yash";
    var subject ="Javascript"
    teachingAssitant="Sarthak";
    console.log(teacher);//yash
    console.log(teachingAssitant);//Sarthak
  }

  fun();
  console.log(teacher);//sanket
  console.log(teachingAssitant);//sarthak called autoglobals
  