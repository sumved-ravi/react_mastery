
function mergeConfig(defaults, overrides) {
	return {...defaults, ...overrides};
}

function swapFirstTwo(arr){
	[first, second, ...rest] = arr;
	return [second, first, ...rest];
}

function formatUser({name, role}) {
	return `Name:${name} in role:${role}`;
}


