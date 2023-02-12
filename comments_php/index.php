<?php 
    require_once "controller.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comments</title>
</head>
<body>
    <h1>Comments App</h1>
    <h3>Add Comment</h3>
    <form action="index.php" method="get">
        <textarea name="comment" id="" cols="30" rows="10" required placeholder='Your Comment'></textarea>
        <button type="reset">Reset</button>
        <button type="submit" name='submit'>Submit</button>
    </form>
    <h3>Comments</h3>
        <?php 
        $select_comments_query = "SELECT * FROM comments ORDER BY date_created desc";
        $fetch_comments = mysqli_query($connection, $select_comments_query);
        while ($row = mysqli_fetch_assoc($fetch_comments))
        {
            echo "<div class='comment'>";
                echo "<h4>".$row['user_id']."</h4>";
                echo "<small>".$row['date_created']."</small>";
                echo "<p>".$row['content']."</p>";
                echo "<div class='replies'>";
                    echo "<div class='reply'>reply 1</div>";
                    echo "<div class='reply'>reply 2</div>";
                    echo "<div class='reply'>reply 3</div>";
                    echo "<div class='reply'>reply 4</div>";
                echo"</div>";
            echo "</div>";
        }
    ?>
</body>
</html>