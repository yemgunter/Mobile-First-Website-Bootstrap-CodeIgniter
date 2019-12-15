<div class="container-contact">
<div class="content-container">
<br>
    <div id="msg">
        <?= $send ?>
    </div>
    <div class="form-div">
        <form id="email-form" name="email-form"  action="contact" class="form-horizontal" method="post">
            <div class="form-group">

                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" maxlength="64" value="" required>

                <input type="text" class="form-control" id="email1" name="email1" placeholder="Email" maxlength="64" value="" required>

                <input type="text" class="form-control" id="email2" name="email2" placeholder="Re-Enter Email" maxlength="64" value="" required>

                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="64" value="" required>

                <textarea class="form-control" cols="40" id="message" name="message" placeholder="Enter Your Message" maxlength="1000" rows="5"  required ></textarea>
            </div>

            <div class="form-actions">
                <button id="email-send" type="submit" class="btn btn-success">Send</button>&nbsp;&nbsp;
                <button id="email-clear" type="reset" class="btn btn-primary">Clear</button>
            </div>
        </form>
    </div>

</div>


