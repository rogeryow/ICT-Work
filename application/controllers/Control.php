<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('ControlModel','control');
	}

	public function index()
	{
		$this->load->helper('url');
		$this->load->view('View');
	}

	public function tableList(){
		
	}


}
