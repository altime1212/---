function login(){
    const id=document.getElementById("username").value;
    const pw=document.getElementById("password").value;
    const correctId="altime";
    const correctPw="1212";
    if(id===correctId&&pw===correctPw){
        window.location.href="Mypage.html";
    }else{
        document.getElementById("error").innerText="아이디 또는 비밀 번호가 틀렸습니다.";
    }
}