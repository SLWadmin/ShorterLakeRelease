   function validateUser(accounts) {
	   
	 var SLWurl = "ShorterLake.html?userId=";
//	 alert("in validateUser - accounts length is " + accounts.length);  
     let uname = document.getElementById("username").value;
	 let pword = document.getElementById("password").value;

	 let uID= getUserID(uname,pword,accounts);  
//	   alert("Uid is" + uID);
	   if(uID == -1){
		   alert("login failed");
		   return;
	   }
	   
	   SLWurl = SLWurl + uID;
//	   alert("the SLWurl is " + SLWurl);
	   window.location.href = SLWurl;

    return;
	 }
