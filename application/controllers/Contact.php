<?php

/**************************************************************
 Name: Yolanda Gunter
 Assignment: Final Project
 Purpose: CodeIgniter, jQuery and Boostrap
 Notes: Pulling everything I've learned together for my Final Project
 **************************************************************/

defined('BASEPATH') OR exit('Forbidden');

class Contact extends CI_Controller {

    function __construct() {
        parent::__construct();

        // Load form validation library
        $this->load->library('form_validation');
    }

    private function sendemail() {
        $to = 'test@test.com';
        $from = $this->input->post('name') . '<' . $this->input->post('email1') . '>';
        $reply = $this->input->post('email1');
        $subject = $this->input->post('subject');
        $message = $this->input->post('message');

        $headers = 'From: ' . $from . "\r\n";
        $headers .= "Reply-To: " . $from . "\r\n";
        $headers .= 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/plain; charset=iso-8859-1' . "\r\n";

        return mail($to, $subject, $message, $headers);
    }

    public function index() {
        $data['title'] = "Contact";

        $this->form_validation->set_rules('name', 'Name', 'trim|required|max_length[64]');
        $this->form_validation->set_rules('email1', 'Return Email', 'trim|required|valid_email|max_length[64]');
        $this->form_validation->set_rules('email2', 'Re-enter Email', 'trim|required|valid_email|max_length[64]|matches[email1]');
        $this->form_validation->set_rules('subject', 'Subject', 'trim|required|max_length[64]');
        $this->form_validation->set_rules('message', 'Message', 'trim|required|max_length[400]');

        if ($this->form_validation->run() === FALSE) {
            if(!empty(validation_errors())){
                $data['send'] = "Please correct form entry errors!";
            } else {
                $data['send'] = "<br>";
            }
            //will display form if first time (run is false) or if there are errors
            $this->load->view('templates/header', $data);
            $this->load->view('pages/contact');
            $this->load->view('templates/footer');
        } else {
            if($this->sendemail()){
                $data['send'] = "Sent!";
            } else {
                $data['send'] = "Please correct form entry errors!";
            }
            $this->load->view('templates/header', $data);
            $this->load->view('pages/contact');
            $this->load->view('templates/footer');
        }
    }

}
