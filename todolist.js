var add= document.querySelector(".add")
var txtbox= document.querySelector(".txtbox")


add.addEventListener("click",function(){
  if(txtbox.value.length==0)
  {
    alert("Bạn chưa nhập thông tin");
  }
  else
  {
    document.querySelector('#lists').innerHTML += `
        <div id="list">
            <span id="listname">
            ${document.querySelector('.txtbox').value}
            </span>
            
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    
    `;
    var del = document.querySelectorAll(".delete");
    for(var i=0; i<del.length; i++){
        del[i].onclick = function(){
            this.parentNode.remove();
        }
    }
  }});
  

