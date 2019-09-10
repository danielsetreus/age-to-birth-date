import moment from 'moment';

type DateSpan = {
    from: Date,
    to: Date,
}

const ageByBirthDate = (inputDate: Date) : number => {
    return moment().diff(moment(inputDate), 'years');
}

const latestBirthDateForAge = (age: number, withToday: boolean = true) : Date => {
    return getBirthDateForAge(age, (withToday ? 0 : 1));
}

const earliestBirthDateForAge = (age: number, withToday: boolean = true) : Date => {
    return getBirthDateForAge(age + 1, (withToday ? 0 : 1))
}

const dateRangeForAgeSpan = (age1: number, age2: number, withToday: boolean = true) : DateSpan => {
    const minAge = Math.min(age1, age2);
    const maxAge = Math.max(age1, age2);
    return {
        from: earliestBirthDateForAge(maxAge, withToday),
        to: latestBirthDateForAge(minAge, withToday),
    }
}

const getBirthDateForAge = (yearsToSubtract: number, daysToAdd: number) : Date => {
    return moment()
        .subtract(yearsToSubtract, 'years')
        .add(daysToAdd, 'days')
        .toDate();
}



export { 
    ageByBirthDate, 
    latestBirthDateForAge, 
    earliestBirthDateForAge, 
    dateRangeForAgeSpan,
};
