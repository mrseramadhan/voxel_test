function pecahan_uang(param)
{
	var db_uang = [100000,50000,20000,10000,5000,2000,1000,200,100];
	var pecahan = [] 
	for(var i =0; i<db_uang.length;i++)
	{
		var jml = Math.floor(param/db_uang[i])
		for(j=0;j<jml;j++)
		{
			pecahan.push(db_uang[i])
		}
		var param = param - (db_uang[i]*jml)
	}
	return pecahan;
}

console.log(pecahan_uang(72500))