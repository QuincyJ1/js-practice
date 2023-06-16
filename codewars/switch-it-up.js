console.clear();
// mano sprendimas:
// function switchItUp(number){
//     if (number === 1) {
//         return "One"
//     } else if (number === 2){
//         return 'Two'
//     }
//     else if (number === 3){
//         return 'Three'
//     }
//     else if (number === 5){
//         return 'Five'
//     } 
//     else if (number === 8){
//         return 'Eight'
//     }
//     }


//Geriausia praktika:
    switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]

    console.log(switchItUp(1),"One");
    console.log(switchItUp(3),"Three");
    console.log(switchItUp(5),"Five");