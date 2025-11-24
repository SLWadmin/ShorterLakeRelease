function validateUser(uname,pword,uAccounts) {
	   
//	 <script src = "classes.js">             </script>//
	   
	 console.log(" validate user");
     console.log(" number of user is " + uAccounts.length);	 
     let userId = -1;

	   
	 for(let i = 0; i <= uAccounts.length; i++){
	    if((uname == uAccounts[i].username) && (pword == uAccounts[i].password)) {
            userId = i;
			return userId;
		   } 
	 }
	//  failed login  //
	
	 
    return userId;
	 }
