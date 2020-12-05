function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

    function addDays() {
        let days = document.querySelector('#days');
        const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        
        for (let index in dezDaysList) {
            let li = document.createElement('li');
            li.className = 'day';
            li.innerText = dezDaysList[index];
            days.appendChild(li);

            let holiday = [24,25,31];
            for (let index2 in holiday) {
                if (holiday[index2] === dezDaysList[index]) {
                    li.className = li.className + ' holiday';
                    break;
                };
            };

            let friday = [4,11,18,25];
            for (let index2 in friday) {
                if (friday[index2] === dezDaysList[index]) {
                    li.className = li.className + ' friday';
                    break;
                };
            };
        };
    };

  addDays();

    let buttomContainer = document.querySelector('.buttons-container')
  function createButtom(Feriados) {
        let buttom = document.createElement('button');
        buttom.innerText = Feriados;
        buttom.id = 'btn-holiday';
        buttomContainer.appendChild(buttom);
  }

  createButtom('Feriados');
