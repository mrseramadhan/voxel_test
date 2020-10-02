console.log('test');

function hilih_converter(param)
{
	var proses = param.split('')
	var vocal = ['a','i','u','e','o']
	for(var i=0;i<proses.length;i++)
	{
		if(vocal.includes(proses[i]))
		{
			proses[i]='i';
		}
	}
	return proses.join('');
}

console.log(hilih_converter('jika input yang dimasukkan'));