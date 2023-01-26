let myLeads = [ ]
const inputEl = document.getElementById("input-el")

 const inputBtn = document.getElementById("input-btn")
 const ulEl = document.getElementById("ul-el")
//localStorage.setItem("myLeads", "www.henryisgay.com")
 let lead = localStorage.getItem("myLeads")
console.log(lead)

console.log(ulEl)

inputBtn.addEventListener ("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""

   renderLeads()


})
function renderLeads() {
    let listItems = ""

    for (i=0; i < myLeads.length; i += 1) {
        
        listItems+= `
        <li>
        <a target='_blank' href ='${myLeads[i]} '> 
            ${myLeads[i]} 
        </a>
        
        </li>
        
        
        `
        
    }
    
    ulEl.innerHTML = listItems 
    
}
