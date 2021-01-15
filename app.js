
// ********** | CHAPTER 1: ALERT | **********

// var hello = "Hello Sir!"
// alert (hello)

// var error = "Error! Please Enter a valid Passward"
// alert (error)

// var welcome = "Welcome to Js Land... \n Happy Cording!"
// alert (welcome)


// ********** | CHAPTER 2: VARIABLES FOR STRINGS | **********

// var name = prompt ("Enter Your Name")
// var age = prompt ("What is your age?")
// var nameAge = "Submit Successful"
// alert (nameAge)

// var pizza = "pizza \n pizz \n piz \n pi \n p"
// alert (pizza)

// var email = "riazw020@gmail.com"
// alert (email)

// var learn = "“A smarter way to learn JavaScript”."
// alert (learn)

// var html = "Yeah! I can write html code using JavaScript."
// document.write (html)

// var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert (design)


// ********** | CHAPTER 3: VARIABLES FOR NUMBERS | **********

// var age1 = "I am 13 years old"
// alert (age1)

// var N = "You have visited this site 24 times."
// alert (N)

// document.write ("my birth year is 2001 <br> now I am 19 years old")

// ********** | CHAPTER 4: VARIABLE NAMES: LEGAL & ILLEGAL | **********

// document.write ("<h1>Rules for naming JS variables</h1> <br> <br> Variable names can only contain and For example $my_1stVariable <br> Variables must begin with a ______, ______ or _____. For example $name, _name or name <br> Variable names are case <br> Variable names should not be JS")


// ********** | CHAPTER 5: MATH EXPRESSIONS | **********

// var three = 3
// var five = 5
// var sum = 3+5
// document.write ("sum of " + three + " and "  + five +  " = "  + sum)

// var three = 3
// var five = 5
// var sum = 3-5
// document.write ("subtraction of " + three + " and "  + five +  " = "  + sum)

// var three = 3
// var five = 5
// var sum = 3*5
// document.write ("multiply of " + three + " and "  + five +  " = "  + sum)

// var three = 3
// var five = 5
// var sum = 3/5
// document.write ("division of " + three + " and "  + five +  " = "  + sum)

// var three = 3
// var five = 5
// var sum = 3%5
// document.write ("modulus of " + three + " and "  + five +  " = "  + sum)

// var chap5 = "Value after variable declaration is undefined"
// var x = 5
// var x1 = "Inicial Value: 5"
// var increement = "value after increement: " + ++x
// var add = x+7
// var add1 = "value after addition:" + add
// var decree = " value after decreemnet " + --add
// var reminder = add - 12
// var reminder1 = "The reminder is " + reminder
// document.write (chap5 + "<br>" + x1 + "<br>" + increement + "<br>" + add1 + "<br>" + decree + "<br>" + reminder1)

// var oneTickit = 600
// var totalTickit = prompt ("Enter Number of Tickits")
// alert (oneTickit*totalTickit)

// var t = prompt ("Enter a number")
// var s = prompt ("Enter Value")
// for (var i = 0; i <= s; i++){
//     document.write (t + " X " + i + " " + " = " + t*i + "<br>") 
// }

// var f = prompt("Enter temperature in Fahrenheit")
// var C = (f - 32) * 5/9
// alert (C + " Calsius")

// var c = prompt("Enter temperature in Calsius")
// var F = (c * 9/5)+32
// alert (F + " Fahrenheit")

// var head = "Mark sheet"
// var totalMarks = prompt ("Enter Total Marks")
// var marksObtained = prompt("Enter Marks you obtained")
// var percentage = marksObtained/totalMarks * 100
// document.write (head + "<br>" + "Total Marks: " + totalMarks + "<br>" + "Marks Obtained: " + marksObtained + "<br>" + "Percentage: " + percentage)

// var dollar = prompt ("How much $ do you have?")
// var riyal = prompt ("How muchriyal do you have?")
// var rs = dollar*161 + riyal*42
// alert ("Total Currency in PKR: " + rs)

// var x = 5*10/2
// alert (x)

// var currentYear = prompt ("Write current year")
// var birth = prompt ("Write Your Birth Year")
// var age = currentYear - birth
// document.write ("Current Year: " + currentYear + "<br>" + "Birth Year: " + birth + "<br>" + "Yor agr is " + age)

// var radius = prompt ("Radius of the Circle?")
// var circumference = 2 * 3.142 * radius
// var area = 3.142 * radius * radius
// document.write ("Radius of the Circle: " + radius + "<br>" + "Circumference of the Circle: " + circumference + "<br>" + "Area of the Circle: " + area)

// ********** | CHAPTER 6-9: MATH EXPRESSIONS | **********

// var a = 2;
// var b = 1;
// var result =  --a - --b + ++b + b--;
// document.write ("--a = 1 <br> --a - --b = 1 <br> --a - --b + ++b = 2 <br> --a - --b + ++b + b-- = 3 + <br> + "a = 1" + <br> + "b =2")
// alert (result)

// var name = prompt ("Enter your Name")
// alert ("Hello " + name)

// var t = prompt ("Enter a number", "5")
// var s = prompt ("Enter Value")
// for (var i = 0; i <= s; i++){
//     document.write (t + " X " + i + " " + " = " + t*i + "<br>") 
// }


// ********** | CHAPTER 9-11: USER INPUT & CONDITIONAL STATEMENT | **********

// var user = prompt ("Enter you city")
// var user = user.toLowerCase()
// if (user === "karachi") {
//     alert ("Welcome to city of lights")
// }

// var user = prompt ("Enter your gender")
// var user = user.toLowerCase()
// if (user === "male") {
//     alert ("Good Morning Sir")
// } else if (user === "female") {
//     alert (" Good Morning Ma’am")
// } else {
//     alert ("Good Morning")
// }

// var user = prompt ("What is the trafic signel at that time?")
// var user = user.toLowerCase()
// if (user === "red") {
//     alert ("Must Stop")
// } else if (user === "yellow") {
//     alert ("Ready to Move")
// } else if (user === "green") {
//     alert ("Move Now")
// }

// var user = prompt ("What is your remaining fuel in yor car (in liter)")
// var user = user.toLowerCase()
// if (user <= 0.5) {
//     alert ("Please refill the fuel in your car")
// }

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// } (working)

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } (not working)

// if (c === 13) {
//     alert("condition 2 is true");
// } (not working)

// if (++c < 14) {
//     alert("condition 3 is true");
// } (working)

// if (c === 14) {
//     alert("condition 4 is true");
// } (not working)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } (working)

// if (true) {
//     alert("True");
// } (working)

// if (false) {
//     alert("False");
// } (not working)

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// } (working)

// var total = +prompt("Enter total Marks")
// var obtained = +prompt("Enter Obtained Marks")
// var percentage = obtained / total * 100
// if (percentage >= 80) {
//     document.write(
//         "<hr> MARK SHEET </hr> <br><br>" + "TOtal Marks: " + total + "<br>" +
//         "Obtained Marks: " + obtained + "<br>" + "percentage: " + percentage + "%" + "<br>" +
//         "Grade: A-ONE" + "<br>" + "Remarks: Excellent"
//     )
// } else if  (percentage >= 70) {
//     document.write(
//         "<hr> MARK SHEET </hr> <br><br>" + "TOtal Marks: " + total + "<br>" +
//         "Obtained Marks: " + obtained + "<br>" + "percentage: " + percentage + "%" + "<br>" +
//         "Grade: A" + "<br>" + "Remarks: Good"
//     )
// } else if  (percentage >= 60) {
//     document.write(
//         "<hr><b> MARK SHEET </b> </hr> <br><br>" + "TOtal Marks: " + total + "<br>" +
//         "Obtained Marks: " + obtained + "<br>" + "Percentage: " + percentage + "%" + "<br>" +
//         "Grade: B" + "<br>" + "Remarks: You need to Improve"
//     )
// } else {
//     document.write(
//         "<hr> MARK SHEET </hr> <br><br>" + "TOtal Marks: " + total + "<br>" +
//         "Obtained Marks: " + obtained + "<br>" + "percentage: " + percentage + "%" + "<br>" +
//         "Grade: Fail" + "<br>" + "Remarks: Sorry"
//     )
// }

// var user = +prompt ("Guess the Secret Number")
// if (user === 4) {
//     alert ("Bingo! Correctanswer!")
// } else if (user === 5) {
//     alert ("Close enough to the correct answer")
// }

// var user = +prompt ("Enter a number")
// var user = user%3
// if (user === 0) {
//     alert ("The Given Number is divisible by 3")
// }

// var give = +prompt ("Give any Number")
// var give = give % 2
// if (give === 0) {
//     alert ("The given number is even")
// } else {
//     alert ("The given number is odd")
// }

// var temp = +prompt ("Enter to day's temperature...")
// if (temp > 30) {
//     alert ("It is too hot outside.")
// } else if (temp > 20) {
//     alert ("The Weather today is Normal.")
// } else if (temp > 10) {
//     alert ("Today’s Weather is cool.")
// } else {
//  alert ("OMG! Today’s weather is so Cool.")
// }

// var first = +prompt ("Enter first number")
// var second = +prompt ("Enter second number")
// var opr = prompt ("Operation (+, -, *, /, %)")
// if (opr === "+") {
//     alert (first + second)
// } else if (opr === "-") {
//     alert (first - second)
// } else if (opr === "*") {
//     alert (first * second)
// } else if (opr === "/") {
//     alert (first / second)
// } else if (opr === "%") {
//     alert (first % second)
// }


// ********** | CHAPTER 12 & 13: IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS | **********

// var char = prompt("Enter any number or Letter");
// var char = char.charCodeAt();
// if (char >= 65 && char <= 90) {
//     alert("The given input is UpperCase letter")
// } else if (char >= 97 && char <= 122) {
//     alert("The given input is LowerCase letter")
// } else {
//     alert("The give input is Number")
// }

// var numF = +prompt ("Enter First number")
// var numS = +prompt ("Enter Second Number")
// if (numF > numS) {
//     alert (NumF + " is greater then " + numS)
// } else if (numF < numS) {
//     alert (numF + " is less then " + numS)
// } else {
//     alert (numF + " is equal to " + numS)
// }

// var num = +prompt ("Enter a number")
// if (num > 0) {
//     alert ("Your number is in positive state")
// } else if (num < 0) {
//     alert ("Your number is in nagetive state")
// } else if (num === 0) {
//     alert ("Your number is 0")
// }

// var v = prompt ("Enter a vowel")
// if (v === "a" || v === "e"|| v === "i"|| v === "o" || v === "u") {
//     alert (true)
// } else {
//     alert (false)
// }

// var pass = prompt ("Enter your passward")
// var correct = "wahab123"
// if (pass === correct) {
//     alert ("Correct! The password you entered matches the original password")
// } else if (pass === "") {
//     alert ("Please enter your password")
// } else {
//     alert ("Incorrect password")
// }

// var hour = 13;
// if (hour < 18) {
//     alert ("Good day");
// } else {
//     alert("Good evening");
// }


// ********** | CHAPTER 14-16: ARRAYS | **********

// var add = []

// var dec = ["ahmed", "ali"]
// console.log (dec)

// var num = [1, 2, 3]
// console.log (num)

// var boo = ["+", "-", "*", "/"]
// console.log (boo)

// var mix = ["ali", 1, "+"]
// console.log (mix)

// var board = ["SSC", "HSC", "BCS", "BS", "BCOM", "BS", "M.PHIL", "Ph.D"]
// document.write(
//     "<ol>" +
//     "<li>" + board[0] + "<li>" + "<br>" +
//     "<li>" + board[1] + "<li>" +
//     "<li>" + board[2] + "<li>" +
//     "<li>" + board[3] + "<li>" +
//     "<li>" + board[4] + "<li>" +
//     "<li>" + board[5] + "<li>" +
//     "<li>" + board[6] + "<li>" + 
//     "<li>" + board[7] + "<li>" +
//     "<ol>"
// )

// var qua = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M Phil", "PhD"]
// document.write("<h1> Qualifications</h1>" + qua[0] + "</br>" + qua[1] + "</br>" + qua[2] + "</br>" + qua[3] + "</br>" + qua[4] + "</br>" + qua[5] + "</br>" + qua[6] + "</br>" + qua[7] + "</br>");


// var stu = ["Asim", "Abdul Wahab", "Abdullah"];
// var marks= [300, 450, 400];
// var totalmarks = 500;
// document.write("Score of " + stu[0] + " is " + marks[0] + " "+" ."+" percentage" + " " + marks[0]/totalmarks*100+"%"+ "<br>");
// document.write("Score of " + stu[1] + " is " + marks[1] + " "+" ."+" percentage" + " " + marks[1]/totalmarks*100+"%" + "<br>");
// document.write("Score of " + stu[2] + " is " + marks[2] + " "+" ."+" percentage" + " " + marks[2]/totalmarks*100+"%");

// var marks = [230, 450, 120, 500, 125]
// var marks = marks.sort()
// console.log (marks)

// var cities = ["Karachi", "Islamabad", "Lahor", "Pishawar", "Quetta"]
// document.write ("<h1> CITIES LIST </h1> <br>" + cities)
// var sec = ["Karachi", "Islamabad"]
// document.write ("<h1> SELECTED CITIES LIST </h1> <br>" + sec)

// var arr = ["This" ,  "is" ,  "my" ,  "cat"]
// console.log(arr)
// var join = arr.join(" ")
// document.write(join)

// var arr = ["sumsung", "apple", "nokia", "motorolla", "gfive"]
// document.write (
//     "<select>" +
//     "<option selected hidden>" + "mobile" + "</option>" +
//     "<option>" + arr[0] + "</option>" +
//     "<option>" + arr[1] + "</option>" +
//     "<option>" + arr[2] + "</option>" +
//     "<option>" + arr[3] + "</option>" +
//     "<option>" + arr[4] + "</option>" +
//     "</select>"
// )


// ********** | CHAPTER 17-20: ARRAYS AND LOOP | **********

// var arr = [[], [], [], []]
// var arr = [[0, 1, 2, 3], [0, 4, 5, 6], [9, 7, 8, 9]]
// document.write (arr[0].join(" ") + "<br>" + arr[1].join(" ") + "<br>" + arr[2].join(" "))

// for(i = 0; i <= 10; i++){
//     document.write (i + "<br>")
// }

// var table = +prompt("Enter Table Number", "5")
// var value = +prompt("Enter Value", "10")
// document.write("<h1> TABLE OF " + table + " Till " + value + "</h1><br><br>")
// for (i =1; i <= value; i++) {
//     document.write(table + " X " + i + " = " + table*i + "<br>" )
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for (i = 0; i <= fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }

// document.write("counting:  ")
// for (i = 1; i <= 20; i++){
//     document.write(i + " ")
// }
// document.write("<br>")
// document.write("Backward: ")
// for (i = 20; i >= 1; i--) {
//     document.write(i + " ")
// }
// document.write("<br>")
// document.write("Even: ")
// for (i = 2; i <= 20; i+=2){
//     document.write(i + " ")
// }
// document.write("<br>")
// document.write("ODD: ")
// for (i = 1; i <= 20; i+=2){
//     document.write(i + " ")
// }

// var a = ["cake", "applepie","cookies", "chips","patties"]
// var b = prompt("Enter item for search")
// if(b===a[0] || b===a[1]||b===a[2]||b===a[3]||b===a[4]){
//     alert(b + " " + "is available at Index"+ " " + a.indexOf(b)+ " " +"in our bakery" )
//     console.log(a.indexOf(b))
// } else {
//     alert("We are sorry. " + b + " is <b> not available </b> in our bekry")
// }

// var arr  = [24, 56, 79, 96 ,34]
// document.write(Math.max(...arr))
// document.write ("<b>Available array:</b> " + arr + "<br>" + "<b>The Largest number is: " + Math.max(...arr))

// var arr  = [24, 56, 79, 96 ,34]
// document.write(Math.max(...arr))
// document.write ("<b>Available array:</b> " + arr + "<br>" + "<b>The Largest number is: " + Math.min(...arr))

// var five = 5
// for (i = 5; i <= 100; i+=5) {
//     document.write(i + " , ")
// }








































// var name = ["abdullah", "wahab", "zaleel"]
// var last = ["khan", "saleem", "ahmed"]
// for(var i = 0; i < name.lenght; i++){
//     for(var j = 0; i < last.length; j++){
//         console.log (name[i] + " " + last[j])
//     }
// }

