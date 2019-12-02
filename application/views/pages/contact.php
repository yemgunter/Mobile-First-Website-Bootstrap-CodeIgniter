<br>
<div id="msg">
    <?= $send ?>
</div>
<div class="container">
    <div class="form-div">
        <form id="email-form" name="email-form" action="contact" method="post">
            <div class="form-group">
                <label for="name">Name :</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" maxlength="64" value="" required>

               <label for="email1">Email :</label>
                <input type="text" class="form-control" id="email1" name="email1" placeholder="Email" maxlength="64" value="" required>


               <label for="email2">Re-Enter Email :</label>
                <input type="text" class="form-control" id="email2" name="email2" placeholder="Re-Enter Email" maxlength="64" value="" required>


               <label for="subject">Subject :</label>
                <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" maxlength="64" value="" required>


               <label for="message">Message :</label>
                <textarea class="form-control" cols="40" id="message" name="message" placeholder="Enter Your Message" maxlength="1000" rows="10"  required ></textarea>
            </div>
            <div class="form-actions">
                <button id="email-send" type="submit" class="btn btn-success">Send</button>&nbsp;&nbsp;
                <button id="email-clear" type="reset" class="btn btn-primary">Clear</button>
            </div>
        </form>

    </div>
</div>


