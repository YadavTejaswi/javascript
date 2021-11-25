
for(i=1;i<=7;i++){
    for(j=1;j<=7;j++){
        if(i==1 || j==3){
            document.write(" * ");
        }else{
            document.write("&nbsp; &nbsp")
            document.write(" ");
        }
    }
    document.write("<br/>");

}


////////////////////////////////////////
document.write("<br/>"); document.write("<br/>");

for(i=1;i<=7;i++){
  for(j=1;j<=14;j++){
      if(j==1 && i<=4 || j==7 || i==4 || j==14 && i<=4){
          document.write("*");
      }else{
          document.write("&nbsp")
          document.write(" ");
      }
  }
  document.write("<br/>");

}

