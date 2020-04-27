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

	public function upload() {
		$this->load->helper('url');
		$this->load->view('upload');
	}

	public function getDataByID($table, $col, $id) {
		$this->control->getDataByID($table, $col, $id);
	}

	public function getTableUsers() {
		$cols = array(
			"user_id",
			"name",
			"date", 
			"morning_in", 
			"morning_out",
			"afternoon_in", 
			"afternoon_out",
		);
		$this->control->set_table("vw_logs");
		$this->control->set_select($cols);
		$this->control->set_column_order($cols);
		$this->control->set_order( array('user_id' => 'desc') );
		
		$name = $this->input->post('name');
		$date_start = $this->input->post('date_start');
		$date_end = $this->input->post('date_end');

		if($name != "") {
			$this->control->set_like(array( "name"=> $name));
		}

		if($date_start != "") {
			$this->control->set_date_start($date_start);
		}

		if($date_end != "") {
			$this->control->set_date_end($date_end);
		}


		$list = $this->control->get_datatables();
		$data = array();

		foreach ($list as $val) {
		$no = $_POST['start'];
			$no++;
			$row = array();
			$row[$cols[0]] = $val->user_id;
			$row[$cols[1]] = $val->name;
			$row[$cols[2]] = $val->date;
			$row[$cols[3]] = $val->morning_in;
			$row[$cols[4]] = $val->morning_out;
			$row[$cols[5]] = $val->afternoon_in;
			$row[$cols[6]] = $val->afternoon_out;

			$data[] = $row;
		}

		$output = array(
			"draw" => $_POST['draw'],
			"recordsTotal" => $this->control->count_all(),
			"recordsFiltered" => $this->control->count_filtered(),
			"data" => $data,
			"name" => $name,
			"dateStart" => $date_start,
			"dateEnd" => $date_end,
		);
		//output to json format
		echo json_encode($output);
	}


}
