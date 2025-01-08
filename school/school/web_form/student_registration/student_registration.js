frappe.ready(function() {
	// bind events here
	frappe.web_form.after_load = () =>{
		frappe.web_form.on("dob",(field,value)=>{
			frappe.msgprint("welcome to frappe")
		})
	}
})