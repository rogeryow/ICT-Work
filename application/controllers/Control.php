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

	public function upload_logs() {
		$logs = json_decode($_POST['logs']);
				
		if(empty($logs)) {
			echo json_encode(array("status" => FALSE));
		} else {
			$keys = array('user_id', 'date', 'morning_in', 'morning_out', 'afternoon_in', 'afternoon_out');
			$data = [];

			foreach($logs as $log) {
				$newData = array(
					'user_id' => $log[0],
					'date' => $log[1],
					'morning_in' => $log[2],
					'morning_out' => $log[3],
					'afternoon_in' => $log[4],
					'afternoon_out' => $log[5],
				);
				array_push($data, $newData);
			}
			
			$obj = $this->control->save_batch($data);
			echo json_encode(array("status" => TRUE, "duplicates" => $obj['duplicates'], "inserts" => $obj["inserts"]));
		}
		
	}

	public function getDataByID($table, $col, $id) {
		$this->control->getDataByID($table, $col, $id);
	}

	public function getDept() {
		echo json_encode($this->control->getDept());
	}

	public function getLogs() {
		$uri = $this->uri->uri_to_assoc();

		$name = "";
		$date_start = "";
		$date_end = "";
		$department = "";

		if(!empty($uri['name'])) {
			$name = $uri['name'];
		}

		if(!empty($uri['date_start'])) {
			$date_start = $uri['date_start'];
		}

		if(!empty($uri['date_end'])) {
			$date_end = $uri['date_end'];
		}

		if(!empty($uri['department'])) {
			$department = $uri['department'];
		}

		if($department != "") {
			$this->control->set_like(array( "group_id" => $department));
		}
		
		if($name != "") {
			$this->control->set_like(array( "name"=> $name));
			$this->control->set_or_like(array( "user_id"=> $name));
		}

		if($date_start != "") {
			$this->control->set_date_start($date_start);
		}

		if($date_end != "") {
			$this->control->set_date_end($date_end);
		}

		$this->control->set_table("vw_logs");
		echo json_encode($this->control->getLogs());
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
		$dept = $this->input->post('department');

		if($dept != "") {
			$this->control->set_like(array( "group_id" => $dept));
		}

		if($name != "") {
			$this->control->set_like(array( "name" => $name));
			$this->control->set_or_like(array( "user_id" => $name));
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
			"department" => $dept,
		);
		//output to json format
		echo json_encode($output);
	}


}
