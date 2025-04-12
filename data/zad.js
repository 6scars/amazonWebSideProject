expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ,300,20,40,11,33,100,2.4, 5.6],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": [1]
        }
    },
    "2023-04": {}
};

// const currentDate = new Date(Date.UTC(2023,0,1));
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toISOString());
// console.log(currentDate.getMonth()+1);
// console.log(currentDate.getDay())


// const [year,month] = listOfDate[0].split('-');
// console.log(listOfDate)
// console.log(parseInt(year,10))
// console.log(parseInt(month,10));



function whereIsFirstSunday(year,month,day){
    let dateToCheck = new Date(Date.UTC(year,month-1,day));
    let dateStart = new Date(Date.UTC(year,month-1,1));
    
    while (dateStart.getDay() !== 0){
        dateStart.setDate(dateStart.getDate()+1);
        
    }
    //console.log("First Sunday:", dateStart)

    const limitDate =  dateStart;


    return [dateToCheck, limitDate]


}

function sort(array){
    if(array.length<2){
        return array;
    }
    let left = []
    let right = []
    let pivot = array[array.length-1]

    array.forEach((item)=>{
        if(item< pivot){
            left.push(item)
        }else if (item>pivot){
            right.push(item)
        }
    })

    return [...sort(left), pivot, ...sort(right)]
}

function median(array){
    const arrMedian = []

    array.forEach((item)=>{
        let mid = Math.floor(item.length/2)
        if(item.length % 2 ===0){   
            
            arrMedian.push((item[mid-1] + item[mid])  /2 )
        } 
        if(item.length % 2 !== 0){
            arrMedian.push(item[mid-1])
        }
    })
    return arrMedian


}








function praca(listOfDate){
    let allExpences = []

    listOfDate.forEach((item)=>{
        let [year, month]= item.split('-')
        year = parseInt(year)
        month = parseInt(month)

        Object.keys(expenses[item]).forEach((day)=>{
            let [dateToCheck, limitDate] = whereIsFirstSunday(year, month,parseInt(day));
            if(dateToCheck <= limitDate){
                    let dayData = expenses[item][day]
                    let expencesDay =[]
                    
                    Object.keys(dayData).forEach((typeExp)=>{
                        const arr = dayData[typeExp]
                        

                        if(Array.isArray(arr)&& arr.length>0){
                            arr.forEach((cost)=>{

                                if (typeof cost === 'number' && !isNaN(cost)) {
                                    expencesDay.push(cost);
                                }
                            })
                        }
                    })
                    allExpences.push(expencesDay);      
            }  
        })
    })
    return allExpences
}
const start = performance.now()
const listOfDate = Object.keys(expenses);
const allExpences = praca(listOfDate)
const sortedArray=[];
allExpences.forEach((item)=>{
    sortedArray.push(sort(item))
})
console.log(median(sortedArray))
const stopp = performance.now();
const duration = ((stopp - start).toFixed(2));
const stringDur= `Solution1: ${duration}ms`;

const match = stringDur.match(/Solution1: (\d+\.\d+)?(ms)?/)
console.log(match[0])
