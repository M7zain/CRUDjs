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
                <button id="edit-button">Edit</button>
                <button id="delete-button" onclick="deleteRow(this)">Delete</button>
            </td>
        `;
    
        document.getElementById("tableBody").appendChild(tableRow); 
    }


}); 






function deleteRow(button){ 

    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row); 

    
}




