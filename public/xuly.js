var socket = io("https://truongphamonline.herokuapp.com");

socket.on("server-gui-ds", function(data){
    $("#ds").html("");
    data.map(function(hocvien, index){
$("#ds").append(`   <div class='hocvien'>
<div class='hang1'>id: ` + index + ` || <span>` + hocvien.Hoten + `</span></div>
<div class='hang2'>` + hocvien.Email + ` ` + hocvien.Sodt + `</div> 
   </div>`);
    });
});
$(document).ready(function(){
    $(btnRegister).click(function(){
        socket.emit("hocvien-gui-thongtin",{
            hoten: $("#txtHoten").val(), email: $("#txtEmail").val(), dienthoai: $("#txtSoDT").val()
        });
    });
});
