<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$localhost = "127.0.0.1";
$username = "root";
$password = "kaktus123";
$dbname = "first";

// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
if (isset($_SERVER['PATH_INFO'])) $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

// create connection to mysql
$conn = new mysqli($localhost, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8');

if($conn->connect_error) {
  die("Error : " . $conn->connect_error);
}

if (!isset($_GET['id'])) $_GET['id'] = 0;

$table = trim($_SERVER['PATH_INFO'],'/');



switch ($table) {
  case 'artist':
    $columnNames = array('name', 'age', 'country');
    $columnValues = array('$name', '$age', '$country');
    break;

  case 'album':
    $columnNames = array('name', 'artist', 'image');
    $columnValues = array('$name', '$artist', '$image');
    break;
}

function dostuff($names, $values) {
  for ($i = 0; $i < count($names); $i++) {
    $var1 = $names[$i];
    $var2 = $values[$i];
    //echo "<p>$var1 = $var2</p>";
  }
}

dostuff($columnNames, $columnValues);


switch ($method) {
  case 'GET':
    $id = $_GET['id'];
    $sql = "select * from $table" . ($id?" where id=$id":'');
    /*
    $sql = "SELECT album.id, album.artist, album.name, image, song.name as songname, duration from album
            INNER JOIN songsOnAlbum on album.id = songsOnAlbum.album_id
            INNER JOIN song on songsOnAlbum.song_id = song.id";
            */
    break;

  case 'PUT':
    $sql = "update $table set ";
    for ($i = 0; $i < count($columnNames); $i++) {
      $columnValues[$i] = $input[$columnNames];
      if ($i > 0) $sql += ", ";
      $sql += " $columnNames = $columnValues ";

    }
    /*
    $id = $input["id"];
    $name = $input["name"];
    $age = $input["age"];
    $country = $input["country"];
    $sql = "update $table set name = '$name', age = $age, country = '$country'
    */
    $sql += "where id=$id";
    break;

  case 'POST':
    $name = $input["number"];
    $age = $input["amount"];
    $country = $input["country"];
    $sql = "insert into artist (name, age, country) ('$name', '$age', '$country')";
    break;

  case 'DELETE':
    $id = $_GET['id'];
    $sql = "delete from artist where id=$id";
    break;
}

// run SQL statement
$result = mysqli_query($conn,$sql);
/*
$prevRow = 0;

function setAlbumVars($aItem) {
    $uId = $aItem['id'];
    $uArtist = $aItem['artist'];
    $uName = $aItem['name'];
    $uImage = $aItem['image'];
}

for ($i = 0; $row = mysqli_fetch_object($result); $i++) {
  $items = array();
  $item = json_decode(json_encode($row), true);
  $currentSongs = array();
  //sets album vars on first run of loop
  if ($i == 0) {
      $prevRow = $item['id'];
      setAlbumVars($item);
  }
  //adds song to list of songs
  if ($item['id'] == $prevRow) {
    array_push($currentSongs, $item['songname']);
    array_push($items, $item['songname']);
    echo $items[0] . "<br>";
  }
  //sets album vars again, does something with currentsongs and creates it again
  else {
    $prevRow = $item['id'];
    setAlbumVars($item);
  }
}

function printe() {
  $attemptmillion = ['id' => '',
    'artist' => '',
    'name' => '',
    'image' => '',
    'songs' => [
      'name' => '',
      'duration' => ''
      ]
  ];
}

//finished json looks something like this
$completed = [
  'id' => $id,
  'artist' => $artist,
  'name' => $name,
  'image' => $image,
  'songs' => [
    'name' => $songname,
    'duration' => $duration
  ]
];
*/


// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($conn));
}

// print results, insert id or affected row count
if ($method == 'GET') {
  if (!$id) echo '[';
  for ($i=0;$i<mysqli_num_rows($result);$i++) {
    echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
  }
  if (!$id) echo ']';
} elseif ($method == 'POST') {
  echo mysqli_insert_id($conn);
} else {
  echo mysqli_affected_rows($conn);
}

// close mysqli database connection
$conn->close();
?>
