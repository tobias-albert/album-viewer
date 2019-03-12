<?php
//header("Access-Control-Allow-Origin: http://localhost:4200");
http_response_code(200);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$redacted = json_decode(file_get_contents("redacted.json"));
$redactedIp = $redacted->ip;
$redactedUsername = $redacted->username;
$redactedPassword = $redacted->password;

#DigitalOcean db
$serverAdress = $redactedIp;
$username = $redactedUsername;
$password = $redactedPassword;
$dbname = "main";

/*
#localhost
$serverAdress = "127.0.0.1";
$username = "root";
$password = "kaktus123";
$dbname = "first";
*/
// get the HTTP method, path and body of the request
$method = $_SERVER['REQUEST_METHOD'];
if (isset($_SERVER['PATH_INFO'])) $request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
$input = json_decode(file_get_contents('php://input'),true);

// create connection to mysql
$conn = new mysqli($serverAdress, $username, $password, $dbname);
mysqli_set_charset($conn, 'utf8');

if($conn->connect_error) {
  die("Error connecting to sql server : " . $conn->connect_error);
}

$table = (isset($_SERVER['PATH_INFO'])) ? trim($_SERVER['PATH_INFO'],'/') : '';

function printHome($table) {
  echo "invalid url: /".$table;
  readfile("api-home.html");
}

$validTables = array('artist', 'album', 'song');

if (!in_array($table, $validTables)) {
  printHome($table);
}
/*
if ($table != 'artist' && $table != 'album' && $table != 'song') {
  printHome($table);
}*/
else {


function doStuff($componentType, $idValue, $otherValue) {
  $sql = "";
  switch ($componentType) {
    case 'artist':
      $sql = "SELECT artist.id AS id, artist.name AS name, artist.country AS country FROM artist ";
      break;

    case 'album':
      $sql = "SELECT album.id AS id, album.name AS name, artist.name AS artist, album.image AS image
              FROM album
              INNER JOIN artist ON album.artist_id = artist.id ";
      break;

    case 'song':
      $sql = "SELECT song.id AS id, song.name AS name, artist.name AS artist, album.name AS album, song.duration AS duration
              FROM song
              INNER JOIN album ON song.album_id = album.id
              INNER JOIN artist ON song.artist_id = artist.id ";
      $sql .= ($otherValue != '') ? " WHERE album.id = $otherValue" : '';
      break;

  }
  $sql .= ($idValue != '') ? " WHERE $componentType.id=$idValue" : '';
  return $sql;
}

switch ($method) {
  case 'GET':
    $id = $table.".id";
    $idValue = (isset($_GET['id'])) ? $_GET['id'] : '';
    $otherValue = (isset($_GET['album_id'])) ? $_GET['album_id'] : '';

    $sql = doStuff($table, $idValue, $otherValue);
    break;

  case 'PUT':
  /*
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
  echo "hei";
  /*
    $name = $input["number"];
    $age = $input["amount"];
    $country = $input["country"];
    $sql = "insert into artist (name, age, country) ('$name', '$age', '$country')";
    */
    $name = $_POST["name"];
    $artist = $_POST["artist"];
    $image = $_POST["image"];
    //$songName = $input["song.name"];
    $sql = "INSERT into album (name, artist_id, image)
            VALUES ('$name', '$artist', '$image') ";
    break;

  case 'DELETE':
    $id = $_GET['id'];
    $sql = "delete from artist where id=$id";
    break;
}

// run SQL statement
$result = mysqli_query($conn,$sql);

/*

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
  //if (!$id)
  echo '[';
  for ($i = 0; $i < mysqli_num_rows($result); $i++) {
    echo ($i > 0?',':'').json_encode(mysqli_fetch_object($result));
  }
  //if (!$id)
  echo ']';
} elseif ($method == 'POST') {
  echo mysqli_insert_id($conn);
} else {
  echo mysqli_affected_rows($conn);
}

}
// close mysqli database connection
$conn->close();
?>
