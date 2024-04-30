document.getElementById("submit").addEventListener("click", (event) => { 

    event.preventDefault();

    let firstName = document.getElementById("firstname").value; 
    let lastName = document.getElementById("lastname").value; 
    let phoneNumber = document.getElementById("phonenumber").value;

    if(firstName === "" || lastName === "" ||phoneNumber === "" ){
        document.getElementById("addtext").textContent = "fields cannot be empty! "; 
    }
    else{

        document.getElementById("addtext").textContent = "";
        
        let tableRow = document.createElement("tr");

        tableRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${phoneNumber}</td>
            <td>
                <button id="edit-button" onclick ="editRow(this)">Edit</button>
                <button id="delete-button" onclick="deleteRow(this)">Delete</button>
            </td>
        `;
    
        document.getElementById("tableBody").appendChild(tableRow); 
    }


}); 

 function editRow(button) { 

    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName("td"); 

    let firstName = cells[0].textContent;
    let lastName  = cells[1].textContent; 
    let phoneNumber = cells[2].textContent; 

    document.getElementById("firstname").value = firstName;
    document.getElementById("lastname").value = lastName;
    document.getElementById("phonenumber").value = phoneNumber;

    document.getElementById("addtext").textContent = `you are editing ${firstName}!` ;
    document.getElementById("submit").style.display = "none"

    document.getElementById("edit").addEventListener("click" , (e) => {
        e.preventDefault();
        cells[0].textContent =     document.getElementById("firstname").value;
        cells[1].textContent =     document.getElementById("lastname").value ;
        cells[2].textContent =     document.getElementById("phonenumber").value;
        document.getElementById("submit").style.display = "block";
    }); 



}






function deleteRow(button){ 

    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); 

    
}




