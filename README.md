# Age to Birth Date calculator
This package is a simple tool to calculate the earliest or latest possible date of birth for a given age. Of course with typescript support. 

```bash
npm install age-to-birth-date
```

```javascript
import {
    latestBirthDateForAge, 
    earlistBirthDateForAge,
} from 'age-to-birth-date'

// Assuming todays date is 2019-09-10 (00:00z)

earlistBirthDateForAge(20); // Date(1998-09-10)
latestBirthDateForAge(20); // Date(1999-09-10)
```

The example above is inclusive, meaning that if you were born exactly on 1999-09-10, you would still be regarded as being 19 years of age (actually you would be 20 years and 0 days). 

Likewise, if you were born at 2000-09-10 you would be regarded as 19, although the actual age is 19 years and 0 days.

This can be prevented by passing `false` as the second parameter. 

```javascript
// Assuming todays date is 2019-09-10 (00:00z)

earlistBirthDateForAge(20, false); // Date(1998-09-11) (19 years, 11 months, 30 days) 
latestBirthDateForAge(20, false); // Date(1999-09-11) (18 years, 11 months, 30 days)
```

## Basic comparisons
To make sure that some one is at least 10 years old. 
```javascript
// Assuming todays date is 2019-09-10 (00:00z)
const usersBirthDate = new Date('2008-05-10:00:00:00z');

const latestFor10YO = latestBirthDateForAge(10) // 2009-09-10
const foo = usersBirthDate < latestFor10YO; // true
```

## Dates between an age span
Package also includes `dateRangeForAgeSpan` that returns a object with `from` and `to` dates calculated from the input ages. For example:

```javascript
import { dateRangeForAgeSpan } from 'age-to-birth-date'

// Assuming todays date is 2019-09-10 (00:00z)

const foo = dateRangeForAgeSpan(10, 20);
/**
    foo = {
        from: Date(1998-09-10:00:00:00z)
        to: Date(2009-09-10:00:00:00z)
    }
*/
```

This method also accepts an optional third `boolean` parameter to not be include this day:

```javascript
// Assuming todays date is 2019-09-10 (00:00z)

const foo = dateRangeForAgeSpan(10, 20, false);
/**
    foo = {
        from: Date(1998-09-11:00:00:00z)
        to: Date(2009-09-11:00:00:00z)
    }
*/
```

## Why did I do this?
Working with dates and ages always gets to me - it seems I just can't wrap my head around if I am supposed to subtract or add years and days - and in what direction to get what results. And so on... Every time I end up spending a lot of time just trying to understand. Perhaps it's just me that are slow in this sense... 

But if there is some one else out there that hates calculating ages and birth dates - feel free to use this package.