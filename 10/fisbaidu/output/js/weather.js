$(function(){var a="2a400e201d8c495bf5b14bd745868ff3",e=function(a){$("#city").text(a.result.data.realtime.city_name),$("#temperature").text(a.result.data.realtime.weather.temperature+"℃"),$("#air-condition").text(a.result.data.pm25.pm25.quality),$("#pm25").text(a.result.data.pm25.pm25.pm25);var e=$("#icon");switch(a.result.data.realtime.weather.info){case"晴":e.addClass("sunny");break;case"多云":e.addClass("cloudy");break;case"雨":e.addClass("raining");break;case"阵雨":e.addClass("raining");break;case"大雨":e.addClass("raining");break;case"暴雨":e.addClass("raining");break;case"中雨":e.addClass("raining");break;case"雪":e.addClass("snowing");break;case"阴":e.addClass("overcast")}};$.ajax({url:"http://op.juhe.cn/onebox/weather/query",data:{cityname:"深圳",dtype:"json",key:a},dataType:"jsonp",success:function(a){e(a)}})});