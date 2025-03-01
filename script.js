document.addEventListener("DOMContentLoaded", () => {
    //all the code expected
    const itemInput = document.getElementById("txtItem");
    const addItemBtn = document.getElementById("purchaseBtn");
    const shoppingList = document.getElementById("shoppingList");

    let items = [
        {name:"laptop",purchased:false},
        {name:"xbox",purchased:false},
        {name:"pc",purchased:false},

    ];

    function renderList() {
        shoppingList.innerHTML="";//clear ui
        //uptade de list display
        items.forEach((item,index)=>{
            const li = document.createElement("li");
            li.innerHTML=`
                <span>${item.name}</span>
                <button onclick="deleteItem(${index})">💀</button>
                <button onclick="modifyItem(${index})">✏️</button>
            `;

            shoppingList.appendChild(li);
        });
        
    }

    window.deleteItem = (deleteIndex)=>{
        items.splice(deleteIndex, 1);
        renderList();
        console.log(items)
    }

    window.modifyItem = (modifyIndex) => {
        const newName = prompt("Ingrese el nuevo nombre del artículo:", items[modifyIndex].name);
        
        if (newName !== null && newName.trim() !== "") {
            items[modifyIndex].name = newName.trim();
            renderList();
        }
    };
    
    addItemBtn.addEventListener("click", () => {
        //registerin items
        let itemText = itemInput.value;
        if (itemInput == "") {
            alert("Item cannot be empty");
            return
        }

        items.push({name: itemText, purchased: false});
        renderList();
    })

    renderList();
});