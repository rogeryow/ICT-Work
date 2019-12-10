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

	public function getUsers(){
		return $this->control->get_json_result('users');
	}

	public function getTableUsers(){
		$cols = array("id","surname","gender","contact");
		$this->control->set_select($cols);
		$this->control->set_table("users");
		$this->control->set_column_order($cols);

		$list = $this->control->get_datatables();
		$data = array();
		$no = $_POST['start'];
		foreach ($list as $val) {
			$no++;
			$row = array();
			$row[] = $val->id;
			$row[] = $val->surname;
			$row[] = $val->gender;
			$row[] = $val->contact;

			$data[] = $row;
		}

		$output = array(
			"draw" => $_POST['draw'],
			"recordsTotal" => $this->control->count_all(),
			"recordsFiltered" => $this->control->count_filtered(),
			"data" => $data,
		);
		//output to json format
		echo json_encode($output);
	}


}
