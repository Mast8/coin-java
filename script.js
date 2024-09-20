let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let resetEl = document.getElementById("reset");
let tossResult = document.getElementById("result");

let stats = document.getElementById("stats");

coin.addEventListener("click", function () {
   
    flipCoin();
    reset()
});


 let tails = 0;                                                 
 let heads = 0;

function flipCoin ( ){
   
    let tailsE = document.getElementById("tail");
    let headsE = document.getElementById("head");
    let totalE = document.getElementById("total");
    let repetions = document.getElementById("coinFlips").value;

    let result;
    //console.log(tails);
    for (let i = 0; i < repetions ; i++) {
   
        let toss = Math.floor(Math.random() * 2);
        
        if (toss == 1) {
            tails++;
            result = "Tails";
            coin.src = "images/Tails.png"
        } else {
            heads++;
            coin.src = "images/Heads.png"
            result = "Heads";
        }
        let total = heads +tails;
       
        
        let tailsPerc = Math.round(tails/total * 100);
        let headsPerc = Math.round(heads/total * 100);

        if(repetions == 1 )
            tossResult.innerHTML = `It's ${result} `;
        else tossResult.innerHTML = ``;
        headsE.innerHTML = `Heads: ${heads} ${headsPerc}%`;
        tailsE.innerHTML = `Tails: ${tails}  ${tailsPerc}%`;
        totalE.innerHTML = `Total: ${total} `; 
        flip.innerHTML = `<button id="flip-again-btn">Want to Flip Again?</button>`;
       
        flip.addEventListener("click", flipCoin); 
        
    }
    graph(heads, tails);
}

//implement statistic graphs
function reset () {
    tails = 0;                                                 
    heads = 0;
    //stats.innerHTML = ``;
}


//charts
//let wow = 20;
function graph(heads, tails){


  const barChartOptions = {
    
    series: [
      {
        data: [heads, tails],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Heads', 'Tails'],
    },
    yaxis: {
      
    },
  };
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );

  barChart.render();
}