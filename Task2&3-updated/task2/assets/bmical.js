function calculateBmi() {
    var weight = document.bmiForm.weight.value
    var height = document.bmiForm.height.value
    
    if(weight > 0 && height > 0){	
    var finalBmi = weight/(height/100*height/100)
    document.getElementById("totalBmi").innerHTML =" your Bmi = "  +finalBmi;
    }
    else{
    alert("Please Fill in everything correctly");
    }
    }