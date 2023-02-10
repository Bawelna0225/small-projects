<?php 
    session_start();
    require "connection.php";
?>
<?php 
    if(isset($_GET['submit'])) {
        $comment_content = $_GET['comment'];
        $date = date("Y-m-d H:i:s");
    }

?>