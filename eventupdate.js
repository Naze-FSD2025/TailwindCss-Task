<!-- JavaScript -->

let seatDropdown = document.getElementById("seats");

for(let i=1; i<=23; i++){

let option = document.createElement("option");
option.value = i;
option.text = i;

seatDropdown.appendChild(option);

}

