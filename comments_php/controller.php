<?php 
    session_start();
    require "connection.php";
?>
<?php 
    if(isset($_GET['submit'])) {
        $comment_content = $_GET['comment'];
        $date = date("Y-m-d H:i:s");

        $sql = "INSERT INTO `comments`(`comment_id`, `post_id`, `user_id`, `parent_comment_id`, `content`, `date_created`, `is_edited`) VALUES (NULL, 1, 1, NULL, '$comment_content', '$date' , 0)";

        $run_query = mysqli_query($connection, $sql);
        if($run_query){
            echo "success";
            header('Location: index.php');
        }else{
            echo "Failed to add comment!";
        } 
    }
    if(isset($_GET['reply'])) {
        $comment_content = $_GET['comment'];
        $parent_comment_id = $_GET['reply'];
        $date = date("Y-m-d H:i:s");

        $sql = "INSERT INTO `comments`(`comment_id`, `post_id`, `user_id`, `parent_comment_id`, `content`, `date_created`, `is_edited`) VALUES (NULL, 1, 1, $parent_comment_id, '$comment_content', '$date' , 0)";

        $run_query = mysqli_query($connection, $sql);
        if($run_query){
            echo "success";
            header('Location: index.php');
        }else{
            echo "Failed to add comment!";
        } 
    }

?>