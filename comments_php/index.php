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
    
    ?>
</body>
</html>