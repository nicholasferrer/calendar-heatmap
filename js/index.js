var dataArvore = [];

var data_arvore = $.getJSON('https://nicholasferrer.com.br/teste_arvore_data.json', function (data) {
  for (let i = 0; i < data.length; i++) {
    data[i]['date'] = moment(new Date(data[i]['date']));
  }
  dataArvore = data;
});

data_arvore.done(function () {

  var heatmap = calendarHeatmap()
    .startDate(new Date('2016-08-12'))
    .data(dataArvore)
    .selector(".heatmap")
    .colorRange(["#ebedf0", "#090"])
    .tooltipEnabled(true)
    .tooltipUnit(
      [
        { min: 0, unit: "contribution" },
        { min: 1, max: 1, unit: "contribution" },
        { min: 2, max: "Infinity", unit: "contributions" }
      ]
    )
    .legendEnabled(true)
    .onClick(function (data) {
      console.log("data", data);
    })
    .locale(
      {
        months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        No: "0",
        on: "–",
        Less: "Less",
        More: "More"
      }
    );

  heatmap();
});


