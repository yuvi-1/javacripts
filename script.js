var names=new Array();
names[0] = "Yakoov";
names[1] = "Jack";
names[2] = "Joshep";
names[3] = "jinn";
names[4] = "Rahul";
names[5] = "Yuvraj";
names[6] = "AB DEVILLIER";
names[7] = "Gems";
names[8] = "sivaji";
names[9] = "jackle";


for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
        console.log("Goodbye "+ names[i])
    }
    else {
        console.log("Hello "+ names[i])
    }

}