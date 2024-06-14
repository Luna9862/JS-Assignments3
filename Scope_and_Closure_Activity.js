function outer(){
  let a = "26";
  let b = {number: 20};

    function inner(a,b) {
     console.log(a);
     console.log(b);

     a = "50";
     b.number = "44";
      console.log (a);
      console.log (b);

      b = 70;
      console.log (b)
    }
  
    inner(a,b);
  }
  
  outer();

