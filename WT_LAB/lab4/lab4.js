
const bike = {
    company: "KAWASAKI NINJA",
    model: "H2R",
    price: "₹60 lac",
    color: "BLACK",
    type: "BIKE",
}
const car = {
    company: "FORD",
    model: "Mustang GT",
    price: "₹68 lac",
    color: "BLACK",
    type: "CAR",
}
const mobile = {
    company: "iphone",
    model: "13 pro max",
    price: "₹1.4 lac",
    color: "BLUE",
    type: "SMARTPHONE",
}
value = "";
function call(value) {
    console.log(value);
    
    switch (value) {
        case "car":
            for (i in car) {
                tr = document.createElement("tr");
                const trkey = document.createElement("td");
                const rvalue = document.createElement("td");
                trkey.textContent = i;
                rvalue.textContent = car[i];

                tr.appendChild(trkey);
                tr.appendChild(rvalue);

                document.getElementById("id1").appendChild(tr);
            }
            break;
        case "bike":
            for (i in bike) {
                tr = document.createElement("tr");
                const trkey = document.createElement("td");
                const rvalue = document.createElement("td");
                trkey.textContent = i;
                rvalue.textContent = bike[i];

                tr.appendChild(trkey);
                tr.appendChild(rvalue);

                document.getElementById("id1").appendChild(tr);
            }
            break;
        case "mobile":
            for (i in mobile) {
                tr = document.createElement("tr");
                const trkey = document.createElement("td");
                const rvalue = document.createElement("td");
                trkey.textContent = i;
                rvalue.textContent = mobile[i];

                tr.appendChild(trkey);
                tr.appendChild(rvalue);

                document.getElementById("id1").appendChild(tr);
            }
            break;
    }
}