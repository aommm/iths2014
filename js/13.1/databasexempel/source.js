document.addEventListener("deviceready", deviceReady, false);

console.log("file loaded");

function print(){
	var db = window.openDatabase("test", "1.0", "Test DB", 10000000);

	db.transaction(function(tx){
		tx.executeSql("select * from people", [], function(tx, res){
			$("#result").html("");

			for(var i=0; i<res.rows.length; i++) {
				var item = res.rows.item(i);
				$("#result").append("id: "+item.id+" name: "+item.name+" age: "+item.age+"<br>");						
			}
		});
	});
}

function deviceReady() {
	initDB();
	initLocalStorage();	
}

function initLocalStorage() {
	$("#lsread").on("click", function(){
		console.log("read");
		var val = window.localStorage.getItem($("#key").val());
		$("#val").val(val);
	});

	$("#lswrite").on("click", function(){
		console.log("write");
		window.localStorage.setItem($("#key").val(), $("#val").val());
	});
}

function initDB() {
	var db = window.openDatabase("test", "1.0", "Test DB", 10000000);

	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS people (id integer primary key, name text, age integer)');
	}, function(){
		console.log("fail :(");
	}, function() {
		console.log("success! :)");
	});

	print();

	$("#write").on("click",function() {
		var name = $("#name").val();
		var age = Number($("#age").val());
		console.log("write", name, age);
		db.transaction(function(tx, res){
			console.log(res);
			tx.executeSql("INSERT INTO people (name, age) values (?,?)", [name, age], function(tx, res) {
				console.log("insertId: " + res.insertId);
				console.log("rowsAffected: " + res.rowsAffected);

				print();
			});
		});
	});

	$("#update").on("click", function(){
		var id = $("#id").val();
		var name = $("#name").val();
		var age = Number($("#age").val());
		db.transaction(function(tx, res){
			console.log(res);
			tx.executeSql("update people set name=?,age=? where id=?", [name,age,id]);

			print();
		});
	});

	$("#delete").on("click", function(){
		var id = $("#id").val();
		db.transaction(function(tx, res){
			console.log(res);
			tx.executeSql("delete from people where id=?",[id]);

			print();
		});
	});
}

