var data = {
    "apartments": [
        {
        	"name": "The Pavilion on Berry",
        	"image": "image-1.jpg",
        	"price": 512,
        	"popularity": 4,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {        	
        	"name": "Radius @15th",
        	"image": "image-2.jpg",
        	"price": 492,
        	"popularity": 5,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "416 Lofts",
        	"image": "image-3.jpg",
        	"price": 460,
        	"popularity": 3,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Edge on Oak",
        	"image": "image-4.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 5",
        	"image": "image-5.jpg",
        	"price": 539,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 6",
        	"image": "image-6.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 7",
        	"image": "image-7.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 8",
        	"image": "image-8.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 9",
        	"image": "image-9.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 10",
        	"image": "image-10.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 11",
        	"image": "image-11.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        },
        {

        	"name": "Apartmemt 12",
        	"image": "image-12.jpg",
        	"price": 532,
        	"popularity": 7,
        	"description": "University of Minnesota, Twin Cities Minneapolis, MN"
        }
    ]
}

document.getElementById("apt1Name").innerHTML= data.apartments[0].name;
document.getElementById("apt1Price").innerHTML= data.apartments[0].price;
document.getElementById("apt1Desc").innerHTML= data.apartments[0].description;

document.getElementById("apt2Name").innerHTML= data.apartments[1].name;
document.getElementById("apt2Price").innerHTML= data.apartments[1].price;
document.getElementById("apt2Desc").innerHTML= data.apartments[1].description;

document.getElementById("apt3Name").innerHTML= data.apartments[2].name;
document.getElementById("apt3Price").innerHTML= data.apartments[2].price;
document.getElementById("apt3Desc").innerHTML= data.apartments[2].description;

document.getElementById("apt4Name").innerHTML= data.apartments[3].name;
document.getElementById("apt4Price").innerHTML= data.apartments[3].price;
document.getElementById("apt4Desc").innerHTML= data.apartments[3].description;

document.getElementById("apt5Name").innerHTML= data.apartments[4].name;
document.getElementById("apt5Price").innerHTML= data.apartments[4].price;
document.getElementById("apt5Desc").innerHTML= data.apartments[4].description;

document.getElementById("apt6Name").innerHTML= data.apartments[5].name;
document.getElementById("apt6Price").innerHTML= data.apartments[5].price;
document.getElementById("apt6Desc").innerHTML= data.apartments[5].description;

document.getElementById("apt7Name").innerHTML= data.apartments[6].name;
document.getElementById("apt7Price").innerHTML= data.apartments[6].price;
document.getElementById("apt7Desc").innerHTML= data.apartments[6].description;

document.getElementById("apt8Name").innerHTML= data.apartments[7].name;
document.getElementById("apt8Price").innerHTML= data.apartments[7].price;
document.getElementById("apt8Desc").innerHTML= data.apartments[7].description;

document.getElementById("apt9Name").innerHTML= data.apartments[8].name;
document.getElementById("apt9Price").innerHTML= data.apartments[8].price;
document.getElementById("apt9Desc").innerHTML= data.apartments[8].description;

document.getElementById("apt10Name").innerHTML= data.apartments[9].name;
document.getElementById("apt10Price").innerHTML= data.apartments[9].price;
document.getElementById("apt10Desc").innerHTML= data.apartments[9].description;

document.getElementById("apt11Name").innerHTML= data.apartments[10].name;
document.getElementById("apt11Price").innerHTML= data.apartments[10].price;
document.getElementById("apt11Desc").innerHTML= data.apartments[10].description;

document.getElementById("apt12Name").innerHTML= data.apartments[11].name;
document.getElementById("apt12Price").innerHTML= data.apartments[11].price;
document.getElementById("apt12Desc").innerHTML= data.apartments[11].description;


$('.sort-price').click(function(e) {
    var $sort = this;
    var $table = $('#sort-table');
    var $rows = $('tbody > tr ',$table);
    $rows.sort(function(a, b){
        var keyA = $('td',a).text();
        var keyB = $('td',b).text();
        if($($sort).hasClass('des')){
            return (keyA < keyB) ? 1 : 0;
        } else {
            return (keyA < keyB) ? 1 : 0;
        }
    });
    $.each($rows, function(index, row){
      $table.append(row);
    });
    e.preventDefault();
});

$('.sort-popularity').click(function(e) {
    var $sort = this;
    var $table = $('#sort-table');
    var $rows = $('tbody > tr ',$table);
    $rows.sort(function(a, b){
        var keyA = $('td',a).text();
        var keyB = $('td',b).text();
        if($($sort).hasClass('des')){
            return (keyA < keyB) ? 1 : 0;
        } else {
            return (keyA < keyB) ? 1 : 0;
        }
    });
    $.each($rows, function(index, row){
      $table.append(row);
    });
    e.preventDefault();
});
