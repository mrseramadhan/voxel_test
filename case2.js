function pembanding_nilai(data1,data2)
{
	var key_mk=[]
	data1.forEach((v,k)=>{
		for (key in v) {
		    key;
		    key_mk.push(key)
		    break;
		}
	})
	var higher1 = 0;
	var higher2 = 0;
	for(var i = 0; i<data1.length;i++)
	{
		if(data1[i][key_mk[i]]>data2[i][key_mk[i]])
		{
			higher1++;
		}
		else
		{
			higher2++;
		}
	}
	var return_data = {
		Rudi:higher1,
		Ani:higher2
	} 
	return return_data
}

console.log(pembanding_nilai([{'sejarah':8},{'matematika':7},{'sosiologi':6},{'kewarganegaraan':9}],[{'sejarah':5},{'matematika':8},{'sosiologi':9},{'kewarganegaraan':6}]));
