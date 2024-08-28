var array = [
    {
        id: 1,
        name: "Dhruv",
        sub1: 50,
        sub2: 85,
        sub3: 74,
        sub4: 52,
        sub5: 95
    },
    {
        id: 2,
        name: "Krish",
        sub1: 56,
        sub2: 45,
        sub3: 85,
        sub4: 41,
        sub5: 96
    },
    {
        id: 3,
        name: "Gotu",
        sub1: 74,
        sub2: 78,
        sub3: 62,
        sub4: 56,
        sub5: 85
    },
    {
        id: 4,
        name: "Vishal",
        sub1: 98,
        sub2: 74,
        sub3: 85,
        sub4: 80,
        sub5: 87
    }
]

function result(){
    let tBody = document.getElementById("tBody")
    array.map( ( el ) => {
        let sum = (
            el.sub1 +
            el.sub2 +
            el.sub3 +
            el.sub4 +
            el.sub5
        )
        let per = sum / 5 
        tBody.innerHTML += `
            <tr>
                  <td>${el.id}</td>
                  <td>${el.name}</td>
                  <td>${el.sub1}</td>
                  <td>${el.sub2}</td>
                  <td>${el.sub3}</td>
                  <td>${el.sub4}</td>
                  <td>${el.sub5}</td>
                  <td>${sum}</td>
                  <td>${per}</td>
                  <td>${(per <= 33) ? "F" : 
                        (per <= 55) ? "E" :
                        (per <= 65) ? "D" :
                        (per <= 75) ? "C" :
                        (per <= 85) ? "B" : "A"
                  }</td>
              </tr>
        `
    } )
} 

result()