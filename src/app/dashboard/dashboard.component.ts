import { AUTO_STYLE } from '@angular/animations';
import { Component,AfterViewInit, ViewChild, ElementRef,OnInit } from '@angular/core';
import * as echarts from 'echarts';


const chartElement = document.getElementById('chart-container');
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
 title = 'angularCharts'
//  !............Total Inspection...............
 option1 :echarts.EChartsOption = {
  height: 300,
  width: 400,
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '2%',
    left: 'center',
    
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Clear', itemStyle:  {color: 'green'} },
        { value: 735, name: 'ProProblematic' },
      ]
    }
  ]
};

// !........ Chart for Innova...............
option2 :echarts.EChartsOption = {
  height: 300,
  width: 400,
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '1%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Clear', itemStyle:  {color: 'green'} },
        { value: 535, name: 'ProProblematic', itemStyle:  {color: 'red'} },
      ]
    }
  ]
};

// !.............chart for Fortuner..............
option3 :echarts.EChartsOption = {
  height: 300,
  width: 400,
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Clear', itemStyle:  {color: 'green'} },
        { value: 735, name: 'ProProblematic', itemStyle:  {color: 'red'} },
      ]
    }
  ]
};

  ngOnInit(): void {

  } 
}

