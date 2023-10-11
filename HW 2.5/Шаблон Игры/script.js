//Задание 8

function season(){
	let seasonnumber = Number(prompt('Введите номер месяца от 1 до 12'));
	if( seasonnumber === 1 || seasonnumber === 2 || seasonnumber === 12 ) {
		alert(`Зима`);
	}else if (seasonnumber === 3 || seasonnumber === 4 || seasonnumber === 5 ) {
		alert(`Весна`);
	}else if (seasonnumber === 6 || seasonnumber === 7 || seasonnumber === 8 ) {
		alert(`Лето`)
	}else if (seasonnumber === 9 || seasonnumber === 10 || seasonnumber === 11 ) {
		alert(`осень`);
	}
}

