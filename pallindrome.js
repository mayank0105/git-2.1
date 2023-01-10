function checkpalindrome(str){
	let bag="";

	for(let i=str.length-1; i>=0; i--)
	{
		bag+=str[i];
	}
	
		console.log(bag)
	
	if(str===bag){
		console.log(`${str} is Palindrome`)
	}
	else{
		console.log(`${str} is not Palindrome`)
	}
	
	
}

checkpalindrome('naman')
checkpalindrome('shreshth')
checkpalindrome('mayank')


//please check this code shreshth 
//done....