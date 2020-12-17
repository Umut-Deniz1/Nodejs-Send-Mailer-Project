

    var idV,nameV,surnameV,emailV;
    function Ready(){
        idV = document.getElementById('id').value;
        nameV = document.getElementById('name').value;
        surnameV = document.getElementById('surname').value;
        emailV = document.getElementById('email').value;
    }

    document.getElementById('insert').onclick = function (){
        Ready();
        firebase.database().ref('user/' + idV).set({
            NameOfUser:nameV,
            ID:idV,
            Surname:surnameV,
            Email:emailV
        });
        alert("gonderildi1");
    }
