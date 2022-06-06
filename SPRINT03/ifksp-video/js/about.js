
/*
   <tbody>
                    <tr class="table-success">
                        <td>1</td>
                        <td>Kiss</td>
                        <td>János</td>
                        <td>55</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-info"><i class="fas fa-cart-arrow-down"></i></button>
                                <button class="btn btn-danger btn-sm"><i class="fa-solid fa-trash-can"></i></i></button>
                            </div>
                        </td>
                    </tr>

        </div>
        </td>
        </tr>
        </tbody>
         */


let users = [
    { surname: "Berger", firstname: "Whitney", age: 22 }
    { surname: "Nagy", firstname: "Árpi", age: 24 }
    { surname: "Jack", firstname: "Vándor", age: 26 }
    { surname: "Piroska", firstname: "Kovács", age: 14 }
    { surname: "Simon", firstname: "Nagy", age: 45 }
];
let tableBody = document.querySelector("#userTable tbody");
for (let k in users) { 
   let tr = document.createElement("tr");
   let td = document.createElement("td");
   td.innerHTML = parseInt(k)+1;
   tr.appendChild(td);
   tableBody.appendChild(tr);
}