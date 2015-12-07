'use strict';
define(function(require,exports,module){
	var jquery=require('jquery');
	var View=require('View');
	var HeaderView=require('HeaderView');
	var MenuView=require('MenuView');
	var TableView=require('TableView');
	var Store=require('Store');
	var LoginForm = require('LoginForm');
	/**
	var Promise=require('promise').polyfill();
	//var fetch=require('fetch');

  	var result = fetch('mock/table.json');
    result.then(function(response) {
		return response.json()
	}).then(function(json) {
		console.log('parsed json', json)
	}).catch(function(ex) {
		console.log('parsing failed', ex)
	})
	**/
	var headerView=new HeaderView({
		tmplName:'header',
		holder:'#header'
	});
	var menuView=new MenuView();
	var tableSore=new Store({
		urlApi:'mock/table.json'
	},function(){
		console.log(this.records);
		tableView.redraw({records:this.records});
	});
	
	//console.log(store.getRecords());
	//console.log(store.records);
	var tableView=new TableView({
		tmplName:'mytable',
		tmplData:{data:[]},
		holder:'#content'
	})

	var loginForm = new LoginForm({
		tmplName:'loginForm',
		//tmplData:{data:[]},
		holder:'#login'
	})

})