function ReadableHoursGenerator() {
    this.generateReadableHours = function (data) {
        data= SortData(data);
        return concatenate(data, '');
    }

    function concatenate(data, output) {
     
        if (GetDifferentDay(data)) {
            let index = data.indexOf(GetDifferentDay(data));
            if(index>1){
                output += '\n' + data[0].day.toUpperCase() + ' - ' + data[index - 1].day.toUpperCase() + ': ' + data[0].from + ' - ' + data[0].to;
            }
            else{
                output += '\n' + data[0].day.toUpperCase() +  ': ' + data[0].from + ' - ' + data[0].to;
            }
            data = data.filter(d => data.indexOf(d) >= index);
            if (data.length) {
             
                output = concatenate(data, output);
            }
        }
        else{
            
            if(data.length>1){
                output += '\n' + data[0].day.toUpperCase() + ' - ' + data[index - 1].day.toUpperCase() + ': ' + data[0].from + ' - ' + data[0].to;
            }
            else{
                output += '\n' + data[0].day.toUpperCase() +  ': ' + data[0].from + ' - ' + data[0].to;
            }
        }
        return output.trim('\n');

    }

    function SortData(data)
    {
        let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
        return data.sort((a, b) => { return days.indexOf(a.day) - days.indexOf(b.day) });
    }

    function GetDifferentDay(data)
    {
        return data.filter(d => d.from != data[0].from || d.to != data[0].to)[0];
    }
}