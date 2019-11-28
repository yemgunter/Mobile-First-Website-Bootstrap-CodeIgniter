<br>
<div id="msg">
    <?= $send ?>
</div>
<div class="container">
    <div class="row">
        <form id="email-form" name="emailform" action="contact" method="post">
            <div class="form-group">
                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" maxlength="64" value="">
                <input type="text" class="form-control" id="email1" name="email1" placeholder="Email" maxlength="64" value="">
                <input type="text" class="form-control" id="email2" name="email2" placeholder="Re-Enter Email" maxlength="64" value="">
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="64" value="">
                <textarea class="form-control" id="message" name="message" placeholder="Enter Message" maxlength="1000" rows="10"></textarea>
            </div>
            <div class="form-group">
                <button id="email-send" type="button" class="">Send</button>&nbsp;&nbsp;
                <button id="email-clear" type="button" class="">Clear</button>
            </div>
        </form>

    </div>
</div>
