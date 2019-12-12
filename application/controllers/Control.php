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
		$this->control->set_table("users");
		$this->control->set_select($cols);
		$this->control->set_column_order($cols);
		// $this->Control->set_order( array('gender' => 'desc') );

		$list = $this->control->get_datatables();
		$data = array();


		foreach ($list as $val) {
		$no = $_POST['start'];
			$no++;
			$row = array();
			$row[$cols[0]] = $val->id;
			$row[$cols[1]] = $val->surname;
			$row[$cols[2]] = $val->gender;
			$row[$cols[3]] = $val->contact;

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
