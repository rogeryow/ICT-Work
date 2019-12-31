<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Control extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model('ControlModel','control');
	}

	public function index() {
		$this->load->helper('url');
		$this->load->view('View');
	}

	public function getDataByID($table, $col, $id) {
		$this->control->getDataByID($table, $col, $id);
	}

	public function getTableUsers() {
		$cols = array("id","name");
		$this->control->set_table("vw_disability_list");
		$this->control->set_select($cols);
		$this->control->set_column_order($cols);
		$this->control->set_order( array('id' => 'desc') );
		
		$name = $this->input->post('name');

		if($name != "") {
			$this->control->set_like(array( "name"=> $name));
		}

		$list = $this->control->get_datatables();
		$data = array();

		foreach ($list as $val) {
		$no = $_POST['start'];
			$no++;
			$row = array();
			$row[$cols[0]] = $val->id;
			$row[$cols[1]] = $val->name;

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
