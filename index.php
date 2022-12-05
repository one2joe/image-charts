<?php
$c = [
  "type" => "pie", 
  "data" => [
		"datasets" => [
		   [
			  "data" => [84, 28, 57, 19, 97], 
			  "backgroundColor" => [
					"rgba(255,99,132,0.5)", 
					"rgba(255,159,64,0.5)", 
					"rgba(255,205,86,0.5)", 
					"rgba(75,192,192,0.5)", 
					"rgba(54,162,235,0.5)" 
				],
			  "label" => "Dataset 1"
		   ] 
		], 
		"labels" => [
					   "Red", 
					   "Orange", 
					   "Yellow", 
					   "Green", 
					   "Blue" 
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