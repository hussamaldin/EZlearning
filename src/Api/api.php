<?php
include 'db.php';
$action='';
if(isset($_GET['action'])){
    $action=$_GET['action'];
}
if($action=='add'){
    $first=$_POST['first'];
    $last=$_POST['last'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    $sql="INSERT INTO `customer` (`First`,`Last`,`Email`,`Address`,`City`,`State`,`Phone`) values ('$first','$last','$email','$address','$city','$state','$phone')";
    $res=$conn->query($sql);
    if(!empty($res) && $res->num_rows > 0){
        echo 'success';
    }
    else{
        echo 'error';
    }
}
if($action=='show'){
    $sql=$conn->query("SELECT * FROM customer");
    $users=array();
    while($row=$sql->fetch_assoc()){
        array_push($users,$row);
    }
    echo json_encode($users);
}
if($action=='view'){
    $re=$_GET['id'];
$sql=$conn->query("SELECT * FROM customer where id='$re'");
$user=array();
while($row=$sql->fetch_assoc()){
    array_push($user,$row);
}
echo json_encode($user);
}
if($action=='delete'){
    $re=$_GET['id'];
    $sql="DELETE FROM customer where id='$re'";
    $res=$conn->query($sql);
    $sql2="UPDATE customer set id='$re'-1 where id >'$re'";
    $res2=$conn->query($sql2);
    if(!empty($res) && $res->num_rows > 0){
        echo 'success';
    }
    else{
        echo 'error';
    }
}
if($action=='update'){
    $re=$_GET['id'];
    $first=$_POST['first'];
    $last=$_POST['last'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $address=$_POST['address'];
    $city=$_POST['city'];
    $state=$_POST['state'];
    $sql="UPDATE customer SET First='$first', Last='$last', Email='$email', Address='$address', City='$city', State='$state', Phone='$phone' WHERE id='$re'";
    $res=$conn->query($sql);
    if(!empty($res) && $res->num_rows > 0){
        echo 'success';
    }
    else{
        echo 'error';
    }

}
?>