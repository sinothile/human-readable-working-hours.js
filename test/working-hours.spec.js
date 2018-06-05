
describe('Generate Readable Hours',function(){
    describe('Given different days with same start and end times', function(){
        it('Should concatenate it', function(){
            //Arrange
            let sut = new ReadableHoursGenerator();
            let data = [
                {
                    "day": "sat",
                    "from": "10:00",
                    "to": "23:00"
                },
                {
                    "day": "mon",
                    "from": "11:00",
                    "to": "23:00"
                },
                {
                    "day": "tue",
                    "from": "11:00",
                    "to": "23:00"
                },
                {
                    "day": "wed",
                    "from": "11:00",
                    "to": "23:00"
                },
                {
                    "day": "thu",
                    "from": "12:00",
                    "to": "23:00"
                },
                {
                    "day": "fri",
                    "from": "12:00",
                    "to": "23:00"
                },
                {
                    "day": "sun",
                    "from": "11:00",
                    "to": "23:00"
                }
            ]
            //Act
            let actual = sut.generateReadableHours(data);
            //Assert
            let expected= "MON - WED: 11:00 - 23:00\nTHU - FRI: 12:00 - 23:00\nSAT: 10:00 - 23:00\nSUN: 11:00 - 23:00"
            expect(actual).toBe(expected);
        });
    });

    describe('Given different days with same start and end times', function(){
        it('Should concatenate it', function(){
            //Arrange
            let sut = new ReadableHoursGenerator();
            let data = [
                {
                    "day": "sat",
                    "from": "10:00",
                    "to": "23:00"
                },
                {
                    "day": "mon",
                    "from": "12:00",
                    "to": "23:00"
                },
                {
                    "day": "tue",
                    "from": "11:00",
                    "to": "23:00"
                },
                {
                    "day": "wed",
                    "from": "11:00",
                    "to": "23:00"
                },
                {
                    "day": "thu",
                    "from": "12:00",
                    "to": "23:00"
                },
                {
                    "day": "fri",
                    "from": "12:00",
                    "to": "23:00"
                },
                {
                    "day": "sun",
                    "from": "11:00",
                    "to": "23:00"
                }
            ]
            //Act
            let actual = sut.generateReadableHours(data);
            //Assert
            let expected= "MON: 12:00 - 23:00\nTUE - WED: 11:00 - 23:00\nTHU - FRI: 12:00 - 23:00\nSAT: 10:00 - 23:00\nSUN: 11:00 - 23:00"
            expect(actual).toBe(expected);
        });
    });
});