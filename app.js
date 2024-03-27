console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//In this exercise, you will be counting from 1 - 100. For each odd number, you will print the number to the console. If the number is even, do nothing.

//1. Create a `for` loop that evaluates numbers from 1 to 100.
//2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
///3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number


for (let i = 0; i < 100; i++)
{
    if (i % 2 != 0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
    
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
//2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
   //- If the number is divisible by 3, then console.log `'FIZZ'`
   //- If the number is divisible by 5, then console.log `'BUZZ'`
   //- If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`
//Ex: `15` would print `'FIZZBUZZ'`, `33` would print `'FIZZ'`, and `35` would print `'BUZZ'`
for (let i = 1; i < 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(`${i}: FizzBuzz`)
    }
    else if (i % 3 == 0)
    {
        console.log(`${i}: Fizz`)
    }
    else if (i % 5 == 0)
    {
        console.log(`${i}: Buzz`)
    }
    else
    {
        console.log(`${i}: X`)
    }
}

// Exercise 3: Repeat with While and Do/While
console.log("EXERCISE 3 While:\n==========\n");
//For exercise 3, repeat both exercise 1 and 2 as `while` and `do/while` loop solutions.
let i = 0;
while (i < 100 )

{
    i++
    if (i % 2 != 0)
    {
        console.log(i);
    }
    else
    {
        continue;
    }
    
}
console.log("EXERCISE 3 Do/While:\n==========\n");
let x = 0;

do 
{
    
    x++
    if (x % 2 != 0)
    {
        console.log(x);
    }
    else
    {
        continue;
    }

}while (x < 100);

console.log("EXERCISE 3 While FizzBuzz:\n==========\n")
let v = 0;
while (v < 100)
{
    v++
    if (v % 3 == 0 && v % 5 == 0)
    {
        console.log(`${v}: FizzBuzz`)
    }
    else if (v % 3 == 0)
    {
        console.log(`${v}: Fizz`)
    }
    else if (v % 5 == 0)
    {
        console.log(`${v}: Buzz`)
    }
    else
    {
        console.log(`${v}: X`)
    }
    
}
console.log("EXERCISE 3 Do/While FizzBuzz:\n==========\n")
let b = 0;
do
{
    b++
    if (b % 3 == 0 && b % 5 == 0)
    {
        console.log(`${b}: FizzBuzz`)
    }
    else if (b % 3 == 0)
    {
        console.log(`${b}: Fizz`)
    }
    else if (b % 5 == 0)
    {
        console.log(`${b}: Buzz`)
    }
    else
    {
        console.log(`${b}: X`)
    }
} while (b < 100)

//## Exercise 4: Find Value

//In this exercise, you will count from iterate from 1 to n. If you iterate over a given value, then break out the loop and print "Found value!". If you do not find the value in the given range, print "Did not find value".

//1. Start with the following code:

console.log("EXERCISE 4 Find Value\n==========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundValue;

//2. Create a `for` loop that iterates from 0 to n
//3. If your current iteration is equal to `value`, then print "Found value!", and `break` out of the loop
//4. If you do not ever find the value and break out of the loop, then after the loop is finished, print "Did not find value"

for (let i = 0; i <= n; i++)
{
    if (i == value)
    {
        foundValue = true; 
        break;
    }
   
}
if (foundValue)
{
    console.log(`Found value! Value is ${value}`)
}
else 
{
    console.log(`Did not find value.`)
}
//## Exercise 5: Customized FIZZBUZZ

//We already completed the FIZZBUZZ challenge. Now repeat the logic for the FIZZBUZZ challege with values provided in variables.
console.log("EXERCISE 5 Customized FIZZBUZZ\n==========\n")
//1. Start with the following code:
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let a = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


//2. Re-implement exercise 2, but use `start` as the initial value for `i`, `a` as the range limit in `i <= n`, and 
//`fizzDivisor` and `buzzDivisor` as the dependent values for determining "FIZZ" and "BUZZ" print messages.

console.log(`Fizz = ${fizzDivisor} Buzz = ${buzzDivisor}`)
console.log(`Start Number = ${start} End Number = ${a}`)
for (let i = start; i <= a; i++)
{
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log(`${i}: FizzBuzz`)
    }
    else if (i % fizzDivisor == 0)
    {
        console.log(`${i}: Fizz`)
    }
    else if (i % buzzDivisor == 0)
    {
        console.log(`${i}: Buzz`)
    }
    else
    {
        console.log(`${i}: X`)
    }
}






