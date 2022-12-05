<?php
$c = [
	"type" => 'bar',
	"data" => [
	  "labels" => ['Attend', 'Referral', 'Thank', 'Visitor', '121', 'CEU'],
	  "datasets" => [
		[
		  "label" => 'Current',
		  "backgroundColor" => [
			'rgb(200, 200, 200)',
			'rgb(200, 200, 200)',
			'rgb(200, 200, 200)',
			'rgb(200, 200, 200)',
			'rgb(200, 200, 200)',
			'rgb(200, 200, 200)',
		  ],
		  "data" => [15, 10, 15, 0, 0, 20],
		],
		[
		  "label" => 'Step 1',
		  "backgroundColor" => 'rgb(54, 162, 235)',
		  "data" => [0, 5, 0, 10, 15, 0],
		],
		[
		  "label" => 'Step 2',
		  "backgroundColor" => 'rgb(75, 192, 192)',
		  "data" => [0, 0, 0 , 10, 5, 0],
		],
	  ],
	],
	"options" => [
	  "title" => [
		"display" => true,
		"text" => 'Member Traffic Light',
	  ],
	  "scales" => [
		"xAxes" => [
		  [
			"stacked" => true,
		  ],
		],
		"yAxes" => [
		  [
			"stacked" => true,
			"ticks" => [
				"stepSize" => 5
			]
		  ],
		],
	  ],
	],
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
$cropped = imagecrop($image, ['x' => 0, 'y' => 12, 'width' => imagesx($image), 'height' => imagesy($image) - 12]);
if ($cropped !== FALSE) {
    // imagepng($cropped, "cropped_{$file}");
    imagepng($cropped, $file);
    imagedestroy($cropped);
}
imagedestroy($image);
if (!empty($_GET['output']) AND $_GET['output'] == 'html') die("<img src=\"chart.png\">");
?>