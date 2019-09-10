
import { 
    ageByBirthDate, 
    latestBirthDateForAge,
    earliestBirthDateForAge,
    dateRangeForAgeSpan,   
} from './index';
import { advanceTo, clear } from 'jest-date-mock';
import moment from 'moment';

beforeEach(() => {
    advanceTo(new Date('2019-09-10:00:00:00z'));
})

afterEach(() => {
    clear();
})


describe('Birth Date Calculations from Age', () => {
    const RealDate = Date
        
    test('should return correct age from date', () => {
        expect(ageByBirthDate(new Date('1999-09-11:00:00:00z'))).toBe(19);
    })
    
    test('should return latest possible (including birthday today) birth date for age', () => {
        expect(latestBirthDateForAge(20, true).toISOString())
            .toEqual(new Date('1999-09-10:00:00:00z').toISOString());
    })

    test('should return latest possible birth date for age', () => {
        expect(latestBirthDateForAge(20, false).toISOString())
            .toEqual(new Date('1999-09-11:00:00:00z').toISOString());
    })

    test('should return earlist possible (including birthday today) birth date for age', () => {
        expect(earliestBirthDateForAge(20, true).toISOString())
            .toEqual(new Date('1998-09-10:00:00:00z').toISOString());
    })

    test('should return earlist possible birth date for age', () => {
        expect(earliestBirthDateForAge(20, false).toISOString())
            .toEqual(new Date('1998-09-11:00:00:00z').toISOString());
    })

    test('should be (inclusively) less than tomorrows date', () => {
        const latestLessThan = latestBirthDateForAge(19, true) < new Date('2000-09-11')
        expect(latestLessThan).toBe(true);

        const earliestLessThan = earliestBirthDateForAge(19, true) < new Date('1999-09-11')
        expect(earliestLessThan).toBe(true);
    })

    test('should be less than tomorrows date', () => {
        const latestLessThan = latestBirthDateForAge(19, false) < new Date('2000-09-11')
        expect(latestLessThan).toBe(false);

        const earliestLessThan = earliestBirthDateForAge(19, false) < new Date('1999-09-11')
        expect(earliestLessThan).toBe(false);
    })
})

describe('Earliest and Latest possible birth dates for age span', () => {
    test('should return DateSpan from earlist possible birth date and to latest possible birth date, allowing birthdays today', () => {
        expect(dateRangeForAgeSpan(10, 20, true)).toEqual({
            from: new Date('1998-09-10:00:00:00z'),
            to: new Date('2009-09-10:00:00:00z'),
        })
    })

    test('should return DateSpan from earlist possible birth date and to latest possible birth date', () => {
        expect(dateRangeForAgeSpan(10, 20, false)).toEqual({
            from: new Date('1998-09-11:00:00:00z'),
            to: new Date('2009-09-11:00:00:00z'),
        })
    })

    test('should put age span in correct direction', () => {
        expect(dateRangeForAgeSpan(20, 10, true)).toEqual({
            from: new Date('1998-09-10:00:00:00z'),
            to: new Date('2009-09-10:00:00:00z'),
        })
    })
})

