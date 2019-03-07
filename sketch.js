

function drawCharts(data){
  let chartNum = data[0].length;
  let chartLenght = data.length;

  const chartCube = 50;

  fill(0);
  strokeWeight(2);
  const tri = 5;

  triangle(
    chartCube, height - chartCube*(chartNum+2)-tri,
    chartCube+tri, height - chartCube*(chartNum+2)+tri,
    chartCube-tri, height - chartCube*(chartNum+2)+tri);
  line(chartCube, height-chartCube, chartCube, height-chartCube*(chartNum+2));

  triangle(
    chartCube*(chartLenght+2)+tri, height-chartCube,
    chartCube*(chartLenght+2)-tri, height-chartCube+tri,
    chartCube*(chartLenght+2)-tri, height-chartCube-tri);
  line(chartCube,height-chartCube,chartCube*(chartLenght+2),height-chartCube);

  for(let i = 0; i < chartLenght; i++){
    for(let j = 0; j < chartNum; j++){
      line(
        chartCube*(1+i), height - chartCube*(2+j+0.5*data[i][j]),
        chartCube*(2+i), height - chartCube*(2+j+0.5*data[i][j])
      );
      if(i != 0){
        if(data[i-1][j] != data[i][j]){
          line(
            chartCube*(1+i), height - chartCube*(2+j),
            chartCube*(1+i), height - chartCube*(2+j+0.5)
          );
        }
      }
    }
  }


}


function setup() {
  createCanvas(720, 720);
  background(255);
  drawCharts(data4);
}

function draw(){}
