function is_mirror(param)
{
	var proses = param.split('')
	var reverse = [];
	for(var i=proses.length;i>=0;i--)
	{
		reverse.push(proses[i]);
	}
	return param==reverse.join('')
}
console.log(is_mirror('kodok'));
console.log(is_mirror('kaca'));