var headData = ['Name', 'Status', 'Permission', 'Email', 'Phone Number'];

var InfoArray=[
    {name:'Paula Crawford' ,status:'active' ,permission:'Administator',email:'Paula@gmail.com',moblieNum:'917-949-5165'},
     {name:'Kevin Rosas' ,status:'Onboarding' ,permission:'Acounting',email:'Kevin@gmail.com',moblieNum:'936-415-1336'},
     {name:'Joelle Atkins' ,status:'active' ,permission:'Acounting',email:'Joelle@gmail.com',moblieNum:'470-335-1151'},
     {name:'Cason Atkinson' ,status:'active' ,permission:'Product Designer',email:'Cason@gmail.com',moblieNum:'848-387-0231'},
     {name:'Jazmin Adams' ,status:'active' ,permission:'Product Designer',email:'Jazmin @gmail.com',moblieNum:'873-332-9558'},
     {name:'Hudson Clay' ,status:'active' ,permission:'Human Resource',email:'Hudson @gmail.com',moblieNum:'512-124-1421'},
     {name: 'Aliana Reese',status:'active' ,permission:'Human Resource',email:'Aliana @gmail.com',moblieNum:'757-582-2903'},
     {name: 'Alijah Brown',status:'active' ,permission:'DevOps',email:'Alijah@gmail.com',moblieNum:'306-358-4766'},
     {name:'Charlotte Rush' ,status:'active' ,permission:'DevOps',email:'Charlotte@gmail.com',moblieNum:'865-743-8714'},
     {name:'Kaiser Ayers' ,status:'Onboarding',permission:'DevOps',email:'Kaiser@gmail.com',moblieNum:'209-720-9366'},
     {name:'Simone Santiago' ,status:'active' ,permission:'Hiring Maneger',email:'Simone@gmail.com',moblieNum:'909-451-2477'},
     {name: 'Beckham Atkinson',status:'active' ,permission:'Hiring Maneger',email:'Beckham@gmail.com',moblieNum:'909-451-2477'},
     {name:'Jazmin Prince' ,status:'active' ,permission:'Hiring Maneger',email:'Jazmin@gmail.com',moblieNum:'909-451-2477'},
     {name: 'Aron Wyatt',status:'active' ,permission:'Hiring Maneger',email:'Aron@gmail.com',moblieNum:'909-451-2477'},
     {name:'Liberty Mosley' ,status:'active' ,permission:'Customer success',email:'Liberty@gmail.com',moblieNum:'909-451-2477'},
     {name:'Rayden Shields' ,status:'active' ,permission:'Customer success',email:'Rayden@gmail.com',moblieNum:'206-739-9496'},
     {name: 'Analia Douglas',status:'active' ,permission:'Customer success',email:'Derek@gmail.com',moblieNum:'206-739-9496'},
     {name:'Derek Davis' ,status:'Onboarding' ,permission:'Acounting',email:'Analia@gmail.com',moblieNum:'206-739-9496'},
     {name:'Mia Young' ,status:'active' ,permission:'Acounting',email:'Mia@gmail.com',moblieNum:'206-739-9496'},
     {name:'Asher Estes' ,status:'active' ,permission:'Product Designer',email:'Asher@gmail.com',moblieNum:'206-739-9496'},
     {name:'Brittany Alvarez' ,status:'active' ,permission:'Product Designer',email:'Brittany@gmail.com',moblieNum:'206-739-9496'},
     {name:'Xavier Ford' ,status:'active' ,permission:'Human Resource',email:'Xavier@gmail.com',moblieNum:'206-739-9496'},
     {name:'Alexandra House' ,status:'active' ,permission:'Human Resource',email:'Alexandra@gmail.com',moblieNum:'865-743-8714'},
     {name:'Yehuda Rush' ,status:'active' ,permission:'DevOps',email:'Yehuda@gmail.com',moblieNum:'865-743-8714'},
     {name:'Maleah Watts',status:'active' ,permission:'DevOps',email:'Maleah@gmail.com',moblieNum:'865-743-8714'},
     {name:'Dakota Petersen' ,status:'Onboarding',permission:'DevOps',email:'Dakota@gmail.com',moblieNum:'865-743-8714'},
     {name: 'Fernanda Stewart',status:'active' ,permission:'Hiring Maneger',email:'Fernanda@gmail.com',moblieNum:'865-743-8714'},
     {name:'Nolan Villarreal' ,status:'active' ,permission:'Hiring Maneger',email:'Nolan@gmail.com',moblieNum:'512-124-1421'},
     {name:'Jazlyn Sanford' ,status:'active' ,permission:'Hiring Maneger',email:'Jazlyn@gmail.com',moblieNum:'512-124-1421'},
     {name:'Truett Ventura' ,status:'active' ,permission:'Hiring Maneger',email:'Truett@gmail.com',moblieNum:'512-124-1421'},
     {name:'Zora Crosby' ,status:'active' ,permission:'Customer success',email:'Zora@gmail.com',moblieNum:'512-124-1421'},
     {name:'Tristen Keller' ,status:'active' ,permission:'Customer success',email:'Tristen@gmail.com',moblieNum:'512-124-1421'},
     {name:'Logan Gonzalez' ,status:'active' ,permission:'Customer success',email:'Logan@gmail.com',moblieNum:'512-124-1421'},
     {name:'Ethan Duke' ,status:'Onboarding' ,permission:'Acounting',email:'Ethan@gmail.com',moblieNum:'512-124-1421'},
     {name:'Melani Jimenez' ,status:'active' ,permission:'Acounting',email:'Melani@gmail.com',moblieNum:'306-358-4766'},
     {name:'Silas Golden' ,status:'active' ,permission:'Product Designer',email:'Silas@gmail.com',moblieNum:'306-358-4766'},
     {name:'Giuliana Esparza' ,status:'active' ,permission:'Product Designer',email:'Giuliana@gmail.com',moblieNum:'306-358-4766'},
     {name:'Carl Macias' ,status:'active' ,permission:'Human Resource',email:'Carl@gmail.com',moblieNum:'306-358-4766'},
     {name:'Adley Chapman' ,status:'active' ,permission:'Human Resource',email:'Adley@gmail.com',moblieNum:'306-358-4766'},
     {name:'Knox Drake' ,status:'active' ,permission:'DevOps',email:'Knox@gmail.com',moblieNum:'306-358-4766'},
     {name:'Jayleen Garza' ,status:'active' ,permission:'DevOps',email:'Jayleen@gmail.com',moblieNum:'917-949-5165'},
     {name:'Jayleen Garza' ,status:'Onboarding',permission:'DevOps',email:'Jayleen@gmail.com',moblieNum:'917-949-5165'},
     {name:'Ellianna Goodman' ,status:'active' ,permission:'Hiring Maneger',email:'Ellianna@gmail.com',moblieNum:'917-949-5165'},
     {name:'Philip Huerta' ,status:'active' ,permission:'Hiring Maneger',email:'Philip@gmail.com',moblieNum:'917-949-5165'},
     {name:'Dulce Valencia' ,status:'active' ,permission:'Hiring Maneger',email:'Dulce@gmail.com',moblieNum:'917-949-5165'},
     {name: 'Dax Gonzales',status:'active' ,permission:'Hiring Maneger',email:'Dax@gmail.com',moblieNum:'470-335-1151'},
     {name: 'Hadley Green',status:'active' ,permission:'Customer success',email:'Hadley@gmail.com',moblieNum:'470-335-1151'},
     {name:'Anthony Newman' ,status:'active' ,permission:'Customer success',email:'Anthony@gmail.com',moblieNum:'470-335-1151'},
     {name: 'Oaklynn Reese',status:'active' ,permission:'Customer success',email:'Oaklynn@gmail.com',moblieNum:'470-335-1151'},
     {name: 'Alijah Hardy',status:'active' ,permission:'Customer success',email:'Alijah@gmail.com',moblieNum:'470-335-1151'}
]



// Function to render the table header
function RenderHead(headData) {
    return headData.map(function (head) {
        return `<th>${head}
                <div class="images">
                    <button class="headingButton" onClick="buttonNum('${head}')">
                        <img src="https://th.bing.com/th?id=OIP.pDmgA1bsIubxvKMWINXJpgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="10px" height="10px">
                    </button>
                    <button class="headingButton1" onClick="buttonNumReverse('${head}')">
                        <img src="https://th.bing.com/th?id=OIP.aEEk21LpU4JhD3fMOdAEvAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width="8px" height="8px">
                    </button>
                </div>
                </th>`
    }).join('');
}

document.getElementById('tableHead').innerHTML = `${RenderHead(headData)}<th>Action</th>`;

// Function to render the table body
function RenderData(InfoArrayData) {
    return InfoArrayData.map(function (item) {
        return `
            <tr class="edit" contenteditable="false">
                <td class="editable">${item.name}</td>
                <td class="editable">${item.status}</td>
                <td class="editable">${item.permission}</td>
                <td class="editable">${item.email}</td>
                <td class="editable">${item.moblieNum}</td>
                <td contenteditable="false">
                    <button type="submit" class="editor" onclick="makeEditable(this)">Edit</button>
                    <button class="Delete_Row" onclick="deleteRow(this)">Delete</button>
                </td>
            </tr>`;
    }).join('');
}

document.getElementById('tableBody').innerHTML = RenderData(InfoArray);

// Filter table based on search input
function filterTable() {
    var searchText = document.getElementById("text").value.toLowerCase();
    var filteredData = InfoArray.filter(function (item) {
       
        return (
            item.name.toLowerCase().includes(searchText) ||
            item.status.toLowerCase().includes(searchText) ||
            item.permission.toLowerCase().includes(searchText) ||
            item.email.toLowerCase().includes(searchText) ||
            item.moblieNum.toLowerCase().includes(searchText)
        );
    });
    
    
    document.getElementById("tableBody").innerHTML = RenderData(filteredData);
    
}
document.getElementById("text").addEventListener('keyup', filterTable);
document.getElementById("text").addEventListener('input', filterTable);

// Dropdown functionality
document.querySelector('#DropDownList').addEventListener('change', function (event) {
    var itemsPerPage = parseInt(event.target.value);
    renderPagination(itemsPerPage);
    changePage(1, itemsPerPage);  // Start at the first page
});

// Pagination logic
function renderPagination(itemsPerPage) {
    var numberOfPages = Math.ceil(InfoArray.length / itemsPerPage);
    var pages = Array.from({ length: numberOfPages }, function (item, index) {
        return index + 1;
    });
    var pageTpl = pages.map(function (button) {
        return `<button onclick='changePage(${button},${itemsPerPage})'>${button}</button>`;
    }).join('');
    document.querySelector('#pagination').innerHTML = pageTpl;
}

// Change page based on button clicked
function changePage(pageNumber, itemsPerPage) {
    var endIndex = pageNumber * itemsPerPage;
    var startIndex = (pageNumber - 1) * itemsPerPage;
    var slicedData = InfoArray.slice(startIndex, endIndex);
    document.querySelector('#tableBody').innerHTML = RenderData(slicedData);
}


//  coloum sorting accoring to the button 
function buttonNum(Number){
    console.log(Number);
    var order='';
    if(Number==='Name'){
      console.log(Number);
       order=InfoArray.sort(function(a,b){
        return a.name.localeCompare(b.name);
      })
    }else if(Number==='Status'){
      console.log(Number);
       order=InfoArray.sort(function(a,b){
        return a.status.localeCompare(b.status);
        
      })
    }else if(Number==='Permission'){
      
       order=InfoArray.sort(function(a,b){
        return a.permission.localeCompare(b.permission);
      })
    }else if(Number==='Email'){
       order= InfoArray.sort(function(a,b){
      return a.email.localeCompare(b.email);
      })
    }else if(Number==='Phone Number'){
       order=InfoArray.sort(function(a,b){
        return parseInt(a.moblieNum) - parseInt(b.moblieNum);;
      })
    }
    document.querySelector('#tableBody').innerHTML= RenderData(order);
   
    var itemsPerPage = parseInt(document.querySelector('#DropDownList').value);
    renderPagination(itemsPerPage); 
    changePage(1, itemsPerPage); 
  }
  
  
  //  coloum sorting accoring to the button in reverse
  
  function buttonNumReverse(Number1){
    console.log(Number1);
    var order='';
    if(Number1==='Name'){
      console.log(Number1);
       order=InfoArray.sort(function(a,b){
        return b.name.localeCompare(a.name);
      })
    }else if(Number1==='Status'){
      console.log(Number1);
       order=InfoArray.sort(function(a,b){
        return b.status.localeCompare(a.status);
        
      })
    }else if(Number1==='Permission'){
      
       order=InfoArray.sort(function(a,b){
        return b.permission.localeCompare(a.permission);
      })
    }else if(Number1==='Email'){
       order= InfoArray.sort(function(a,b){
      return b.email.localeCompare(a.email);
      })
    }else if(Number1==='Phone Number'){
        order=InfoArray.sort(function(a,b){
        return parseInt(b.moblieNum) - parseInt(a.moblieNum);;
      })
    }
    
    document.querySelector('#tableBody').innerHTML= RenderData(order);  
    

    var itemsPerPage = parseInt(document.querySelector('#DropDownList').value);
    renderPagination(itemsPerPage);  
    changePage(1, itemsPerPage); 
  
  }
   

// Add row functionality
function insertRowToTable() {
    var newRow = {
        name: '',
        status: '',
        permission: '',
        email: '',
        moblieNum: ''
    };

    // Add the new row to the start of the InfoArray
    InfoArray.unshift(newRow);
    var itemsPerPage = parseInt(document.querySelector('#DropDownList').value);
    renderPagination(itemsPerPage);  
    changePage(1, itemsPerPage);  
}



// Delete row functionality
function deleteRow(button) {
    var row = button.closest("tr");
    var rowIndex = Array.from(row.parentElement.children).indexOf(row);
    InfoArray.splice(rowIndex, 1);
    row.remove();
    alert("Want to Delete")

    
    var itemsPerPage = parseInt(document.querySelector('#DropDownList').value);
    renderPagination(itemsPerPage);
    changePage(1, itemsPerPage);  
}


// Make a row editable or save the changes
function makeEditable(button) {
    const row = button.closest('tr'); 
    const cells = row.querySelectorAll('td.editable'); 
    const rowIndex = Array.from(row.parentElement.children).indexOf(row);  // Get the index of the row
    
    // If the button text is "Save", save the changes
    if (button.textContent === "Save") {
        // Update the corresponding data in InfoArray based on the rowIndex
        InfoArray[rowIndex] = {
            name: cells[0].textContent,
            status: cells[1].textContent,
            permission: cells[2].textContent,
            email: cells[3].textContent,
            moblieNum: cells[4].textContent
        };
        
        // Set cells back to non-editable mode
        cells.forEach(function(cell) {cell.contentEditable = "false"});
        button.textContent = "Edit";
        document.querySelector('#tableBody').innerHTML = RenderData(InfoArray);
        
       var itemsPerPage = parseInt(document.querySelector('#DropDownList').value);

       
      renderPagination(itemsPerPage);  
      changePage(1, itemsPerPage);  
        
    } else {
        // If the button text is "Edit", make cells editable
        cells.forEach(cell => cell.contentEditable = "true");
        
        // Change button text to "Save"
        button.textContent = "Save";
    }
    
}


