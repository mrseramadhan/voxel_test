function anti_duplicate(param)
{
	var return_param = [];
	var map = new Map();
	for(i=0;i<param.length;i++)
	{
		if(map.get(param[i]))
		{
			
		}
		else
		{
			map.set(param[i],'')
		}
	}
	map.forEach((v,k)=>{
		return_param.push(k)
	})
	return return_param;
}

console.log(anti_duplicate([23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]))

function bb_sort(parameter)
{
	param = anti_duplicate(parameter)
	var par_length = param.length
	var temp;
	for(i=0;i<param.length;i++)
	{
		for(j=0;j<param.length;j++)
		{
			if(param[j]>param[j+1])
			{
				temp = param[j]
				param[j] = param[j+1]
				param[j+1] = temp
			}
		}
	}
	return param
}

console.log(bb_sort([4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0]))