<?php
$c = [
	"type" => "bar",
	"data" => [
	  "labels" => [
		"January", "February", "March", "April", "May", "June", "July"
	  ],
	  "datasets" => [
		[
		  "label" => "Score",
		  "backgroundColor" => [
			"rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(255, 99, 132)"
		  ],
		  "yAxisID" => "y",
		  "data" => [
			226, 16, -44, 84, -11, -14, 25
		  ]
		],
		[
		  "label" => "Current",
		  "backgroundColor" => "rgb(201, 203, 207)",
		  "yAxisID" => "y1",
		  "data" => [
			-61, 21, -68, -50, -56, 89, -95
		  ]
		]
	  ]
	],
	"options" => [
	  "title" => [
		"display" => true,
		"text" => "Member Traffic Light"
	  ],
	  "tooltips" => [
		"mode" => "index",
		"intersect" => true
	  ],
	  "scales" => [
		"yAxes" => [
		  [
			"id" => "y",
			"type" => "linear",
			"display" => true,
			"position" => "left"
		  ],
		  [
			"id" => "y1",
			"type" => "linear",
			"display" => true,
			"position" => "right",
			"gridLines" => [
			  "drawOnChartArea" => false
			]
		  ]
		]
	  ]
	]
];
$c = json_encode($c);
$data = [
    'bkg' => 'white',
    'c' => $c,
];
$data = http_build_query($data);
$url = "https://image-charts.com/chart.js/2.8.0?{$data}";
$file = 'chart.png';
file_put_contents($file, file_get_contents($url));
// exit;
$image = imagecreatefrompng($file);
$cropped = imagecrop($image, ['x' => 0, 'y' => 12, 'width' => imagesx($image), 'height' => imagesy($image)]);
if ($cropped !== FALSE) {
    // imagepng($cropped, "cropped_{$file}");
    imagepng($cropped, $file);
    imagedestroy($cropped);
}
imagedestroy($image);
?>