<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ControlModel extends CI_Model {

	var $cols = "";
	var $table = "";
	var $join_table = "";
	var $join_where = "";
	var $join_condition = "";
	var $column_order = array(); 
	var $column_search = array(); 
	var $order = array(); 
	var $where = array();
	var $having = array();
	var $group = array();


	public function set_table($val){
		$this->table = $val;
	}

	public function get_table(){
		return $query = $this->db->from($this->table);
	}

	public function set_join($table,$where,$condition){
		$this->join_table = $table; 
		$this->join_where = $where; 
		$this->join_condition = $condition; 
	}

	public function get_join(){
		return $this->db->join($this->join_table,$this->join_where,$this->join_condition);
	}

	public function set_column_order($val){
		$this->column_order = $val;
	}

	public function set_column_search($val){
		$this->column_search = $val;
	}

	public function set_order($val) {
		$this->order = $val;
	}

	public function set_select($val) {
	    $this->db->select($val);
	}

	public function set_like($val) {
		$this->where = $val; 
	}

	public function set_having($val) {
		$this->having = $val; 
	}

	public function set_group($val) {
		$this->group = $val;
	}
 
	public function get_like() {
		return $this->db->like($this->where);
	}

	public function get_having() {
		return $this->db->having($this->having);
	}

	public function get_group() {
		return $this->db->group_by($this->group);
	}

	public function __construct( ){
		parent::__construct();
		$this->load->database();
	}

	private function _get_datatables_query() {	
		$this->get_having();
		$this->get_like();
		$this->get_table();

		if(!empty($this->join_table)){ $this->get_join(); }
		if(!empty($this->group)){ $this->get_group(); }

		$i = 0;
	
		foreach ($this->column_search as $item) {
			if($_POST['search']['value']) {
			
				if($i===0) {
					$this->db->group_start();
					$this->db->like($item, $_POST['search']['value']);
				}
				else{
					$this->db->or_like($item, $_POST['search']['value']);
				}

				if(count($this->column_search) - 1 == $i)
					$this->db->group_end(); 
			}
			$i++;
		}
		
		if(isset($_POST['order'])) {
			$this->db->order_by($this->column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
		} 
		else if(isset($this->order)) {
			$order = $this->order;
			$this->db->order_by(key($order), $order[key($order)]);
		}
	}

	function get_datatables() {
		$this->_get_datatables_query();
		if($_POST['length'] != -1)
		$this->db->limit($_POST['length'], $_POST['start']);
		$query = $this->db->get();
		return $query->result();
	}

	function count_filtered() {
		$this->_get_datatables_query();
		$query = $this->db->get();
		return $query->num_rows();
	}

	public function count_all() {
		$this->db->from($this->table);
		return $this->db->count_all_results();
	}

	public function get_by_id($table, $col, $id){
		$this->db->from($table);
		$this->db->where($col,$id);
		$query = $this->db->get();
		return $query->row();
	}

	public function save($table, $data) {
		$this->db->insert($table, $data);
		return $this->db->insert_id();
	}

	public function update($table, $data, $where) {
		$this->db->update($table, $data, $where);
		return $this->db->affected_rows();
	}

	public function delete_by_id($table, $col, $id) {
		$this->db->where($col, $id);
		$this->db->delete($table);
		return $this->db->affected_rows();
	}

	public function test_result($table = "") {
		$query = $this->db->from($table)->get();

		return array(
		    'query' => $this->db->last_query(),
		    'cols' => $query->num_fields(),
		    'result' => $query->result(),
		);
	}

	public function getDataByID($table, $col, $id) {
		$this->db->where($col, $id);
		$result = $this->db->from($table)->get()->result();
		echo json_encode($result);
	}

}
