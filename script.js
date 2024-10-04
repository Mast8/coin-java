let coin = document.getElementById("flip-coin");
let flip = document.getElementById("flip-again");
let resetEl = document.getElementById("reset");
let tossResult = document.getElementById("result");


coin.addEventListener("click", function () {
  
    flipCoin();
    reset();
});


 let tails = 0;                                                 
 let heads = 0;

/* function flipCoin ( ){
   
    let tailsE = document.getElementById("tail");
    let headsE = document.getElementById("head");
    let totalE = document.getElementById("total");
    let repetions = document.getElementById("coinFlips").value;

    let result;
    if(repetions > 0){
      for (let i = 0; i < repetions ; i++) {
    
          let toss = Math.floor(Math.random() * 2);
          
          if (toss == 1) {
              tails++;
              result = "Tails";
          } else {
              heads++;
              result = "Heads";
          }
          let total = heads + tails;
        
          
          let tailsPerc = Math.round(tails/total * 100);
          let headsPerc = Math.round(heads/total * 100);
          

          headsE.innerHTML = `Heads: ${heads} ${headsPerc}%`;
          tailsE.innerHTML = `Tails: ${tails}  ${tailsPerc}%`;
          totalE.innerHTML = `Total: ${total} `; 
          flip.innerHTML = `<button id="flip-again-btn">Increase Flip ?</button>`;
        
          flip.addEventListener("click", flipCoin);  
      }
     
      updateCoin(tails,heads);
      graph(heads, tails);
    }
    else alert("Please enter the number of repetitions")
} */

function flipCoin ( ){ 
   
  let tailsE = document.getElementById("tail");
  let headsE = document.getElementById("head");
  let totalE = document.getElementById("total");
  let repetions = document.getElementById("coinFlips").value;
  let series = document.getElementById("series").value;

  let tailsA = [];                                                 
  let headsA = [];

  //let series = 5;
  if(repetions > 0 && series>0 ){
    
    for (let j = 0; j < series ; j++) {
      for (let i = 0; i < repetions ; i++) {
    
          let toss = Math.floor(Math.random() * 2);
          
          if (toss == 1) {
              tails++;
             
          } else {
              heads++;
              
          }
          let total = heads + tails;
        
          
          let tailsPerc = Math.round(tails/total * 100);
          let headsPerc = Math.round(heads/total * 100);
          

          headsE.innerHTML = `Heads: ${heads} ${headsPerc}%`;
          tailsE.innerHTML = `Tails: ${tails}  ${tailsPerc}%`;
          totalE.innerHTML = `Total: ${total} `; 
          flip.innerHTML = `<button id="flip-again-btn">Increase Flip ?</button>`;
        
          flip.addEventListener("click", flipCoin);  
      }
      console.log(tails, heads);
      tailsA[j] = tails;
      headsA[j] = heads;
      reset();
      //graph(headsA[j], tailsA[j]);
    }
    graphLine(tailsA, headsA);
    updateCoin(tails,heads);
    
  }
  else alert("Please enter the number of repetitions")
}

function updateCoin(tails,heads){
  if(tails > heads){
    coin.src = "images/Tails.png"
    tossResult.innerHTML = `More Tails `;
  }
  else {
    if (tails == heads) {
      coin.src = "images/Flip_coin.png"
      tossResult.innerHTML = `Draw`;
    }
    else {
      coin.src = "images/Heads.png"
      tossResult.innerHTML = `More Heads `;
    }
  }

}

function reset () {
    tails = 0;                                                 
    heads = 0;
}

//charts
/* function graph(heads, tails){
  console.log(tails+ " graph " + heads);
  const flip = [ 'Tails' , 'Heads'];

  const barChartOptions = {
    
    series: [
      {
        data: [tails, heads],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#cc3c43'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: [flip[0], flip[1]],
    },
    yaxis: {
      
    },
  };

  //clean element
  //document.querySelector('.bar-chart').innerHTML = ``;
  const barChart = new ApexCharts(
    document.querySelector('.bar-chart'),
    barChartOptions
  );

  barChart.render();
} */

function graphLine(data,dataY){
  
  const barChartOptions = {
    
    series: [
      {
        data: data,
        series: "tails"
      },
      {
        data: dataY
      },
    ],
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#cc3c43'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
    },
    xaxis: {
      
    },
    yaxis: {
      
    },
  };

  //clean element
  document.querySelector('.bar-chart').innerHTML = ``;
  const barChart = new ApexCharts(
    document.querySelector('.bar-chart'),
    barChartOptions
  );

  barChart.render();
}