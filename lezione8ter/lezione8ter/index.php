<?php include 'functions.php'; ?>
<?php testata(); ?>

<main>
    <div class="container w-50 text-center p-5">

    <span class="position-relative material-symbols-outlined p-5 fs-1 text-success">
    sentiment_satisfied
    <span class="msgsuccess position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6"></span>
    </span>

    <span class="position-relative material-symbols-outlined p-5 fs-1 text-warning">
    sentiment_neutral
    <span class="msgwaring position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6"></span>
    </span>

    <span class="position-relative material-symbols-outlined p-5 fs-1 text-danger">
    mood_bad
    <span class="msgdanger position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6"></span>
    </span>


    </div>

    <div class="msg"></div>

</main>


<?php footer(); ?>